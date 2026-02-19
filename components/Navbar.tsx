"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/sessions", label: "Sessions" },
  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white dark:bg-zinc-900 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">

        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Pantheon Volleyball" width={44} height={44} priority className="h-11 w-11" />
          <div className="leading-tight">
            <div className="font-semibold text-ink dark:text-white">Pantheon Volleyball</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 sm:flex ml-auto mr-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 hover:text-ink dark:text-white/70 dark:hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/sessions"
            className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Book
          </Link>

          <button
            className="flex flex-col gap-1.5 p-2 sm:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-ink dark:bg-white transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink dark:bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink dark:bg-white transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-white dark:bg-zinc-900 dark:border-white/10 px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink/80 hover:text-ink dark:text-white/70 dark:hover:text-white"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}