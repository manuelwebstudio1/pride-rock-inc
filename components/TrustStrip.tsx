import { Handshake, Home, Landmark, ShieldCheck } from "lucide-react";
import { FadeIn } from "./FadeIn";

const items = [
  {
    icon: Home,
    title: "Wide Property Selection",
    text: "Houses, apartments, land and commercial properties.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Professional",
    text: "Transparent and reliable real-estate services.",
  },
  {
    icon: Landmark,
    title: "Buy, Rent or Invest",
    text: "Solutions tailored to different property needs.",
  },
  {
    icon: Handshake,
    title: "Support Every Step",
    text: "From property viewing to closing the deal.",
  },
];

export function TrustStrip() {
  return (
    <section className="bg-cream py-16">
      <div className="container-amek grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.06}>
            <article className="h-full rounded-3xl border border-line bg-white p-6">
              <item.icon className="h-7 w-7 text-gold-dark" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-xl text-amek-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
