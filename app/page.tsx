import Link from "next/link";
import { Container } from "@/components/Container";
import Image from "next/image";
import { Button } from "@/components/Button"

const features = [
  { title: "Training sessions", desc: "Coached sessions with clear progression across levels." },
  { title: "Community", desc: "A competitive, supportive environment that keeps you consistent." },
  { title: "Events", desc: "Camps & tournaments that accelerate learning and build culture." },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative h-[60vh] min-h-[520px] overflow-hidden text-white">
        {/* Background Image */}
        <Image
          src="/LVA W image.webp"
          alt="Pantheon Volleyball"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />


        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/80">
                London-based volleyball club
              </p>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Train. Compete. Build your game with Pantheon.
              </h1>

              <p className="mt-4 text-lg text-white/85">
                Structured training sessions, camps and tournaments for athletes who
                want to improve — from beginner to advanced.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/sessions">
                  View sessions
                </Button>
                <Button variant="outline" href="/about">
                  About Pantheon
                </Button>
              </div>
            </div>
          </div>
        </div>
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
                    className="mt-4 inline-flex rounded-xl bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
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
