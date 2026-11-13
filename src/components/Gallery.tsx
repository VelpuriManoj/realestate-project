import { useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { galleryImages } from "../data/gallery";
import { FallbackImage } from "./FallbackImage";
import { Lightbox } from "./Lightbox";

const ease = [0.22, 1, 0.36, 1] as const;

const spanClasses: Record<string, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-base py-24 sm:py-32">
      <div className="container-x">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease }}
          className="section-label flex items-center gap-3 font-medium uppercase tracking-[0.2em] text-accent"
        >
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          Gallery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mt-4 max-w-md text-3xl leading-tight sm:text-4xl"
        >
          A closer look
        </motion.h2>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:grid-flow-row-dense sm:gap-4">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease } }}
              className={`group relative aspect-square overflow-hidden focus-visible:outline-offset-2 sm:aspect-auto ${spanClasses[image.span]}`}
              aria-label={`View larger image: ${image.alt}`}
            >
              <FallbackImage
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-base/0 text-base opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:bg-base/15 group-hover:opacity-100">
                  <Expand size={16} aria-hidden="true" />
                </span>
                <p className="translate-y-2 text-sm text-base opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.alt}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
