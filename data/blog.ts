export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "things-to-check-before-buying-property-in-ghana",
    title: "5 Things to Check Before Buying Property in Ghana",
    excerpt:
      "Title, access, drainage, condition and trusted support — a Dansoman-based checklist before you pay a pesewa.",
    category: "Buying Guide",
    date: "12 March 2026",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Buying in Accra is rarely just about the house you liked on a Sunday afternoon. A calm review of the basics will save money and argument later.",
      "Start with the title and ownership papers. Confirm who holds the land and that the documents match what is being offered. This is work for a qualified lawyer, not a handshake on the compound.",
      "Visit more than once. Walk the access road after rain. In places like Dansoman, Weija and Kasoa, drainage and last-mile roads can change how a beautiful house actually lives.",
      "Inspect the building itself. Roofs, walls, plumbing, electrical fittings and water supply tell you more than fresh paint. If you are buying land, walk the boundaries with a surveyor.",
      "Be honest about the full cost. Legal fees, inspections, possible repairs and moving sit on top of the asking price.",
      "Work with people who will still pick up the phone after the viewing. Pride Rock Inc. helps clients shortlist, arrange visits and take the next step without theatre.",
    ],
  },
  {
    slug: "best-areas-to-invest-in-accra",
    title: "Where Accra Buyers Are Looking in 2026",
    excerpt:
      "A grounded look at Dansoman, Weija, East Legon, Spintex and Tema — and who each area actually serves.",
    category: "Investment",
    date: "4 March 2026",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Accra is not one market. A family house in Dansoman, a rental on Spintex and a villa in East Legon answer different briefs and different wallets.",
      "West Accra — Dansoman, Mataheko, Weija — still offers space and established streets that many first-time buyers recognise. Commutes toward Kaneshie, Korle Bu and the Mallam Kasoa road matter as much as the finish of the kitchen.",
      "East Legon, Airport Residential and Cantonments remain the addresses people choose when convenience, schools and a known postcode come first. Growing corridors can offer more land for the same budget, with a different daily rhythm.",
      "Start with use. Will you live there, let it, or hold the land? The right street for a three-bedroom family home is not always the right street for a shop.",
      "Pride Rock Inc. compares locations against a real brief from our Dansoman desk — not a generic ranking — so the choice fits how you will actually use the property.",
    ],
  },
  {
    slug: "renting-vs-buying-in-ghana",
    title: "Renting vs Buying: Which Is Right for You?",
    excerpt:
      "Flexibility, advance rent and timing — a clear comparison for people deciding in Accra this year.",
    category: "Advice",
    date: "18 February 2026",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Renting and buying both have a place. The better option depends on how long you plan to stay, how stable your income is, and what you need from a home right now.",
      "Renting offers flexibility. It can be the right move if you are still learning Accra, expecting a job change, or not ready for the legal weight of a purchase. In many neighbourhoods you will still meet advance-rent conversations — plan for that in cash, not only in monthly figures.",
      "Buying can make sense when you have a clear location, a realistic budget and a time horizon that justifies the process. It is slower, and it asks more of you up front.",
      "Do not treat either path as a status decision. A well-chosen rental in Dansoman or Weija can serve you better than a rushed purchase on a difficult road.",
      "If you are weighing both, talk it through. Pride Rock can set current rentals and homes for sale side by side so the comparison is based on actual keys, not theory.",
    ],
  },
  {
    slug: "what-to-know-before-buying-land-in-ghana",
    title: "What to Know Before Buying Land in Ghana",
    excerpt:
      "Boundaries, rainy-season access and documents — the essentials before you pay for a plot.",
    category: "Land",
    date: "2 February 2026",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Land can be a strong long-term decision, but only when the basics are in order. A photograph of an empty plot tells you very little on its own.",
      "Confirm the boundaries with a licensed surveyor. Walk the land. Understand how you reach it in June as well as in January — especially on the Kasoa and Weija corridors.",
      "Ask about intended use and neighbouring activity. A quiet residential plot next to a future commercial strip is a different proposition from a family compound street in Dansoman.",
      "Documentation should be reviewed by a lawyer before money moves. Verbal assurances are not a substitute for a proper search.",
      "Pride Rock Inc. works with clients who want land for a home, a hold or a small development. We look at plots with a practical eye before you commit.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
