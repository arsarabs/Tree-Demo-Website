"use client";

import { cn } from "@/lib/utils";

interface FlowButtonProps {
  text?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function FlowButton({ text = "Get a Free Estimate", href, className, onClick }: FlowButtonProps) {
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white cursor-pointer hover:bg-accent-light transition-colors duration-300 font-sans",
        className
      )}
    >
      {text}
    </Component>
  );
}
