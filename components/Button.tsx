import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variants = "primary" | "secondary" | "outline";
type Sizes = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variants;
  size?: Sizes;
  className?: string;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

function isLink(props: ButtonAsButton | ButtonAsLink): props is ButtonAsLink {
  return "href" in props && typeof props.href === "string";
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className } = props;

  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:cursor-not-allowed disabled:opacity-50";

  const variants: Record<Variants, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-ink text-white hover:opacity-90",
  outline: "border border-ink/20 bg-surface text-ink hover:bg-surface-alt",
};

  const sizes: Record<Sizes, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const styles = cn(base, variants[variant], sizes[size], className);

  if (isLink(props)) {
    return (
      <Link href={props.href} className={styles} target={props.target} rel={props.rel}>
        {props.children}
      </Link>
    );
  }

  const { children, type, variant: _v, size: _s, className: _c, ...rest } = props;
  return (
    <button type={type ?? "button"} className={styles} {...rest}>
      {children}
    </button>
  );
}