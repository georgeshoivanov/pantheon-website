import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors";

  const variants = {
    primary:
      "bg-brand text-white hover:bg-brand-dark",
    secondary:
      "bg-ink text-white hover:opacity-90",
    outline:
      "border border-ink/20 bg-white text-ink hover:bg-surface-alt",
  };

  const styles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
