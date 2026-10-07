import { FadeIn } from "./FadeIn";

const steps = [
  {
    n: "01",
    title: "Discover",
    text: "Browse listings that match your budget, commute and neighbourhood.",
  },
  {
    n: "02",
    title: "Schedule a Viewing",
    text: "Call or WhatsApp a Pride Rock agent and walk the property.",
  },
  {
    n: "03",
    title: "Make It Yours",
    text: "We stay with you through the papers, the keys and the next step.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="container-site">
        <FadeIn className="text-center">
          <p className="eyebrow mx-auto justify-center">Find. View. Move In.</p>
          <h2 className="mt-3 font-serif text-4xl text-pride-900 sm:text-5xl">How It Works</h2>
        </FadeIn>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div className="pointer-events-none absolute top-8 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent md:block" />
          {steps.map((step, index) => (
            <FadeIn key={step.n} delay={index * 0.08} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-cream font-serif text-xl text-pride-900">
                {step.n}
              </div>
              <h3 className="mt-5 font-serif text-2xl text-pride-900">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{step.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
