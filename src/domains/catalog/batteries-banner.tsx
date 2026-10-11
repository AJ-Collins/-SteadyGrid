const STARS = [0, 1, 2];

export function BatteriesBanner() {
  return (
    <section className="relative mb-6 min-h-[280px] w-full max-w-[1440px] overflow-hidden bg-surface-low p-6 md:h-[320px] md:p-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)", backgroundSize: "26px 26px" }}
      />
      <div className="pointer-events-none absolute -right-10 top-0 hidden h-full w-64 -skew-x-12 bg-primary/25 md:block" />
      <div className="pointer-events-none absolute -right-2 top-0 hidden h-full w-24 -skew-x-12 bg-primary/40 md:block" />
      <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center">
        <div className="mb-3 flex gap-2">
          {STARS.map((i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-primary" aria-hidden>
              <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2z" />
            </svg>
          ))}
        </div>
        <h1 className="text-4xl font-black tracking-tight text-white md:text-[58px] md:leading-none">
          DECLARE ENERGY <span className="text-primary">INDEPENDENCE</span>
        </h1>
        <p className="mt-3 text-sm text-neutral-300">
          <em className="font-bold not-italic text-primary">SAVE 10%</em> on select batteries and store more
          power for less.
        </p>
        <button className="mt-5 w-fit cursor-pointer rounded-md bg-primary px-6 py-2 text-sm font-bold uppercase text-white shadow-[0_0_15px_rgba(34,160,85,0.5)] hover:bg-primary-hover">
          Shop Battery Deals
        </button>
      </div>
    </section>
  );
}
