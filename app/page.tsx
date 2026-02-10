import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <section className="rounded-2xl border p-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Pantheon Volleyball Club
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          London-based volleyball training, camps, tournaments and a community
          for athletes who want to improve and compete.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/sessions"
            className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
          >
            View sessions
          </Link>
          <Link
            href="/about"
            className="rounded-lg border px-5 py-3 text-sm font-medium"
          >
            About Pantheon
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Training",
            desc: "Structured sessions for different levels with clear progression.",
          },
          {
            title: "Community",
            desc: "A positive environment that helps you stay consistent and improve.",
          },
          {
            title: "Events",
            desc: "Camps and tournaments throughout the year.",
          },
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border p-6">
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="mt-2 text-gray-600">{card.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
