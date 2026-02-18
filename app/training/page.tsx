import Image from "next/image";
import { Button } from "@/components/Button";
import { Page } from "@/components/Page";

const levels = [
  {
    title: "Mixed Ability",
    desc: "Build fundamentals, confidence, game experience in a supportive environment.",
    src: "/photos/training/levels/beginner.webp",
    session: "Level-Up Series",
    href: "/sessions",
  },
  {
    title: "Intermediate",
    desc: "Game-speed reps, structure, and tactical awareness in a competitive environment.",
    src: "/photos/training/levels/intermediate.webp",
    session: "Intermediate Masterclass",
    href: "/sessions",
  },
  {
    title: "Advanced",
    desc: "High intensity. Match-relevant training. Competitive matches in London League.",
    src: "/photos/training/levels/advanced.webp",
    session: "Enquire",
    href: "/contact"
  },
];

export default function TrainingPage() {
  return (
    <Page
      title="Training"
      subtitle="Choose a level that matches your current ability. If unsure, start one level lower and progress fast."
    >
      {/* LEVEL CARDS (image-led) */}
      <section className="grid gap-6 lg:grid-cols-3">
        {levels.map((l) => (
          <LevelCard
            key={l.title}
            title={l.title}
            desc={l.desc}
            src={l.src}
            session={l.session}
            href={l.href}
          />
        ))}
      </section>

      {/* WHAT TO EXPECT */}
      <section className="mt-12 rounded-3xl border border-ink/10 bg-surface-alt p-8">
        <div className="mb-4 h-1 w-16 bg-brand" />
        <h2 className="text-2xl font-bold text-ink">What to expect</h2>

        <div className="mt-4 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <div className="font-semibold text-ink">Structure</div>
            <p className="mt-2 text-ink/70">
              Sessions are designed with clear focus areas and progressive drills.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <div className="font-semibold text-ink">Feedback</div>
            <p className="mt-2 text-ink/70">
              Personal coaching and actionable cues to accelerate improvement.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <div className="font-semibold text-ink">Game transfer</div>
            <p className="mt-2 text-ink/70">
              Reps that translate directly into match performance and decision-making.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Button href="/sessions" size="lg">
            View sessions
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-3xl border border-ink/10 bg-ink p-10 text-cream">
        <h2 className="text-2xl font-bold">Ready to train?</h2>
        <p className="mt-3 text-cream/80 max-w-2xl">
          View the weekly programme and book securely via Sportas.
        </p>

        <div className="mt-6">
          <Button href="/sessions" size="lg">
            View sessions
          </Button>
        </div>
      </section>
    </Page>
  );
}

function LevelCard({
  title,
  desc,
  src,
  session,
  href,
}: {
  title: string;
  desc: string;
  src: string;
  session: string;
  href: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
      <div className="relative aspect-[1/1]">
        <Image
          src={src}
          alt={`${title} training`}
          fill
          quality={70}
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
        {/* overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
        <div className="absolute bottom-0 p-6">
          <div className="text-lg font-semibold text-white">{title}</div>
          <p className="mt-2 text-sm text-white/85 max-w-sm">{desc}</p>
        </div>
      </div>
      <div className="p-3">
        <Button href={href} variant="primary" className="w-full">
          <div className="text-lg font-semibold text-white">{session}</div>
        </Button>
      </div>

    </div>
  );
}
