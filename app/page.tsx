import Link from "next/link";
import { Container } from "@/components/Container";

const features = [
  { title: "Training sessions", desc: "Coached sessions with clear progression across levels." },
  { title: "Community", desc: "A competitive, supportive environment that keeps you consistent." },
  { title: "Events", desc: "Camps & tournaments that accelerate learning and build culture." },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b bg-zinc-950 text-white">
        {/* background blobs */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <Container>
          <div className="py-16">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
              London-based volleyball club
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Train. Compete. Build your game with Pantheon.
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
              Sessions, camps, tournaments and a community for athletes who want to improve —
              from beginner to advanced. Bookings are hosted on Sportas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/sessions"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:opacity-90"
              >
                View sessions
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                About Pantheon
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <Stat label="Levels" value="Beginner → Advanced" />
              <Stat label="Locations" value="Across London" />
              <Stat label="Booking" value="Via Sportas" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50">
        <Container>
          <div className="py-14">
            <div className="grid gap-6 lg:grid-cols-3">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">What we do</h2>
                <p className="mt-3 text-gray-600">
                  We run high-quality coaching and events designed to help you improve faster —
                  with standards, accountability, and a strong community culture.
                </p>

                <div className="mt-6 rounded-2xl border bg-white p-5">
                  <p className="text-sm font-semibold">New here?</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Start on Sessions. Pick your level, and book in under a minute.
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
                  <p className="mt-2 text-white/80">View sessions and book via Sportas.</p>
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
          </div>
        </Container>
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
