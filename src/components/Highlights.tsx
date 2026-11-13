import { motion } from "framer-motion";
import { FallbackImage } from "./FallbackImage";

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  {
    title: "Prime Locations",
    description: "Strategically selected locations with strong growth potential.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Smart Investment",
    description: "Properties designed with long-term value in mind.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Quality Development",
    description: "Focus on thoughtful planning and quality infrastructure.",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Complete Support",
    description: "Professional assistance throughout the property journey.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
  },
];

export function Highlights() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="container-x">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-md text-3xl leading-tight text-base sm:text-4xl"
        >
          What sets our properties apart
        </motion.h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease }}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <FallbackImage
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-lg text-base">{item.title}</h3>
                <p className="mt-1.5 text-sm text-base/75">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
