// Twenty products rendered by the same templated route: /products/:productId.
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: "Trail Runner Backpack", category: "Backpacks", price: 89, description: "A light 20 L pack for day hikes." },
  { id: 2, name: "Summit Duffel", category: "Bags", price: 120, description: "A weatherproof duffel for long trips." },
  { id: 3, name: "Ridge Two-Person Tent", category: "Tents", price: 249, description: "A freestanding tent that sets up in minutes." },
  { id: 4, name: "Basecamp Four-Person Tent", category: "Tents", price: 399, description: "Room for the whole family and their gear." },
  { id: 5, name: "Alpine Sleeping Bag", category: "Sleeping", price: 179, description: "Rated to -5 °C and packs down small." },
  { id: 6, name: "Meadow Sleeping Pad", category: "Sleeping", price: 69, description: "Self-inflating foam for a level night's sleep." },
  { id: 7, name: "Canyon Water Filter", category: "Water", price: 45, description: "Filters a litre of stream water in a minute." },
  { id: 8, name: "Glacier Water Bottle", category: "Water", price: 25, description: "Insulated steel bottle that keeps drinks cold." },
  { id: 9, name: "Forest Camp Stove", category: "Cooking", price: 59, description: "A compact canister stove with a piezo igniter." },
  { id: 10, name: "Riverside Cook Set", category: "Cooking", price: 49, description: "Nesting pot, pan and two mugs." },
  { id: 11, name: "Headlamp 300", category: "Lighting", price: 35, description: "300 lumens with a red night mode." },
  { id: 12, name: "Lantern Mini", category: "Lighting", price: 29, description: "Rechargeable lantern that lights a whole tent." },
  { id: 13, name: "Storm Rain Jacket", category: "Clothing", price: 149, description: "Three-layer shell with taped seams." },
  { id: 14, name: "Fleece Midlayer", category: "Clothing", price: 79, description: "Warm, breathable and quick to dry." },
  { id: 15, name: "Hiking Boots", category: "Footwear", price: 169, description: "Waterproof leather boots with a grippy sole." },
  { id: 16, name: "Camp Sandals", category: "Footwear", price: 39, description: "Light sandals for the end of the day." },
  { id: 17, name: "Trekking Poles", category: "Accessories", price: 65, description: "Adjustable carbon poles with cork grips." },
  { id: 18, name: "Compass Pro", category: "Navigation", price: 32, description: "Baseplate compass with a sighting mirror." },
  { id: 19, name: "First Aid Kit", category: "Safety", price: 38, description: "Everything you need for minor trail injuries." },
  { id: 20, name: "Emergency Bivvy", category: "Safety", price: 22, description: "A reflective shelter that fits in a pocket." },
];

export function findProduct(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}
