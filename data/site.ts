export const siteConfig = {
  name: "AMEK Platinum Services",
  shortName: "AMEK",
  tagline: "Buy. Rent. Sell. Invest.",
  description:
    "Discover homes, apartments, land and commercial properties for sale and rent with AMEK Platinum Services.",
  url: "https://amekplatinum.com",
  phone: "0244873372",
  phoneHref: "tel:0244873372",
  whatsapp: "233244873372",
  email: "info@amekplatinum.com",
  location: "Mama's Inn, Accra",
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
  "Hello AMEK Platinum Services, I am interested in one of your properties and would like to get more information.";

export function whatsappLink(message = whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function propertyWhatsappMessage(title: string, location: string) {
  return `Hello AMEK Platinum Services, I am interested in the ${title} in ${location}. Is it still available?`;
}

export function formatPrice(price: number, period?: "month" | null) {
  const formatted = new Intl.NumberFormat("en-GH").format(price);
  return period === "month" ? `GH₵ ${formatted} / month` : `GH₵ ${formatted}`;
}
