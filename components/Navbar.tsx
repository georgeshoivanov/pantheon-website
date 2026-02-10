import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/sessions", label: "Sessions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="font-semibold">
          Pantheon
        </Link>
        <div className="flex gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-700 hover:underline">
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
