"use client";

import { Clock, Instagram, Bell } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
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
      <DialogContent className="max-w-md overflow-hidden rounded-2xl border-white/[0.06] bg-[#111] p-0 text-[#FDFBF7] shadow-2xl">
        {/* Top accent shimmer bar */}
        <div className="relative h-1 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FDFBF7]/40 to-transparent animate-[shimmer_2.5s_ease-in-out_infinite]" />
        </div>

        <div className="px-7 pb-8 pt-6">
          <DialogHeader className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FDFBF7]/[0.07]">
                <Bell size={15} className="text-[#FDFBF7]/60" />
              </div>
              <DialogTitle className="text-xl font-sans font-semibold tracking-tight text-[#FDFBF7]">
                {SELF_FUND_LOCKED_TITLE}
              </DialogTitle>
            </div>
            <DialogDescription className="text-sm font-light leading-relaxed text-[#FDFBF7]/50">
              Registration for the self-funded China Trip has not opened yet. Mark your calendar — spots are limited.
            </DialogDescription>
          </DialogHeader>

          {/* Prominent time callout */}
          <div className="mt-6 rounded-xl border border-[#FDFBF7]/[0.08] bg-[#FDFBF7]/[0.04] px-5 py-4">
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FDFBF7]/[0.08]">
                <Clock size={18} className="text-[#FDFBF7]/70" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#FDFBF7]/40">
                  Opens on
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-[#FDFBF7]">
                  {opensAtLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-[#FDFBF7]/[0.06]" />

          {/* Instagram follow CTA */}
          <div className="space-y-3">
            <p className="text-center text-xs font-medium text-[#FDFBF7]/35">
              Get notified when registration opens
            </p>
            <a
              href={SELF_FUND_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group w-full rounded-full bg-[#FDFBF7]/[0.08] text-sm font-medium text-[#FDFBF7] backdrop-blur-sm transition-all duration-300 hover:bg-[#FDFBF7]/[0.14] hover:scale-[1.01]">
                <Instagram className="mr-2 h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
                Follow @camcapysoc
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
