export type PropertyCategory = "buy" | "rent" | "land" | "commercial";
export type PropertyType =
  | "House"
  | "Apartment"
  | "Villa"
  | "Townhouse"
  | "Land"
  | "Office"
  | "Shop"
  | "Warehouse";
export type PropertyStatus = "For Sale" | "For Rent";

export type Property = {
  id: string;
  title: string;
  type: PropertyType;
  category: PropertyCategory;
  status: PropertyStatus;
  location: string;
  locationKey: string;
  price: number;
  pricePeriod: "month" | null;
  bedrooms: number | null;
  bathrooms: number | null;
  size: number;
  sizeUnit: "sq ft" | "acres";
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  features: string[];
  featured: boolean;
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  {
    id: "east-legon-4bed-house",
    title: "4 Bedroom Luxury House",
    type: "House",
    category: "buy",
    status: "For Sale",
    location: "East Legon, Accra",
    locationKey: "east-legon",
    price: 3500000,
    pricePeriod: null,
    bedrooms: 4,
    bathrooms: 4,
    size: 2500,
    sizeUnit: "sq ft",
    image: img("photo-1600596542815-ffad4c1539a9"),
    gallery: [
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1600210492486-724fe5c67fb0"),
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1600566753190-17f0baa2a6c3"),
    ],
    description:
      "A refined four-bedroom family home in East Legon with generous living spaces, a landscaped garden and a quiet street setting. Designed for comfortable everyday living with room to entertain.",
    amenities: ["Fitted kitchen", "Private garden", "Covered parking", "Security gate", "Backup water"],
    features: ["En-suite master bedroom", "Open-plan living", "Study room", "Outdoor terrace"],
    featured: true,
  },
  {
    id: "airport-2bed-apartment",
    title: "Modern 2 Bedroom Apartment",
    type: "Apartment",
    category: "rent",
    status: "For Rent",
    location: "Airport Residential Area",
    locationKey: "airport-residential",
    price: 8000,
    pricePeriod: "month",
    bedrooms: 2,
    bathrooms: 2,
    size: 1200,
    sizeUnit: "sq ft",
    image: img("photo-1545324418-cc1a3fa10c00"),
    gallery: [
      img("photo-1545324418-cc1a3fa10c00"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1502672260266-1c1ef2d93688"),
      img("photo-1484154218962-a197022b5858"),
    ],
    description:
      "A bright, well-finished two-bedroom apartment in Airport Residential. Close to shops, restaurants and the airport, with secure parking and a calm compound.",
    amenities: ["24-hour security", "Standby generator", "Assigned parking", "Elevator", "Water reservoir"],
    features: ["Balcony", "Air conditioning", "Built-in wardrobes", "Visitor toilet"],
    featured: true,
  },
  {
    id: "adjiringanor-3bed-house",
    title: "Contemporary 3 Bedroom House",
    type: "House",
    category: "buy",
    status: "For Sale",
    location: "Adjiringanor, Accra",
    locationKey: "adjiringanor",
    price: 2800000,
    pricePeriod: null,
    bedrooms: 3,
    bathrooms: 3,
    size: 2000,
    sizeUnit: "sq ft",
    image: img("photo-1600585154340-be6161a56a0c"),
    gallery: [
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1600573472592-401b489a3cdc"),
      img("photo-1600047509807-ba8d526ad1b8"),
      img("photo-1600566753086-00f18fb6b3ea"),
    ],
    description:
      "A contemporary three-bedroom house in Adjiringanor with clean lines, natural light and a private compound. Practical for a growing family or a professional household.",
    amenities: ["Walled compound", "Boys' quarters", "Parking for 3 cars", "Kitchen pantry"],
    features: ["High ceilings", "Guest room", "Outdoor lounge", "Tiled courtyard"],
    featured: true,
  },
  {
    id: "spintex-1bed-apartment",
    title: "Premium 1 Bedroom Apartment",
    type: "Apartment",
    category: "rent",
    status: "For Rent",
    location: "Spintex, Accra",
    locationKey: "spintex",
    price: 4500,
    pricePeriod: "month",
    bedrooms: 1,
    bathrooms: 1,
    size: 800,
    sizeUnit: "sq ft",
    image: img("photo-1522708323590-d24dbb6b0267"),
    gallery: [
      img("photo-1522708323590-d24dbb6b0267"),
      img("photo-1536376072261-38c75010e6c9"),
      img("photo-1493809842364-82840c0156b0"),
      img("photo-1554995207-c18c203602cb"),
    ],
    description:
      "A compact, well-presented one-bedroom apartment on Spintex Road. Ideal for a professional who wants a convenient address with easy access to shops and the beach road.",
    amenities: ["Security", "Parking", "Shared generator", "Water supply"],
    features: ["Open kitchen", "City views", "Fitted wardrobes", "Tiled floors"],
    featured: true,
  },
  {
    id: "cantonments-villa",
    title: "5 Bedroom Pool Villa",
    type: "Villa",
    category: "buy",
    status: "For Sale",
    location: "Cantonments, Accra",
    locationKey: "cantonments",
    price: 6200000,
    pricePeriod: null,
    bedrooms: 5,
    bathrooms: 5,
    size: 4200,
    sizeUnit: "sq ft",
    image: img("photo-1613977257363-707ba9348227"),
    gallery: [
      img("photo-1613977257363-707ba9348227"),
      img("photo-1613490493576-7fde63acd811"),
      img("photo-1600607687644-c7171b42498d"),
      img("photo-1600585154526-990dced4db0d"),
    ],
    description:
      "An elegant five-bedroom villa in Cantonments with a swimming pool, formal living rooms and a mature garden. Suited to clients looking for space, privacy and a established neighbourhood.",
    amenities: ["Swimming pool", "Staff quarters", "Double garage", "Garden irrigation", "CCTV"],
    features: ["Formal dining", "Family lounge", "Walk-in closet", "Covered terrace"],
    featured: true,
  },
  {
    id: "dzorwulu-townhouse",
    title: "4 Bedroom Townhouse",
    type: "Townhouse",
    category: "rent",
    status: "For Rent",
    location: "Dzorwulu, Accra",
    locationKey: "dzorwulu",
    price: 12000,
    pricePeriod: "month",
    bedrooms: 4,
    bathrooms: 4,
    size: 2800,
    sizeUnit: "sq ft",
    image: img("photo-1600607687920-4e2a09cf159d"),
    gallery: [
      img("photo-1600607687920-4e2a09cf159d"),
      img("photo-1600585154363-67eb9e2e2099"),
      img("photo-1600210492493-0946911123ea"),
      img("photo-1564013799919-ab600027ffc6"),
    ],
    description:
      "A spacious four-bedroom townhouse in a gated Dzorwulu community. Family-friendly layout with a private garden and easy access to international schools and the city.",
    amenities: ["Gated community", "Generator", "Garden", "Parking", "Borehole"],
    features: ["Two living rooms", "Maid's room", "Study", "Patio"],
    featured: false,
  },
  {
    id: "east-legon-residential-land",
    title: "Residential Plot, East Legon Hills",
    type: "Land",
    category: "land",
    status: "For Sale",
    location: "East Legon Hills, Accra",
    locationKey: "east-legon",
    price: 950000,
    pricePeriod: null,
    bedrooms: null,
    bathrooms: null,
    size: 0.4,
    sizeUnit: "acres",
    image: img("photo-1500382017468-9049fed747ef"),
    gallery: [
      img("photo-1500382017468-9049fed747ef"),
      img("photo-1628624747186-a941c476b7ef"),
      img("photo-1464146072230-91cabc968266"),
      img("photo-1449844908441-8829872d2607"),
    ],
    description:
      "A well-located residential plot in East Legon Hills, suitable for a private home or a small development. Accessible road frontage with growing neighbourhood infrastructure.",
    amenities: ["Road access", "Nearby utilities", "Surveyed plot"],
    features: ["Rectangular shape", "Quiet street", "Rising residential area"],
    featured: false,
  },
  {
    id: "airport-serviced-office",
    title: "Serviced Office Suite",
    type: "Office",
    category: "commercial",
    status: "For Rent",
    location: "Airport City, Accra",
    locationKey: "airport-residential",
    price: 18000,
    pricePeriod: "month",
    bedrooms: null,
    bathrooms: 2,
    size: 1600,
    sizeUnit: "sq ft",
    image: img("photo-1497366216548-37526070297c"),
    gallery: [
      img("photo-1497366216548-37526070297c"),
      img("photo-1497366811353-6870744d04b2"),
      img("photo-1524758631624-e2822e304c36"),
      img("photo-1486406146926-c627a92ad1ab"),
    ],
    description:
      "A ready-to-occupy office suite in Airport City with meeting rooms, reception and reliable power. Practical for a professional firm that wants a central Accra address.",
    amenities: ["Reception", "Standby power", "Parking", "Air conditioning", "Fibre internet ready"],
    features: ["Open work area", "Two meeting rooms", "Kitchenette", "Client waiting area"],
    featured: false,
  },
  {
    id: "tema-family-house",
    title: "3 Bedroom Family House",
    type: "House",
    category: "buy",
    status: "For Sale",
    location: "Tema Community 25",
    locationKey: "tema",
    price: 1650000,
    pricePeriod: null,
    bedrooms: 3,
    bathrooms: 3,
    size: 1800,
    sizeUnit: "sq ft",
    image: img("photo-1600047509807-ba8d526ad1b8"),
    gallery: [
      img("photo-1600047509807-ba8d526ad1b8"),
      img("photo-1570129477492-45c003edd2be"),
      img("photo-1568605114967-8130f3a36994"),
      img("photo-1599809275671-b5942cabc7a2"),
    ],
    description:
      "A well-kept three-bedroom house in Tema Community 25, offering space, a compound and straightforward access to the motorway and the port city amenities.",
    amenities: ["Compound", "Parking", "Water tank", "Security bars"],
    features: ["Dining area", "Outdoor kitchen space", "Store room", "Porch"],
    featured: false,
  },
  {
    id: "adenta-2bed-apartment",
    title: "2 Bedroom Garden Apartment",
    type: "Apartment",
    category: "rent",
    status: "For Rent",
    location: "Adenta, Accra",
    locationKey: "adenta",
    price: 3200,
    pricePeriod: "month",
    bedrooms: 2,
    bathrooms: 2,
    size: 950,
    sizeUnit: "sq ft",
    image: img("photo-1502672260266-1c1ef2d93688"),
    gallery: [
      img("photo-1502672260266-1c1ef2d93688"),
      img("photo-1560448204-603b3fc33ddc"),
      img("photo-1522708323590-d24dbb6b0267"),
      img("photo-1554995207-c18c203602cb"),
    ],
    description:
      "A peaceful two-bedroom garden-level apartment in Adenta. Good for a small family or couple looking for space outside the inner city, with shops and transport nearby.",
    amenities: ["Parking", "Security", "Shared compound", "Water supply"],
    features: ["Garden access", "Kitchen with pantry", "Tiled throughout"],
    featured: false,
  },
  {
    id: "tema-warehouse",
    title: "Warehouse with Yard",
    type: "Warehouse",
    category: "commercial",
    status: "For Rent",
    location: "Tema Industrial Area",
    locationKey: "tema",
    price: 25000,
    pricePeriod: "month",
    bedrooms: null,
    bathrooms: 2,
    size: 12000,
    sizeUnit: "sq ft",
    image: img("photo-1586528116311-ad8dd3c8310d"),
    gallery: [
      img("photo-1586528116311-ad8dd3c8310d"),
      img("photo-1553413077-190dd305871c"),
      img("photo-1587293852726-70cdb56c2866"),
      img("photo-1565610222536-ef125c59da2e"),
    ],
    description:
      "A practical warehouse with loading yard in the Tema Industrial Area. Suitable for storage, distribution or light operations close to the port.",
    amenities: ["Loading bay", "Yard parking", "Security post", "Three-phase power"],
    features: ["High clearance", "Office annex", "Walled perimeter"],
    featured: false,
  },
  {
    id: "osu-retail-shop",
    title: "Ground Floor Retail Shop",
    type: "Shop",
    category: "commercial",
    status: "For Rent",
    location: "Osu, Accra",
    locationKey: "osu",
    price: 7500,
    pricePeriod: "month",
    bedrooms: null,
    bathrooms: 1,
    size: 650,
    sizeUnit: "sq ft",
    image: img("photo-1441986300917-64674bd600d8"),
    gallery: [
      img("photo-1441986300917-64674bd600d8"),
      img("photo-1441984904996-e0b6ba687e04"),
      img("photo-1472851294608-062f824d29cc"),
      img("photo-1556742049-0cfed4f6a45d"),
    ],
    description:
      "A visible ground-floor shop on a busy Osu stretch. Suitable for retail, a showroom or a service business that needs walk-in traffic.",
    amenities: ["Street frontage", "Shutters", "Power", "Water"],
    features: ["Display windows", "Rear store", "Single washroom"],
    featured: false,
  },
  {
    id: "kasoa-land",
    title: "Development Land, Kasoa",
    type: "Land",
    category: "land",
    status: "For Sale",
    location: "Kasoa, Central Region",
    locationKey: "kasoa",
    price: 280000,
    pricePeriod: null,
    bedrooms: null,
    bathrooms: null,
    size: 0.5,
    sizeUnit: "acres",
    image: img("photo-1628624747186-a941c476b7ef"),
    gallery: [
      img("photo-1628624747186-a941c476b7ef"),
      img("photo-1500382017468-9049fed747ef"),
      img("photo-1464146072230-91cabc968266"),
      img("photo-1472214103451-9374bd1c798e"),
    ],
    description:
      "Half an acre of land on the Kasoa corridor, suitable for residential development or a longer-term hold. Growing access and neighbourhood activity around the plot.",
    amenities: ["Road nearby", "Surveyed", "Clear boundaries"],
    features: ["Development potential", "Accessible from Accra-Cape Coast road"],
    featured: false,
  },
  {
    id: "trasacco-villa-rent",
    title: "Furnished 4 Bedroom Villa",
    type: "Villa",
    category: "rent",
    status: "For Rent",
    location: "East Legon, Accra",
    locationKey: "east-legon",
    price: 22000,
    pricePeriod: "month",
    bedrooms: 4,
    bathrooms: 4,
    size: 3600,
    sizeUnit: "sq ft",
    image: img("photo-1582268611958-ebfd161ef9cf"),
    gallery: [
      img("photo-1582268611958-ebfd161ef9cf"),
      img("photo-1613490493576-7fde63acd811"),
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1600566752355-35792bedcfea"),
    ],
    description:
      "A furnished four-bedroom villa with a pool in East Legon. Ready for a family or executive household that wants a finished home in a sought-after Accra neighbourhood.",
    amenities: ["Swimming pool", "Furnished", "Generator", "DSTV ready", "Security"],
    features: ["Open living", "Outdoor kitchen", "Guest suite", "Landscaped garden"],
    featured: true,
  },
];

export const propertyTypes: PropertyType[] = [
  "House",
  "Apartment",
  "Villa",
  "Townhouse",
  "Land",
  "Office",
  "Shop",
  "Warehouse",
];

export const searchTabs: { id: PropertyCategory; label: string }[] = [
  { id: "buy", label: "Buy" },
  { id: "rent", label: "Rent" },
  { id: "land", label: "Land" },
  { id: "commercial", label: "Commercial" },
];

export const priceRanges: Record<
  PropertyCategory,
  { label: string; min: number; max: number }[]
> = {
  buy: [
    { label: "Under GH₵ 1,000,000", min: 0, max: 1000000 },
    { label: "GH₵ 1M – 2.5M", min: 1000000, max: 2500000 },
    { label: "GH₵ 2.5M – 5M", min: 2500000, max: 5000000 },
    { label: "Above GH₵ 5M", min: 5000000, max: Infinity },
  ],
  rent: [
    { label: "Under GH₵ 5,000", min: 0, max: 5000 },
    { label: "GH₵ 5,000 – 10,000", min: 5000, max: 10000 },
    { label: "GH₵ 10,000 – 20,000", min: 10000, max: 20000 },
    { label: "Above GH₵ 20,000", min: 20000, max: Infinity },
  ],
  land: [
    { label: "Under GH₵ 400,000", min: 0, max: 400000 },
    { label: "GH₵ 400,000 – 1M", min: 400000, max: 1000000 },
    { label: "Above GH₵ 1M", min: 1000000, max: Infinity },
  ],
  commercial: [
    { label: "Under GH₵ 10,000 / mo", min: 0, max: 10000 },
    { label: "GH₵ 10,000 – 20,000 / mo", min: 10000, max: 20000 },
    { label: "Above GH₵ 20,000 / mo", min: 20000, max: Infinity },
  ],
};

export function getPropertyById(id: string) {
  return properties.find((p) => p.id === id);
}

export function getFeaturedProperties() {
  return properties.filter((p) => p.featured).slice(0, 4);
}

export function getRelatedProperties(property: Property, limit = 3) {
  return properties
    .filter((p) => p.id !== property.id && (p.locationKey === property.locationKey || p.category === property.category))
    .slice(0, limit);
}
