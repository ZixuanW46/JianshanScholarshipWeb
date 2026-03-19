"use client";

import { useEffect, useRef, useState } from "react";
import {
  SELF_FUND_OPEN_AT_LABEL,
  SELF_FUND_REGISTRATION_ENDPOINT,
  type SelfFundRegistrationGateResponse,
} from "./selfFundRegistration";

type GateState = {
  isLoading: boolean;
  isLocked: boolean;
  opensAtLabel: string;
  opensAtIso: string | null;
  registrationUrl: string | null;
};

const defaultState: GateState = {
  isLoading: true,
  isLocked: true,
  opensAtLabel: SELF_FUND_OPEN_AT_LABEL,
  opensAtIso: null,
  registrationUrl: null,
};

let cachedState: GateState | null = null;
let inFlightRequest: Promise<GateState> | null = null;

async function loadGateState(force = false) {
  if (cachedState && !force) {
    return cachedState;
  }

  if (!inFlightRequest || force) {
    inFlightRequest = fetch(SELF_FUND_REGISTRATION_ENDPOINT, {
      cache: "no-store",
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to load self-fund registration gate.");
        }

        const data =
          (await response.json()) as SelfFundRegistrationGateResponse;

        if (data.locked) {
          cachedState = {
            isLoading: false,
            isLocked: true,
            opensAtLabel: data.opensAtLabel,
            opensAtIso: data.opensAtIso,
            registrationUrl: null,
          };

          return cachedState;
        }

        cachedState = {
          isLoading: false,
          isLocked: false,
          opensAtLabel: SELF_FUND_OPEN_AT_LABEL,
          opensAtIso: null,
          registrationUrl: data.url,
        };

        return cachedState;
      })
      .catch(() => {
        cachedState = {
          isLoading: false,
          isLocked: true,
          opensAtLabel: SELF_FUND_OPEN_AT_LABEL,
          opensAtIso: null,
          registrationUrl: null,
        };

        return cachedState;
      })
      .finally(() => {
        inFlightRequest = null;
      });
  }

  return inFlightRequest;
}

export function useSelfFundRegistrationGate() {
  const [gateState, setGateState] = useState<GateState>(
    cachedState ?? defaultState,
  );
  const refreshTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (refreshTimeoutRef.current) {
        window.clearTimeout(refreshTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    loadGateState().then((state) => {
      if (isMounted) {
        setGateState(state);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (refreshTimeoutRef.current) {
      window.clearTimeout(refreshTimeoutRef.current);
      refreshTimeoutRef.current = null;
    }

    if (!gateState.isLocked || !gateState.opensAtIso) {
      return;
    }

    const delay = new Date(gateState.opensAtIso).getTime() - Date.now();

    if (delay <= 0) {
      void loadGateState(true).then(setGateState);
      return;
    }

    refreshTimeoutRef.current = window.setTimeout(() => {
      void loadGateState(true).then(setGateState);
    }, delay + 250);
  }, [gateState.isLocked, gateState.opensAtIso]);

  async function refresh() {
    const nextState = await loadGateState(true);
    setGateState(nextState);
    return nextState;
  }

  return {
    ...gateState,
    refresh,
  };
}
