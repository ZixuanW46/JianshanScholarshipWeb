"use client";

import { Instagram } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  getSelfFundLockedDescription,
  SELF_FUND_INSTAGRAM_URL,
  SELF_FUND_OPEN_AT_LABEL,
  SELF_FUND_LOCKED_TITLE,
} from "./selfFundRegistration";

type SelfFundRegistrationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  opensAtLabel?: string;
};

export default function SelfFundRegistrationDialog({
  open,
  onOpenChange,
  opensAtLabel = SELF_FUND_OPEN_AT_LABEL,
}: SelfFundRegistrationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-2xl border-white/10 bg-[#111] text-[#FDFBF7]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-sans font-bold tracking-tight text-[#FDFBF7]">
            {SELF_FUND_LOCKED_TITLE}
          </DialogTitle>
          <DialogDescription className="mt-3 text-base font-light leading-relaxed text-[#FDFBF7]/70">
            {getSelfFundLockedDescription(opensAtLabel)}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <a href={SELF_FUND_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <Button className="w-full rounded-full bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] text-white transition-opacity hover:opacity-90">
              <Instagram className="mr-2 h-5 w-5" />
              Follow @camcapysoc
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
