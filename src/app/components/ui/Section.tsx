import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  fullWidth?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, fullWidth = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-20 md:py-32 w-full relative overflow-hidden", className)}
        {...props}
      >
        <div className={cn("mx-auto px-6 md:px-12 lg:px-24", fullWidth ? "w-full" : "max-w-[1400px]")}>
          {children}
        </div>
      </section>
    );
  }
);
