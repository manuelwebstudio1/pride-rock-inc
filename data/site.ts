export const siteConfig = {
  name: "Pride Rock Inc.",
  shortName: "Pride Rock",
  tagline: "Solid ground in Ghanaian property.",
  description:
    "Pride Rock Inc. helps families and investors buy, rent, sell and hold property across Accra, from our office in Dansoman.",
  url: "https://priderockinc.com",
  phone: "0244482083 / 0264482083",
  phonePrimary: "0244482083",
  phoneSecondary: "0264482083",
  phoneHref: "tel:0244482083",
  phoneHrefSecondary: "tel:0264482083",
  whatsapp: "233244482083",
  email: "info@priderockinc.com",
  location: "Dansoman, Accra",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const whatsappDefaultMessage =
  "Hello Pride Rock Inc., I am interested in one of your properties and would like to get more information.";

export function whatsappLink(message = whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function propertyWhatsappMessage(title: string, location: string) {
  return `Hello Pride Rock Inc., I am interested in the ${title} in ${location}. Is it still available?`;
}

export function formatPrice(price: number, period?: "month" | null) {
  const formatted = new Intl.NumberFormat("en-GH").format(price);
  return period === "month" ? `GH₵ ${formatted} / month` : `GH₵ ${formatted}`;
}
