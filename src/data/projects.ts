export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  status: "Ready to Move" | "Under Construction" | "Upcoming";
  description: string;
  image: string;
}

// Edit or reorder this list to change what appears in the Projects section.
export const projects: Project[] = [
  {
    id: "green-valley",
    name: "TEST Green Valley",
    location: "Kondapur, Hyderabad",
    type: "Residential Villas",
    status: "Ready to Move",
    description:
      "Low-density villa plots set around shared green corridors, built for families who want space to grow into.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "urban-heights",
    name: "TEST Urban Heights",
    location: "Gachibowli, Hyderabad",
    type: "High-Rise Apartments",
    status: "Under Construction",
    description:
      "A mid-rise residential tower close to the city's tech corridor, with light-filled layouts and shared terraces.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "premium-enclave",
    name: "TEST Premium Enclave",
    location: "Shamshabad, Hyderabad",
    type: "Gated Community Plots",
    status: "Upcoming",
    description:
      "A gated plotted development with wide internal roads, planned amenities, and long-term appreciation potential.",
    image:
      "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "riverside-court",
    name: "TEST Riverside Court",
    location: "Nizampet, Hyderabad",
    type: "Residential Apartments",
    status: "Under Construction",
    description:
      "Compact, efficiently planned apartments designed for first-time buyers entering a growing neighbourhood.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "orchard-residency",
    name: "TEST Orchard Residency",
    location: "Kompally, Hyderabad",
    type: "Independent Homes",
    status: "Ready to Move",
    description:
      "Independent homes on tree-lined plots, finished and ready for families who want to move in without delay.",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "skyline-residences",
    name: "TEST Skyline Residences",
    location: "Kokapet, Hyderabad",
    type: "Premium Apartments",
    status: "Upcoming",
    description:
      "A premium tower planned around skyline views and generous common spaces, in one of the city's fastest-growing pockets.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
  },
];
