import Image from "next/image";
import { Button } from "@/components/Button";

const features = [
  {
    title: "Structured coaching",
    desc: "Progressive sessions with clear standards and lots of high-quality reps.",
  },
  {
    title: "Right level for you",
    desc: "Beginner → Advanced. Start where you’ll succeed and level up quickly.",
  },
  {
    title: "Community + competition",
    desc: "A supportive environment that still pushes you to improve.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center rounded-full border border-ink/10 bg-surface-alt px-3 py-1 text-sm text-ink/70">
              London-based volleyball club
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Train. Compete. Build your game with Pantheon.
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/70">
              Weekly sessions, camps, tournaments and a community for athletes
              who want to improve — from beginner to advanced. Bookings are
              hosted on Sportas.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/sessions" size="lg">
                View sessions
              </Button>
              <Button href="/training" variant="outline" size="lg">
                Training levels
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <Stat label="Levels" value="Beginner → Advanced" />
              <Stat label="Locations" value="Across London" />
              <Stat label="Booking" value="Via Sportas" />
            </div>
          </div>

          {/* Image card */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-cream/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/hero.jpg"  /* or /hero.webp if you change later */
                  alt="Pantheon Volleyball"
                  fill
                  priority
                  quality={70}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="text-sm font-semibold text-ink">
                  What to expect
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  High-energy coaching, game-like reps, and a clear focus each
                  session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                What we do
              </h2>
              <p className="mt-2 text-ink/70">
                Coaching-led sessions and events designed to help you improve
                faster.
              </p>
            </div>
            <div className="hidden sm:block">
              <Button href="/about" variant="outline">
                About Pantheon
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-ink/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-3xl border border-ink/10 bg-ink p-8 text-cream sm:p-10">
            <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold tracking-tight">
                  Ready to train?
                </h3>
                <p className="mt-2 text-cream/80">
                  View sessions and book via Sportas in under a minute.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button href="/sessions" variant="primary" size="lg">
                  View sessions
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-cream/30 text-cream hover:bg-white/10">
                  Ask a question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-4">
      <div className="text-sm text-ink/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}
