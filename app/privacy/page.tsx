import Link from "next/link";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="bg-cream pb-20 pt-32">
      <div className="container-site max-w-3xl">
        <h1 className="font-serif text-4xl text-pride-900">Privacy Policy</h1>
        <p className="mt-6 leading-relaxed text-muted">
          Pride Rock Inc. treats enquiries as confidential. Contact details shared through this website, WhatsApp
          or phone are used only to respond to your request and to follow up on property viewings or listings.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Favourite properties are stored locally in your browser and are not sent to a server. Phone and email details
          are used only to reply to your enquiry or to arrange a viewing.
        </p>
        <Link href="/contact" className="mt-8 inline-block text-sm font-semibold text-pride-800">
          Contact us with questions →
        </Link>
      </div>
    </section>
  );
}
