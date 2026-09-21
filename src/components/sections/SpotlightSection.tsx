import SectionHeading from '../SectionHeading';
import { SiteCopy } from '../../content/siteContent';
import { useParams } from 'react-router-dom';

type SpotlightSectionProps = {
  copy: SiteCopy;
};

function SpotlightSection({ copy }: SpotlightSectionProps) {
  const { lang = 'tr' } = useParams();
  return (
    <section className="section-y" id="spotlight">
      <div className="reveal container grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="min-w-0">
          <SectionHeading
            eyebrow={copy.spotlight.eyebrow}
            title={copy.spotlight.title}
            description={copy.spotlight.text}
          />

          <ul className="mt-8 space-y-4">
            {copy.spotlight.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#458BC9]/10 text-[#458BC9]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>

                <span className="leading-7 text-muted">{bullet}</span>
              </li>
            ))}
          </ul>

          <a
            className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-br from-brand-deep to-brand px-6 py-4 font-bold text-white shadow-[0_12px_28px_rgba(69,139,201,0.20)] transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#458BC9] motion-reduce:transform-none"
            href={`/${lang}/products/wms`}
          >
            {copy.spotlight.cta}

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>

        <figure className="m-0 min-w-0 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(31,79,120,0.22)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 px-5 py-4 sm:px-6">
            <img
              className="h-auto w-36 sm:w-40"
              src="/images/logos/wms-transparent.png"
              alt="OraxAI WMS"
            />

            <span className="text-xs font-medium text-muted sm:text-sm">
              {lang === "tr" ? "3D depo görünümü" : "3D warehouse view"}
            </span>
          </div>

          <div className="bg-[#cfd8dd]">
            <img
              className="block h-auto w-full"
              src="/images/site/warehouse-3d.png"
              alt={
                lang === "tr"
                  ? "WMS içinde depo raflarının ve palet yerleşimlerinin 3D görünümü"
                  : "3D view of warehouse racks and pallet locations in WMS"
              }
              loading="lazy"
              decoding="async"
            />
          </div>

          <figcaption className="border-t border-slate-200/70 px-5 py-5 sm:px-6">
            <p className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              {lang === "tr"
                ? "Deponuz, tek bakışta"
                : "Your warehouse, at a glance"}
            </p>

            <p className="mt-1.5 text-sm leading-6 text-muted">
              {lang === "tr"
                ? "Her koridor, raf ve palet için net bir görünüm."
                : "A clear view of every aisle, rack and pallet."}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default SpotlightSection;
