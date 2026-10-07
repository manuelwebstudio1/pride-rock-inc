import { Handshake, Home, Landmark, ShieldCheck } from "lucide-react";
import { FadeIn } from "./FadeIn";

const items = [
  {
    icon: Home,
    title: "West Accra First",
    text: "Dansoman, Weija, Mataheko and the wider Accra market.",
  },
  {
    icon: ShieldCheck,
    title: "Clear, Honest Briefs",
    text: "What is available, what it costs, and what happens next.",
  },
  {
    icon: Landmark,
    title: "Buy, Rent or Hold",
    text: "Homes, land and commercial space matched to your use.",
  },
  {
    icon: Handshake,
    title: "Present Through Closing",
    text: "From the first viewing to the keys and the papers.",
  },
];

export function TrustStrip() {
  return (
    <section className="bg-cream py-16">
      <div className="container-site grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.06}>
            <article className="h-full rounded-3xl border border-line bg-white p-6">
              <item.icon className="h-7 w-7 text-gold-dark" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-xl text-pride-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
