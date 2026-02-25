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
        <div className={cn("mx-auto px-4 md:px-8", fullWidth ? "w-full" : "max-w-7xl")}>
          {children}
        </div>
      </section>
    );
  }
);
