"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import SelfFundRegistrationDialog from "./SelfFundRegistrationDialog";
import { useSelfFundRegistrationGate } from "./useSelfFundRegistrationGate";

type SelfFundRegistrationButtonProps = {
  label: string;
  className: string;
  size?: "default" | "sm" | "lg" | "icon";
  showArrow?: boolean;
};

export default function SelfFundRegistrationButton({
  label,
  className,
  size = "lg",
  showArrow = true,
}: SelfFundRegistrationButtonProps) {
  const [showDialog, setShowDialog] = useState(false);
  const { isLocked, opensAtLabel, registrationUrl, refresh } =
    useSelfFundRegistrationGate();

  async function handleRegistrationClick() {
    const nextState = await refresh();

    if (!nextState.isLocked && nextState.registrationUrl) {
      window.open(nextState.registrationUrl, "_blank", "noopener,noreferrer");
      return;
    }

    setShowDialog(true);
  }

  return (
    <>
      {isLocked || !registrationUrl ? (
        <Button
          size={size}
          className={cn("cursor-pointer", className)}
          onClick={() => {
            void handleRegistrationClick();
          }}
        >
          {label}
          {showArrow ? (
            <ArrowRight
              size={20}
              className="transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:scale-110"
            />
          ) : null}
        </Button>
      ) : (
        <Button asChild size={size} className={cn("cursor-pointer", className)}>
          <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
            {label}
            {showArrow ? (
              <ArrowRight
                size={20}
                className="transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:scale-110"
              />
            ) : null}
          </a>
        </Button>
      )}

      <SelfFundRegistrationDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        opensAtLabel={opensAtLabel}
      />
    </>
  );
}
