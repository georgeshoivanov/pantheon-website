export function Page({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold text-ink">{title}</h1>
      {subtitle ? <p className="mt-2 text-ink/70">{subtitle}</p> : null}
      <div className="mt-8">{children}</div>
    </main>
  );
}
