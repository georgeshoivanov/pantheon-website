import Link from "next/link";
import Image from "next/image";

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
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Pantheon Volleyball"
            width={44}
            height={44}
            priority
            className="h-11 w-11"
          />
          <div className="leading-tight">
            <div className="font-semibold text-ink">Pantheon Volleyball</div>
          </div>
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

