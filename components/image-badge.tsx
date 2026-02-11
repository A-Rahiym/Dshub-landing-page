"use client";

import { cn } from "@/lib/utils";

type ImageBadgeProps = {
  title: string;
  subtitle: string;
  className?: string;
  delay?: number; // fade-in delay in ms
  bgColor?: string; // optional background color
};

export function ImageBadge({
  title,
  subtitle,
  className,
  delay = 0,
  bgColor,
}: ImageBadgeProps) {
  return (
    <div
      className={cn(
        "absolute backdrop-blur-sm text-white border border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 opacity-0 animate-fade-in",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        backgroundColor: bgColor ?? "rgb(15, 23, 42)", // fallback to dark blue
      }}
    >
      <p className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase opacity-80">
        {title}
      </p>
      <p className="text-xs sm:text-sm font-medium whitespace-nowrap">
        {subtitle}
      </p>
    </div>
  );
}
