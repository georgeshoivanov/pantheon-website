import Link from "next/link";

const links = [
  { href: "/sessions", label: "Sessions" },
  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
            P
          </span>
          <span>Pantheon</span>
        </Link>

        <nav className="hidden items-center gap-5 sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 hover:text-black"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/sessions"
          className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Book
        </Link>
      </div>
    </header>
  );
}

