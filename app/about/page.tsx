import { Page } from "@/components/Page";
import { Button } from "@/components/Button";
import { PhotoGrid } from "@/components/PhotoGrid";

const aboutPhotos = [
  { src: "/photos/about/team.jpg", alt: "Pantheon team" },
  { src: "/photos/about/training.jpg", alt: "Training session" },
  { src: "/photos/about/tournament.jpg", alt: "Tournament day" },
];

export default function AboutPage() {
  return (
    <Page
      title="About Pantheon"
      subtitle="Pantheon Volleyball is a London-based club built around high standards, community, and real improvement."
    >
      {/* Background */}
      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4 text-ink/80">
          <h2 className="text-xl font-bold text-ink">Our story</h2>
          <p>
            Pantheon started with a simple goal: create a training environment in London that
            is structured, competitive, and welcoming — where athletes can improve quickly and
            enjoy the process.
          </p>
          <p>
            We run coached sessions, games nights, and events that bring the community together.
            Our focus is progression: clear session standards, high-quality reps, and a culture
            that rewards consistency.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-ink">What we value</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li><span className="font-semibold text-ink">Quality:</span> reps that translate into matches.</li>
            <li><span className="font-semibold text-ink">Community:</span> supportive, respectful, competitive.</li>
            <li><span className="font-semibold text-ink">Progression:</span> clear levels and next steps.</li>
          </ul>
        </div>

        {/* Quick stats / highlights */}
        <div className="rounded-2xl border border-ink/10 bg-surface-alt p-6">
          <div className="text-sm font-semibold text-ink">Highlights</div>
          <div className="mt-4 grid gap-3">
            <Highlight label="Weekly sessions" value="7+" />
            <Highlight label="Session types" value="Coaching • Games • Squad" />
            <Highlight label="Booking" value="Via Sportas" />
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button href="/sessions">View sessions</Button>
            <Button href="/contact" variant="outline">Enquire</Button>
          </div>
        </div>
      </section>

      {/* Successes */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-ink">Successes so far</h2>
        <p className="mt-2 text-ink/70">
          A few milestones we’re proud of (we’ll keep this updated as the club grows).
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Growing weekly programme">
            Consistent weekly sessions across coaching, games, and squad training.
          </Card>
          <Card title="Events & community">
            Camps / tournaments that bring the community together and accelerate learning.
          </Card>
          <Card title="Player development">
            Clear level structure, accountability, and session standards that help athletes progress.
          </Card>
        </div>
      </section>

      {/* Photos */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-ink">Gallery</h2>
        <p className="mt-2 text-ink/70">
          A snapshot of training, games, and events.
        </p>
        <div className="mt-6">
          <PhotoGrid images={aboutPhotos} />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-3xl border border-ink/10 bg-cream/40 p-8">
        <h2 className="text-2xl font-bold text-ink">Want to join a session?</h2>
        <p className="mt-2 text-ink/70">
          View upcoming sessions and book securely via Sportas.
        </p>
        <div className="mt-5">
          <Button href="/sessions" size="lg">View sessions</Button>
        </div>
      </section>
    </Page>
  );
}

function Highlight({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-4">
      <div className="text-xs text-ink/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-ink/70">{children}</p>
    </div>
  );
}
