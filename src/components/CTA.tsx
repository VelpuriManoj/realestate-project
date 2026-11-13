import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FallbackImage } from "./FallbackImage";

const ctaImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80";

// Drop a looping .mp4 at public/videos/cta-loop.mp4 to replace the still image
// with a background video — it fades in automatically once found, and falls
// back to the image untouched if the file is missing or fails to load.
const ctaVideo = "/videos/cta-loop.mp4";

const ease = [0.22, 1, 0.36, 1] as const;

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const shouldReduceMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <FallbackImage src={ctaImage} alt="Interior of a well-lit home" className="h-[124%] w-full object-cover" />
        {!shouldReduceMotion && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-smooth ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={ctaVideo} type="video/mp4" />
          </video>
        )}
      </motion.div>
      <div className="absolute inset-0 bg-ink/80" />

      <div className="container-x relative">
        <div className="mx-auto max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl leading-tight text-base sm:text-4xl"
          >
            Find a place you'll love to call home
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-4 text-base/80"
          >
            Explore our projects and discover spaces designed for your future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#projects" className="btn-light group">
              Explore Projects
              <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-light-outline">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
