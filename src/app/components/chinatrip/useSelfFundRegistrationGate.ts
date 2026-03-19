"use client";

import { useEffect, useState } from "react";
import {
  SELF_FUND_OPEN_AT_LABEL,
  SELF_FUND_REGISTRATION_ENDPOINT,
  type SelfFundRegistrationGateResponse,
} from "./selfFundRegistration";

type GateState = {
  isLoading: boolean;
  isLocked: boolean;
  opensAtLabel: string;
  registrationUrl: string | null;
};

const defaultState: GateState = {
  isLoading: true,
  isLocked: true,
  opensAtLabel: SELF_FUND_OPEN_AT_LABEL,
  registrationUrl: null,
};

let cachedState: GateState | null = null;
let inFlightRequest: Promise<GateState> | null = null;

async function loadGateState() {
  if (cachedState) {
    return cachedState;
  }

  if (!inFlightRequest) {
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
            registrationUrl: null,
          };

          return cachedState;
        }

        cachedState = {
          isLoading: false,
          isLocked: false,
          opensAtLabel: SELF_FUND_OPEN_AT_LABEL,
          registrationUrl: data.url,
        };

        return cachedState;
      })
      .catch(() => {
        cachedState = {
          isLoading: false,
          isLocked: true,
          opensAtLabel: SELF_FUND_OPEN_AT_LABEL,
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

  return gateState;
}
