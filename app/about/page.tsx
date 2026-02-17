import Image from "next/image";
import { Button } from "@/components/Button";

export default function AboutPage() {
  return (
    <main>
      {/* SLIM HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[38vh] min-h-[320px]">
          <Image
            src="/photos/about/hero.jpg"
            alt="Pantheon Volleyball"
            fill
            priority
            quality={70}
            sizes="100vw"
            className="object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-ink/55" />

          {/* content */}
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
              <div className="max-w-3xl">
                <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white/90">
                  About Pantheon
                </p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Coaching-led volleyball, built for London
                </h1>
                <p className="mt-3 text-base text-white/85">
                  Our mission is simple: raise the level through accessible, personal coaching and a community
                  that keeps people improving.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/sessions">View sessions</Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-white/20"
                  >
                    Enquire
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY + IMAGE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Text */}
            <div>
              <div className="mb-4 h-1 w-16 bg-brand" />

              <h2 className="text-2xl font-bold text-ink">
                Who we are
              </h2>

              <p className="mt-5 text-ink/80 leading-relaxed">
                Pantheon Volleyball was built to raise the standard of training in London.
                Structured sessions. Clear progression. Accountability.
              </p>

              <p className="mt-4 text-ink/70 leading-relaxed">
                We don’t run casual open gyms. We design sessions that translate into
                better match performance — and build a culture that serious players want to be part of.
              </p>

              <div className="mt-8">
                <Button href="/sessions">View sessions</Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/photos/about/training-1.jpg"
                  alt="Pantheon training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES + IMAGE */}
      <section className="bg-surface-alt">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center">
          <ImagePanel
            src="/photos/about/training-2.jpg"
            alt="Pantheon coaching"
            caption="Accessible doesn’t mean casual — standards matter."
          />

          <div>
            <h2 className="text-2xl font-bold text-ink">What we value</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <ValueCard title="Accessible">
                Clear levels and welcoming sessions that meet you where you are.
              </ValueCard>
              <ValueCard title="Personal coaching">
                Feedback and progression built into the experience.
              </ValueCard>
              <ValueCard title="Standards">
                Training that respects your time: quality reps, purpose, structure.
              </ValueCard>
              <ValueCard title="Community">
                Competitive, supportive, and consistent — the best environment to grow.
              </ValueCard>
            </div>

            <div className="mt-8">
              <Button href="/sessions" size="lg">
                View sessions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-ink">Leadership</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">

            <Founder
              name="George Ivanov"
              role="Co-founder • Head Coach"
              image="/photos/founders/george.jpg"
              bio="Focused on building a high-performance training environment that translates directly to match play. Committed to raising the level of volleyball in London through structured, intentional coaching."
            />

            <Founder
              name="Chester Tang"
              role="Co-founder • Coach"
              image="/photos/founders/chester.jpg"
              bio="Dedicated to making coaching accessible without lowering standards. Focused on fundamentals, confidence, and creating a clear pathway for player progression."
            />

          </div>

        </div>
      </section>


      {/* GALLERY (big tiles) */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="mt-10 rounded-3xl border border-ink/10 bg-white p-8">
            <h3 className="text-xl font-bold text-ink">Want to train with us?</h3>
            <p className="mt-2 text-ink/70">
              View the weekly programme and book securely via Sportas.
            </p>
            <div className="mt-5">
              <Button href="/sessions" size="lg">View sessions</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ImagePanel({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          quality={70}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5 text-sm text-ink/70">{caption}</div>
    </div>
  );
}

function FullBleedImage({
  src,
  alt,
  eyebrow,
  title,
  body,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative">
      <div className="relative h-[520px]">
        <Image src={src} alt={alt} fill quality={70} sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl items-end px-6 pb-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-cream/90">{eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
              <p className="mt-4 text-lg text-white/85">{body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <div className="font-semibold text-ink">{title}</div>
      <p className="mt-2 text-ink/70">{children}</p>
    </div>
  );
}

function Founder({
  name,
  role,
  image,
  bio,
}: {
  name: string;
  role: string;
  image: string;
  bio: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
      <div className="relative aspect-[16/10]">
        <Image src={image} alt={name} fill quality={70} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="p-6">
        <div className="text-lg font-semibold text-ink">{name}</div>
        <div className="text-sm text-ink/60">{role}</div>
        <p className="mt-3 text-ink/70">{bio}</p>
      </div>
    </div>
  );
}

function GalleryTile({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm ${className ?? ""}`}>
      <div className="relative h-full min-h-[220px]">
        <Image
          src={src}
          alt={alt}
          fill
          quality={70}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
