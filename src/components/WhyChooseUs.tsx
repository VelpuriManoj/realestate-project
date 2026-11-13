import { motion } from "framer-motion";
import { MapPinned, ShieldCheck, FileCheck2, Heart, TrendingUp, Headset } from "lucide-react";
import { SITE_NAME } from "../config/site";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    icon: MapPinned,
    title: "Prime Locations",
    description: "Every site is chosen for connectivity and growth potential, not just today's price.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Development",
    description: "Careful planning and dependable materials go into every layout we build.",
  },
  {
    icon: FileCheck2,
    title: "Transparent Process",
    description: "Clear documentation and honest timelines, shared upfront and revisited at every stage.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "We stay involved from the first site visit through handover and beyond.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Value",
    description: "Layouts and locations are chosen with resale and rental value in mind, not just aesthetics.",
  },
  {
    icon: Headset,
    title: "Professional Support",
    description: "A dedicated team is available to answer questions at any stage of your journey with us.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-base py-24 sm:py-32">
      <div className="container-x">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-md text-3xl leading-tight sm:text-4xl"
        >
          Why choose {SITE_NAME}?
        </motion.h2>

        <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease } }}
              className="group bg-surface p-8 transition-colors duration-300 ease-smooth hover:bg-accent-tint"
            >
              <motion.div whileHover={{ scale: 1.12, rotate: -4 }} transition={{ duration: 0.3, ease }} className="inline-flex">
                <feature.icon size={26} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
              </motion.div>
              <h3 className="mt-5 font-display text-lg text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm text-stone">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
