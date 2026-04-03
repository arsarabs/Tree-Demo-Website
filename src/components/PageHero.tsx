import Link from "next/link";

export function PageHero({
  label,
  title,
  subtitle,
  ctaText = "Get a Free Estimate",
  ctaHref = "/contact",
}: {
  label: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-warm-gray pt-28 pb-10 sm:pb-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Compact breadcrumb-style label */}
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="font-sans text-stone-dim/40 text-xs hover:text-accent transition-colors">
            Home
          </Link>
          <span className="text-accent/20">/</span>
          <span className="font-sans text-accent text-xs font-medium uppercase tracking-[0.15em]">
            {label}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1] tracking-[-0.02em] mb-3">
              <span className="text-stone">{title}</span>
            </h1>
            {subtitle && (
              <p className="font-sans text-stone-dim text-base sm:text-lg leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
          <Link
            href={ctaHref}
            className="inline-block bg-accent text-white font-sans font-bold text-sm uppercase tracking-[0.15em] px-8 py-3.5 rounded-lg hover:bg-accent-light transition-colors duration-300 shrink-0"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
