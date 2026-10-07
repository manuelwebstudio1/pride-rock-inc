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
      "A practical checklist covering title, location, access, condition and professional support before you commit.",
    category: "Buying Guide",
    date: "12 March 2026",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Buying property is a significant decision. A calm, methodical review of the basics will save time and reduce avoidable surprises later.",
      "Start with the title and ownership documents. Confirm who holds the land or property and that the paperwork is consistent with what is being offered. This is work for a qualified lawyer, not a shortcut on the viewing day.",
      "Visit the location more than once. Look at access roads, drainage, neighbouring uses and how the area feels at different times of day. A beautiful house on a difficult road is still a difficult commute.",
      "Inspect the building itself. Check roofs, walls, plumbing, electrical fittings and water supply. If you are buying land, walk the boundaries with a surveyor rather than relying on a sketch.",
      "Be clear on your budget beyond the asking price. Factor in legal fees, inspections, possible repairs and moving costs so the decision remains realistic.",
      "Work with professionals you trust. Amek Platinum Services can help you shortlist properties, arrange viewings and connect you with the right next steps — from first enquiry to a considered offer.",
    ],
  },
  {
    slug: "best-areas-to-invest-in-accra",
    title: "Best Areas to Invest in Accra",
    excerpt:
      "A grounded look at Accra neighbourhoods people consider for homes, rentals and longer-term holds.",
    category: "Investment",
    date: "4 March 2026",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Accra is not one market. East Legon, Airport Residential, Cantonments, Spintex, Adenta and Tema each serve different buyers, tenants and price points.",
      "Established inner neighbourhoods often appeal to people who want convenience, schools and a known address. Growing corridors can offer more space for the same budget, with a different daily routine.",
      "Investment decisions should start with use: will you live there, rent it out, or hold land? The right area for a family home is not always the right area for a commercial unit.",
      "Visit in person. Maps and photographs cannot replace a walk around the street, a look at access, and a conversation about how the neighbourhood is changing.",
      "AMEK Platinum Services helps clients compare locations against a real brief — not a generic ranking — so the choice fits how you actually intend to use the property.",
    ],
  },
  {
    slug: "renting-vs-buying-in-ghana",
    title: "Renting vs Buying: Which Is Right for You?",
    excerpt:
      "A clear comparison of flexibility, cost and timing so you can choose the path that fits your situation.",
    category: "Advice",
    date: "18 February 2026",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Renting and buying both have a place. The better option depends on how long you plan to stay, how stable your income is, and what you need from a home right now.",
      "Renting offers flexibility. It can be the right move if you are still learning a city, expecting a job change, or not ready for the legal and financial commitment of a purchase.",
      "Buying can make sense when you have a clear location preference, a realistic budget and a time horizon that justifies the process. It is slower, and it asks more of you up front.",
      "Do not treat either path as a status decision. A well-chosen rental in the right neighbourhood can serve you better than a rushed purchase.",
      "If you are weighing both, talk it through. AMEK can show you current rentals and homes for sale side by side so the comparison is based on actual options, not theory.",
    ],
  },
  {
    slug: "what-to-know-before-buying-land-in-ghana",
    title: "What to Know Before Buying Land in Ghana",
    excerpt:
      "Boundaries, access, documentation and intended use — the essentials before you pay for a plot.",
    category: "Land",
    date: "2 February 2026",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Land can be a strong long-term decision, but only when the basics are in order. Photographs of an empty plot tell you very little on their own.",
      "Confirm the boundaries with a licensed surveyor. Walk the land. Understand how you reach it in the rainy season as well as in the dry season.",
      "Ask about the intended planning use and neighbouring activity. A quiet residential plot next to a future commercial strip is a different proposition.",
      "Documentation should be reviewed by a lawyer before money moves. Verbal assurances are not a substitute for a proper search.",
      "AMEK Platinum Services works with clients who want land for a home, a hold or a development. We help you look at plots with a practical eye before you commit.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
