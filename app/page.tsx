import Link from "next/link";

const features = [
  {
    title: "Training sessions",
    desc: "Structured, high-energy sessions for different levels with clear progression.",
  },
  {
    title: "Community",
    desc: "A positive, competitive environment that keeps you consistent and improving.",
  },
  {
    title: "Camps & tournaments",
    desc: "Seasonal events built to accelerate learning and bring the community together.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-zinc-950 to-zinc-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
              London-based volleyball club
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Pantheon Volleyball
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Training sessions, camps, tournaments and a community for athletes
              who want to improve and compete — from beginner to advanced.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/sessions"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-sm hover:opacity-90"
              >
                View sessions
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                About Pantheon
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact
              </Link>
            </div>

            {/* Social proof / quick stats */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <Stat label="Weekly sessions" value="Multiple" />
              <Stat label="Levels" value="Beginner → Advanced" />
              <Stat label="Bookings" value="Hosted on Sportas" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold tracking-tight">
              What we do
            </h2>
            <p className="mt-3 text-gray-600">
              Pantheon runs coached sessions and events designed to help you
              improve faster — with clear standards, accountability, and a
              strong community culture.
            </p>

            <div className="mt-6 rounded-2xl border bg-white p-5">
              <p className="text-sm font-semibold">New here?</p>
              <p className="mt-1 text-sm text-gray-600">
                Start with our Sessions page and pick a level that matches you.
              </p>
              <Link
                href="/sessions"
                className="mt-4 inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                Find a session
              </Link>
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </div>
            ))}

            <div className="rounded-2xl border bg-zinc-950 p-6 text-white sm:col-span-2">
              <h3 className="text-lg font-semibold">Ready to train?</h3>
              <p className="mt-2 text-white/80">
                View sessions and book on Sportas in under a minute.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/sessions"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:opacity-90"
                >
                  View sessions
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Ask a question
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Pantheon Volleyball Club
          </p>
          <div className="flex gap-4 text-sm">
            <Link className="text-gray-700 hover:underline" href="/sessions">
              Sessions
            </Link>
            <Link className="text-gray-700 hover:underline" href="/about">
              About
            </Link>
            <Link className="text-gray-700 hover:underline" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
      <div className="text-sm text-white/70">{label}</div>
      <div className="mt-1 text-base font-semibold">{value}</div>
    </div>
  );
}

