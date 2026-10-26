export interface Room {
  id: string;
  name: string;
  price: number;
  description: string;
  location: string;
  beds: number;
  baths: number;
  image: string;
}

export const roomsData: Room[] = [
  {
    id: "1",
    name: "The Amber Estate",
    price: 520,
    description:
      "Time stands reverent within these 16th-century walls, honored through thoughtful modern restoration.",
    location: "Location",
    beds: 2,
    baths: 1,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "The Ebony Residence",
    price: 520,
    description:
      "Ancient traditions reimagined in contemporary elegance, nestled among centuries-old maple gardens.",
    location: "Location",
    beds: 2,
    baths: 1,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "The Alabaster Pavilion",
    price: 520,
    description:
      "A cliffside marvel of limestone and light, where the Mediterranean becomes your private canvas.",
    location: "Location",
    beds: 2,
    baths: 1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "The Ethereal Circle",
    price: 520,
    description:
      "Designed for ultimate serenity, surrounded by panoramic views and immersive architectural mastery.",
    location: "Location",
    beds: 3,
    baths: 2,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
  },
];
