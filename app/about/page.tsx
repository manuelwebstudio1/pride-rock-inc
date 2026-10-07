import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { images } from "@/data/images";

export const metadata = {
  title: "About Pride Rock Inc.",
  description:
    "Pride Rock Inc. is a Dansoman-based real-estate partner helping clients buy, rent, sell and invest in Ghana.",
};

const values = [
  {
    title: "Integrity",
    text: "We present properties honestly and keep the process transparent from first enquiry to completion.",
  },
  {
    title: "Local Knowledge",
    text: "We live the west Accra streets we sell — Dansoman, Weija, Mataheko — and we still cover the rest of the city.",
  },
  {
    title: "Transparency",
    text: "You should always know what is available, what it costs, and what the next step is.",
  },
  {
    title: "Client First",
    text: "The brief comes before the listing. We look for a fit, not a forced match.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Grounded in Dansoman"
        text="Pride Rock Inc. helps clients buy, sell, rent and hold property across Accra — with a west Accra office and a practical eye on every viewing."
        image={images.aboutHero}
      />
      <section className="bg-cream py-16">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Image
            src={images.about}
            alt="Family home presented by Pride Rock Inc."
            width={900}
            height={700}
            className="h-[480px] w-full rounded-[28px] object-cover"
          />
          <div>
            <h2 className="font-serif text-4xl text-pride-900">A firm foundation for every move</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Pride Rock Inc. was built around a simple idea: property decisions are easier when you have a partner who
              listens, shows you real options, and stays present through the details. From our Dansoman desk we work with
              buyers, tenants, owners and people exploring land or commercial space.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Our mission is to make the path from enquiry to viewing to agreement feel clear. No inflated claims. No
              pressure. Just professional support around the house, plot or shop in front of you.
            </p>
            <Link href="/contact" className="mt-7 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-pride-950">
              Start a Conversation
            </Link>
          </div>
        </div>
        <div className="container-site mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="rounded-[28px] bg-white p-7">
              <h3 className="font-serif text-2xl text-pride-900">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
