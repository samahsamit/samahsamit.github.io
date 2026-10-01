import type { ReactNode } from "react";

export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`rounded-[22px] border border-line bg-card p-6 sm:p-7 ${className}`}>{children}</div>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[13px] font-medium text-faint ${className}`}>{children}</p>;
}
