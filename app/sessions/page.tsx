import { Page } from "@/components/Page";
import { SessionCard } from "@/components/SessionCard";
import { sessions } from "@/lib/sessions";

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-ink">{title}</h2>
        <p className="mt-1 text-ink/70">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

export default function SessionsPage() {
  const coaching = sessions.filter((s) => s.category === "coaching");
  const games = sessions.filter((s) => s.category === "games");
  const lva = sessions.filter((s) => s.category === "lva");

  return (
    <Page
      title="Sessions"
      subtitle="Choose the session type that matches your goal. Bookings for open sessions are hosted on Sportas."
    >
      <div className="space-y-10">
        <Section
          title="Coaching Sessions"
          subtitle="Structured coaching focused on technical improvement and game-relevant reps."
        >
          <div className="grid gap-4">
            {coaching.map((s) => (
              <SessionCard key={s.id} session={s} />
            ))}
          </div>
        </Section>

        <Section
          title="Intermediate Games"
          subtitle="Competitive 6v6 games for consistent intermediate players. If unsure, message us and we’ll advise."
        >
          <div className="grid gap-4">
            {games.map((s) => (
              <SessionCard key={s.id} session={s} />
            ))}
          </div>
        </Section>

        <Section
          title="LVA Squad Training"
          subtitle="Invitation-based training for LVA competition squads. Enquire to be considered."
        >
          <div className="grid gap-4">
            {lva.map((s) => (
              <SessionCard key={s.id} session={s} />
            ))}
          </div>
        </Section>
      </div>
    </Page>
  );
}

