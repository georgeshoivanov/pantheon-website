import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">Pantheon Volleyball</div>
          <p className="mt-2 text-sm text-cream/80">
            London-based volleyball training, camps, tournaments and community.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold">Explore</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="text-cream/80 hover:text-cream" href="/sessions">Sessions</Link></li>
            <li><Link className="text-cream/80 hover:text-cream" href="/training">Training</Link></li>
            <li><Link className="text-cream/80 hover:text-cream" href="/about">About</Link></li>
            <li><Link className="text-cream/80 hover:text-cream" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Booking</div>
          <p className="mt-3 text-sm text-cream/80">
            Sessions are booked securely via Sportas.
          </p>
          <Link
            href="/sessions"
            className="mt-4 inline-flex rounded-xl bg-cream px-4 py-2 text-sm font-semibold text-ink hover:opacity-95"
          >
            View sessions
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-xs text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Pantheon Volleyball Club</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
