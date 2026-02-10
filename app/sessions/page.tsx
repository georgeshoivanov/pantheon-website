const sessions = [
  {
    id: "example-1",
    title: "Pantheon Training Session",
    level: "Intermediate",
    location: "London",
    day: "Monday",
    time: "19:00–21:00",
    sportasUrl: "https://YOUR-SPORTAS-LINK-HERE",
  },
];

export default function SessionsPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Sessions</h1>
      <p className="mt-2 text-gray-600">
        Our bookings are hosted on Sportas. Choose a session below to book.
      </p>

      <div className="mt-6 grid gap-4">
        {sessions.map((s) => (
          <div key={s.id} className="rounded-2xl border p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="mt-1 text-sm text-gray-600">
                  {s.level} • {s.location}
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-medium">{s.day}</span> • {s.time}
                </p>
              </div>

              <a
                href={s.sportasUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
              >
                Book on Sportas
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
