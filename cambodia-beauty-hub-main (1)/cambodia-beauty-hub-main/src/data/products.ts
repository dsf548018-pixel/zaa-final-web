export interface Product {
  id: string;
  name: string;
  nameKh: string;
  brand: string;
  category: string;
  price: number; // USD
  priceRiel: number;
  description: string;
  ingredients: string;
  image: string;
  badge?: string;
}

export const EXCHANGE_RATE = 4100; // 1 USD ≈ 4100 KHR

export const categories = [
  { id: "cleanser", label: "Cleanser", emoji: "🧴" },
  { id: "toner", label: "Toner", emoji: "💧" },
  { id: "serum", label: "Serum", emoji: "✨" },
  { id: "sunscreen", label: "Sunscreen", emoji: "☀️" },
  { id: "moisturizer", label: "Moisturizer", emoji: "🌸" },
];

export const brands = [
  "COSRX",
  "Innisfree",
  "Laneige",
  "Some By Mi",
  "Hada Labo",
  "Shiseido",
  "CeraVe",
  "La Roche-Posay",
  "The Ordinary",
  "Beauty of Joseon",
];

export const products: Product[] = [
  // Korean Brands
  {
    id: "cosrx-low-ph-cleanser",
    name: "Low pH Good Morning Cleanser",
    nameKh: "សាប៊ូសម្អាតមុខ",
    brand: "COSRX",
    category: "cleanser",
    price: 12.00,
    priceRiel: 12 * EXCHANGE_RATE,
    description: "A gentle, mildly acidic daily cleanser with BHA and tea tree oil that purifies pores and controls excess sebum without stripping the skin.",
    ingredients: "Water, Cocamidopropyl Betaine, Sodium Lauroyl Methyl Isethionate, BHA, Tea Tree Oil",
    image: "/src/assets/product-cleanser.jpg",
    badge: "Best Seller",
  },
  {
    id: "innisfree-green-tea-toner",
    name: "Green Tea Seed Hyaluronic Toner",
    nameKh: "ទឹកថែរក្សាស្បែក",
    brand: "Innisfree",
    category: "toner",
    price: 16.00,
    priceRiel: 16 * EXCHANGE_RATE,
    description: "A hydrating toner with Jeju green tea and hyaluronic acid to deliver deep moisture and antioxidant protection.",
    ingredients: "Green Tea Seed Oil, Hyaluronic Acid, Betaine, Glycerin",
    image: "/src/assets/product-toner.jpg",
    badge: "Popular",
  },
  {
    id: "beauty-of-joseon-serum",
    name: "Glow Serum: Propolis + Niacinamide",
    nameKh: "សេរ៉ូមវីតាមីនស៊ី",
    brand: "Beauty of Joseon",
    category: "serum",
    price: 14.00,
    priceRiel: 14 * EXCHANGE_RATE,
    description: "A lightweight glow serum with propolis extract and niacinamide to brighten, nourish, and strengthen the skin barrier.",
    ingredients: "Propolis Extract, Niacinamide, Panthenol, Honey Extract",
    image: "/src/assets/product-serum.jpg",
    badge: "Hot 🔥",
  },
  {
    id: "laneige-water-sleeping-mask",
    name: "Water Sleeping Mask",
    nameKh: "ម៉ាសពេលគេង",
    brand: "Laneige",
    category: "moisturizer",
    price: 22.00,
    priceRiel: 22 * EXCHANGE_RATE,
    description: "An overnight moisture-lock sleeping mask that revitalizes dull, dehydrated skin with SLEEP-TOX™ purifying technology.",
    ingredients: "Hydro Ionized Mineral Water, Evening Primrose, Apricot Extract",
    image: "/src/assets/product-moisturizer.jpg",
    badge: "Fan Favorite",
  },
  {
    id: "some-by-mi-toner",
    name: "AHA BHA PHA 30 Days Miracle Toner",
    nameKh: "ទឹកថែស្បែក",
    brand: "Some By Mi",
    category: "toner",
    price: 15.00,
    priceRiel: 15 * EXCHANGE_RATE,
    description: "A mildly acidic toner with AHA, BHA, and PHA for gentle chemical exfoliation, pore care, and skin renewal.",
    ingredients: "Tea Tree Water, AHA, BHA, PHA, Niacinamide",
    image: "/src/assets/product-toner.jpg",
    badge: "New",
  },
  {
    id: "cosrx-snail-mucin",
    name: "Advanced Snail 96 Mucin Power Essence",
    nameKh: "សេរ៉ូមស្បែក",
    brand: "COSRX",
    category: "serum",
    price: 18.00,
    priceRiel: 18 * EXCHANGE_RATE,
    description: "A bestselling essence with 96.3% snail secretion filtrate to repair, hydrate, and give skin a healthy glow.",
    ingredients: "Snail Secretion Filtrate, Betaine, Sodium Hyaluronate, Panthenol",
    image: "/src/assets/product-serum.jpg",
    badge: "Best Seller",
  },

  // Japanese Brands
  {
    id: "hada-labo-lotion",
    name: "Gokujyun Hyaluronic Acid Lotion",
    nameKh: "ទឹកថែស្បែក",
    brand: "Hada Labo",
    category: "toner",
    price: 13.50,
    priceRiel: 13.5 * EXCHANGE_RATE,
    description: "A hydrating lotion with multiple types of hyaluronic acid that deeply moisturizes and plumps the skin.",
    ingredients: "Super Hyaluronic Acid, Nano Hyaluronic Acid, Hyaluronic Acid, Glycerin",
    image: "/src/assets/product-toner.jpg",
  },
  {
    id: "shiseido-sunscreen",
    name: "Ultimate Sun Protector Lotion SPF50+",
    nameKh: "ក្រែមការពារកំដៅថ្ងៃ",
    brand: "Shiseido",
    category: "sunscreen",
    price: 25.00,
    priceRiel: 25 * EXCHANGE_RATE,
    description: "Advanced sun protection that becomes more effective with heat and water. Ultra-lightweight, invisible formula perfect for tropical weather.",
    ingredients: "Zinc Oxide, Titanium Dioxide, SynchroShield™, Profense CEL™",
    image: "/src/assets/product-sunscreen.jpg",
    badge: "Premium",
  },

  // Western Brands
  {
    id: "cerave-foaming-cleanser",
    name: "Foaming Facial Cleanser",
    nameKh: "សាប៊ូសម្អាតមុខ",
    brand: "CeraVe",
    category: "cleanser",
    price: 14.00,
    priceRiel: 14 * EXCHANGE_RATE,
    description: "A dermatologist-recommended cleanser with three essential ceramides and niacinamide. Removes oil and dirt while maintaining the skin barrier.",
    ingredients: "Ceramide AP, Ceramide NP, Ceramide EOP, Niacinamide, Hyaluronic Acid",
    image: "/src/assets/product-cleanser.jpg",
  },
  {
    id: "la-roche-posay-sunscreen",
    name: "Anthelios UV Mune 400 SPF50+",
    nameKh: "ក្រែមការពារកំដៅថ្ងៃ",
    brand: "La Roche-Posay",
    category: "sunscreen",
    price: 20.00,
    priceRiel: 20 * EXCHANGE_RATE,
    description: "The first sunscreen filter that protects against ultra-long UVA rays. Lightweight fluid texture, no white cast.",
    ingredients: "Mexoryl 400, La Roche-Posay Thermal Spring Water, Niacinamide",
    image: "/src/assets/product-sunscreen.jpg",
    badge: "Must Have",
  },
  {
    id: "the-ordinary-niacinamide",
    name: "Niacinamide 10% + Zinc 1%",
    nameKh: "សេរ៉ូមស្បែក",
    brand: "The Ordinary",
    category: "serum",
    price: 8.00,
    priceRiel: 8 * EXCHANGE_RATE,
    description: "A high-strength vitamin and mineral formula to reduce the appearance of blemishes and congestion. Budget-friendly skincare essential.",
    ingredients: "Niacinamide, Zinc PCA, Glycerin, Pentylene Glycol",
    image: "/src/assets/product-serum.jpg",
    badge: "Budget Pick",
  },
  {
    id: "cerave-moisturizing-cream",
    name: "Moisturizing Cream",
    nameKh: "ក្រែមសើមស្បែក",
    brand: "CeraVe",
    category: "moisturizer",
    price: 15.00,
    priceRiel: 15 * EXCHANGE_RATE,
    description: "Rich, non-greasy moisturizer with MVE technology for 24-hour hydration. Contains three essential ceramides for barrier repair.",
    ingredients: "Ceramide NP, Ceramide AP, Ceramide EOP, Hyaluronic Acid, MVE Technology",
    image: "/src/assets/product-moisturizer.jpg",
  },
];

export const formatUSD = (price: number) => `$${price.toFixed(2)}`;
export const formatRiel = (price: number) => `៛${price.toLocaleString()}`;
