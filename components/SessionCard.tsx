import { Button } from "@/components/Button";
import type { Session } from "@/lib/sessions";

const categoryMeta: Record<
  Session["category"],
  { label: string; badgeClass: string }
> = {
  coaching: { label: "Coaching", badgeClass: "bg-brand/10 text-brand border-brand/20" },
  games: { label: "Games", badgeClass: "bg-ink/5 text-ink border-ink/10" },
  lva: { label: "LVA Squad", badgeClass: "bg-cream text-ink border-ink/10" },
};

export function SessionCard({ session }: { session: Session }) {
  const meta = categoryMeta[session.category];

  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${meta.badgeClass}`}>
              {meta.label}
            </span>

            <span className="inline-flex items-center rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-semibold text-ink/80">
              {session.levelLabel}
            </span>

            {session.audience ? (
              <span className="inline-flex items-center rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-semibold text-ink/70">
                {session.audience}
              </span>
            ) : null}
          </div>

          <h3 className="mt-3 text-xl font-semibold text-ink">{session.title}</h3>

          <p className="mt-1 text-sm text-ink/70">
            <span className="font-medium text-ink">{session.day}</span> • {session.time}
            {session.location ? <> • {session.location}</> : null}
          </p>

          <p className="mt-3 text-ink/70">{session.description}</p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:items-end">
          {session.sportasUrl ? (
            <Button href={session.sportasUrl} target="_blank" rel="noreferrer">
              Book on Sportas
            </Button>
          ) : (
            <Button href="/contact" variant="outline">
              Enquire
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
