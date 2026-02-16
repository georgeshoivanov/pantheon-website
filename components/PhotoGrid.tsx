import Image from "next/image";

export function PhotoGrid({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img) => (
        <div
          key={img.src}
          className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
