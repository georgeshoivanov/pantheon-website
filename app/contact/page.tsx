import { Page } from "@/components/Page";
import { Button } from "@/components/Button";

export default function ContactPage() {
  return (
    <Page
      title="Contact"
      subtitle="Questions about levels, sessions, or events? Send us a message."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
          <p className="text-ink/70">
            For now, add your preferred contact channels here (Instagram, email,
            WhatsApp link). We can add a proper contact form next.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <div className="text-ink">
              <span className="font-semibold">Email:</span>{" "}
              <span className="text-ink/70">hello@pantheonvolleyball.co.uk</span>
            </div>
            <div className="text-ink">
              <span className="font-semibold">Instagram:</span>{" "}
              <span className="text-ink/70">@pantheonvolleyball</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/sessions">View sessions</Button>
            <Button href="/about" variant="outline">
              About
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-ink/10 bg-surface-alt p-6">
          <div className="text-sm font-semibold text-ink">Tip</div>
          <p className="mt-2 text-sm text-ink/70">
            If you’re unsure which level to book, message us with your playing
            background and we’ll recommend a session.
          </p>
        </div>
      </div>
    </Page>
  );
}
