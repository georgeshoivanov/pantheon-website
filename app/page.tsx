import Image from "next/image";
import { Button } from "@/components/Button";

const features = [
  {
    title: "Structured coaching",
    desc: "Progressive sessions with clear standards and lots of high-quality reps.",
  },
  {
    title: "Right level for you",
    desc: "Beginner → Advanced. Start where you'll succeed and level up quickly.",
  },
  {
    title: "Community + competition",
    desc: "A supportive environment that still pushes you to improve.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO — image based, no background changes needed */}
      <section className="relative overflow-hidden">
        <div className="relative h-[75vh] min-h-[560px]">
          <Image
            src="/photos/home/hero.webp"
            alt="Pantheon Volleyball"
            fill
            priority
            quality={70}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(11, 46, 51, 0.55)' }} />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl items-end px-6 pb-12">
              <div className="max-w-3xl">
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Raising the level of volleyball in London
                </h1>
                <p className="mt-4 text-lg text-white/85">
                  Accessible, personal coaching. Weekly sessions, games, and events for athletes who want
                  to improve — from beginner to advanced.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/sessions" size="lg">View sessions</Button>
                  <Button href="/about" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 bg-white/20">
                    About Pantheon
                  </Button>
                </div>
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
                Coaching-led sessions and events designed to help you improve faster.
              </p>
            </div>
            <div className="hidden sm:block">
              <Button href="/training" variant="outline">Training Sessions</Button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-ink/10 bg-surface p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-ink/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-14">
          {/* This card intentionally stays dark in both modes — it's a branded CTA */}
          <div className="rounded-3xl bg-ink-bg p-8 text-cream sm:p-10">
            <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold tracking-tight">Ready to train?</h3>
                <p className="mt-2 text-cream/80">View sessions and book via Sportas in under a minute.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button href="/sessions" variant="primary" size="lg">View sessions</Button>
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