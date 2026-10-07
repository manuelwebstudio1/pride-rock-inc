import Link from "next/link";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <section className="bg-cream pb-20 pt-32">
      <div className="container-site max-w-3xl">
        <h1 className="font-serif text-4xl text-pride-900">Terms & Conditions</h1>
        <p className="mt-6 leading-relaxed text-muted">
          Property details on this website are presented for enquiry purposes. Availability, prices and
          specifications should always be confirmed with a Pride Rock Inc. agent before any decision is made.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Submitting a form or WhatsApp message is an enquiry, not a reservation or contract. Pride Rock Inc. does not guarantee that
          a given property will remain available between viewing and offer.
        </p>
        <Link href="/properties" className="mt-8 inline-block text-sm font-semibold text-pride-800">
          Return to properties →
        </Link>
      </div>
    </section>
  );
}
