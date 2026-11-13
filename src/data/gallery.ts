export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  // Controls the grid span on desktop for a masonry-like layout.
  span: "tall" | "wide" | "normal";
}

// Replace these with real project photography — drop files into
// public/images/ and update the src paths below.
export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    alt: "Exterior view of a modern villa with landscaped garden",
    span: "wide",
  },
  {
    id: "gallery-2",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    alt: "Bright open-plan living room with large windows",
    span: "tall",
  },
  {
    id: "gallery-3",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    alt: "Modern apartment building facade",
    span: "normal",
  },
  {
    id: "gallery-4",
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    alt: "Minimal interior with natural light",
    span: "normal",
  },
  {
    id: "gallery-5",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    alt: "Contemporary residential tower against the sky",
    span: "wide",
  },
  {
    id: "gallery-6",
    src: "https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&w=800&q=80",
    alt: "Well-lit kitchen and dining area",
    span: "tall",
  },
  {
    id: "gallery-7",
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    alt: "Landscaped courtyard within a housing community",
    span: "normal",
  },
  {
    id: "gallery-8",
    src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80",
    alt: "Residence exterior in the evening light",
    span: "wide",
  },
];
