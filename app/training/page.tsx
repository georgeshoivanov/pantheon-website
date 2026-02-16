import { Page } from "@/components/Page";
import { Button } from "@/components/Button";

const levels = [
  {
    title: "Beginner",
    desc: "New to volleyball or building confidence in passing, setting, serving and movement.",
  },
  {
    title: "Intermediate",
    desc: "You can rally consistently and want more structure, tactics, and faster pace.",
  },
  {
    title: "Advanced",
    desc: "High intensity. Game-like reps, tactical focus, and accountability.",
  },
];

export default function TrainingPage() {
  return (
    <Page
      title="Training"
      subtitle="Choose a level that matches you. If unsure, start one level lower and progress fast."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {levels.map((l) => (
          <div key={l.title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-ink">{l.title}</h2>
            <p className="mt-2 text-ink/70">{l.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-ink/10 bg-surface-alt p-6">
        <h3 className="text-lg font-semibold text-ink">Ready to train?</h3>
        <p className="mt-2 text-ink/70">
          View sessions and book via Sportas.
        </p>
        <div className="mt-4">
          <Button href="/sessions">View sessions</Button>
        </div>
      </div>
    </Page>
  );
}
