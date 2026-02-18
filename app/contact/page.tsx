import { Page } from "@/components/Page";
import { Button } from "@/components/Button";

const EMAIL = "pantheonvolleyballclub@gmail.com";
const IG_HANDLE = "@pantheonvolleyball";
const IG_URL = "https://www.instagram.com/pantheonvolleyball/";

type Enquiry = {
  title: string;
  desc: string;
  subject: string;
  whatToInclude: string[];
};

const enquiries: Enquiry[] = [
  {
    title: "Sessions & levels",
    desc: "Unsure what to book or whether a session is right for you? Message us and we’ll recommend the best fit.",
    subject: "Sessions / Level enquiry",
    whatToInclude: [
      "Your playing background (how long, any leagues/clubs)",
      "Comfort level in 6v6 (serve receive, rallying, rotations)",
      "Your position + what you want to improve",
      "Which days you can attend",
    ],
  },
  {
    title: "LVA squads (Men / Women)",
    desc: "Interested in squad training and competing? Enquire to be considered for LVA team training.",
    subject: "LVA squad enquiry",
    whatToInclude: [
      "Your position + height (optional)",
      "Current/previous team & level",
      "Highlights video link (if you have one)",
      "Availability + commitment level",
    ],
  },
  {
    title: "Partnerships / venues",
    desc: "Sponsorship, collaborations, venue partnerships, or events — let’s talk.",
    subject: "Partnership / venue enquiry",
    whatToInclude: [
      "Who you are + organisation",
      "What you’re proposing (1–3 bullets)",
      "Timeline + any budget / constraints",
      "Best way to contact you",
    ],
  },
];

function mailto(subject: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export default function ContactPage() {
  return (
    <Page
      title="Contact Us!"
      subtitle="Send us a message — we’ll get back to you and point you to the right next step."
    >
      {/* Single-channel strip */}
      <section className="rounded-3xl border border-ink/10 bg-cream/40 p-8">
        <div className="mb-3 h-1 w-16 bg-brand" />
        <h2 className="text-xl font-bold text-ink">How to reach us</h2>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-ink">Email</div>
            <p className="mt-2 text-ink/70 break-all">{EMAIL}</p>
            <div className="mt-4">
              <Button href={mailto("Pantheon enquiry")} className="w-full">
                Email us
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-2">
              <InstagramIcon className="h-5 w-5 text-ink" />
              <div className="text-sm font-semibold text-ink">Instagram</div>
            </div>
            <p className="mt-2 text-ink/70">
              DM us on Instagram for quick questions and updates.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                Open Instagram
              </Button>
              <div className="inline-flex items-center rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink/70">
                {IG_HANDLE}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry routing cards */}
      
      
      {/* Footer CTA */}
      <section className="mt-12 rounded-3xl border border-ink/10 bg-ink p-10 text-cream">
        <h2 className="text-2xl font-bold">Not sure what to write?</h2>
        <p className="mt-3 max-w-2xl text-cream/80">
          Send a quick message with your playing background and availability — we’ll guide you to the right session.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/sessions" size="lg">
            View sessions
          </Button>
          <Button
            href={mailto("Pantheon enquiry")}
            variant="outline"
            size="lg"
            className="border-cream/30 text-cream hover:bg-white/10"
          >
            Email us
          </Button>
        </div>
      </section>
    </Page>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  // Simple Instagram-style glyph (inline SVG) — no dependencies.
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9A4.75 4.75 0 0 1 16.5 21.25h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 16.25A4.25 4.25 0 1 0 12 7.75a4.25 4.25 0 0 0 0 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M17.25 6.75h.01"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
