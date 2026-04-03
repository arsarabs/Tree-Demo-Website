"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowButtonProps {
  text?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function FlowButton({ text = "Get My Free Quote", href, className, onClick }: FlowButtonProps) {
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-accent/40 bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:rounded-[12px] active:scale-[0.95] font-satoshi",
        className
      )}
    >
      {/* Left arrow — slides in from left on hover */}
      <ArrowRight
        className="absolute w-4 h-4 left-[-25%] stroke-white fill-none z-[9] group-hover:left-4 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      />

      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
        {text}
      </span>

      {/* Circle expand background */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-dark rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]" />

      {/* Right arrow — slides out to right on hover */}
      <ArrowRight
        className="absolute w-4 h-4 right-4 stroke-white fill-none z-[9] group-hover:right-[-25%] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      />
    </Component>
  );
}
