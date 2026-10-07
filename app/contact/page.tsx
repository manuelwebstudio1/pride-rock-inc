import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { images } from "@/data/images";

export const metadata = {
  title: "Contact Pride Rock Inc.",
  description: "Call, WhatsApp or send an enquiry to Pride Rock Inc. in Dansoman, Accra.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Find Your Perfect Property"
        text="Whether you want to view a home, list a property or ask about land, start here. A Pride Rock agent will take it from the first message."
        image={images.contact}
      />
      <ContactSection />
    </>
  );
}
