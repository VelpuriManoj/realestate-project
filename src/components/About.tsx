import { motion } from "framer-motion";
import { FallbackImage } from "./FallbackImage";
import { StatCounter } from "./StatCounter";
import { SITE_NAME } from "../config/site";

const aboutImage =
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80";

const ease = [0.22, 1, 0.36, 1] as const;

// Placeholder figures — replace with verified numbers as they change.
const stats = [
  { value: 10, suffix: "+", label: "Projects" },
  { value: 500, suffix: "+", label: "Happy customers" },
  { value: 5, suffix: "+", label: "Years experience" },
  { value: 100, suffix: "%", label: "Commitment" },
];

export function About() {
  return (
    <section id="about" className="bg-base py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -left-5 -top-5 hidden h-full w-full bg-accent-tint sm:block" aria-hidden="true" />
          <div className="group relative overflow-hidden">
            <FallbackImage
              src={aboutImage}
              alt={`A ${SITE_NAME} residential courtyard with mature landscaping`}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden w-56 border-l-2 border-accent bg-surface p-6 shadow-[0_20px_45px_-20px_rgba(30,27,24,0.3)] sm:block">
            <p className="font-display text-3xl text-ink">5+</p>
            <p className="mt-1 text-sm text-stone">Years shaping neighbourhoods across Hyderabad</p>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease }}
            className="section-label flex items-center gap-3 font-medium uppercase tracking-[0.2em] text-accent"
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            About Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-4 max-w-md text-3xl leading-tight sm:text-4xl"
          >
            Building spaces. Creating possibilities.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 max-w-md space-y-4 text-stone"
          >
            <p>
              {SITE_NAME} is a real-estate development company focused on planning homes and communities that hold
              their value well beyond the day they're handed over.
            </p>
            <p>
              From individual villas to gated communities, every project starts with the same questions: who will
              live here, how will they move through the space, and what will this neighbourhood look like in ten
              years. That thinking shapes our layouts, our locations, and the way we work with buyers from the first
              site visit through to handover.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-line"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="sm:px-6 sm:first:pl-0">
                <StatCounter {...stat} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
