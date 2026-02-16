import Image from "next/image";

export function FounderCard({
  name,
  role,
  bio,
  imageSrc,
}: {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
}) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <div className="flex gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-ink/10 bg-surface-alt">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="64px"
              className="object-cover"
            />
          ) : null}
        </div>

        <div className="min-w-0">
          <div className="text-lg font-semibold text-ink">{name}</div>
          <div className="text-sm text-ink/60">{role}</div>
        </div>
      </div>

      <p className="mt-4 text-ink/70">{bio}</p>
    </div>
  );
}
