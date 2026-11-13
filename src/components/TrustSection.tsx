import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FallbackImage } from "./FallbackImage";

const ease = [0.22, 1, 0.36, 1] as const;

const trustPoints = [
  "Transparent & Honest Approach",
  "Expert Market Knowledge",
  "Customer-First Philosophy",
  "Seamless & Stress-Free Process",
];

const trustImage = "/images/trust-section.png";

export function TrustSection() {
  return (
    <section className="bg-base py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 lg:items-center">
          {/* Image with 3D Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease }}
            className="relative order-2 lg:order-1"
            style={{ perspective: "1200px" }}
          >
            {/* 3D Frame Outer */}
            <motion.div
              whileHover={{ rotateX: 2, rotateY: -2 }}
              transition={{ duration: 0.4 }}
              className="relative"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(0deg) rotateY(0deg)",
              }}
            >
              {/* Frame Border - Front */}
              <div className="absolute inset-0 border-8 border-stone-400 pointer-events-none z-10" />

              {/* Frame Border - Shadow depth */}
              <div className="absolute -inset-3 border-2 border-stone-200 pointer-events-none" />

              {/* Inner Border */}
              <div className="relative overflow-hidden border-4 border-stone-300">
                <FallbackImage
                  src={trustImage}
                  alt="Real estate professional"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-smooth hover:scale-105"
                />
              </div>

              {/* Right Shadow Edge (3D depth) */}
              <div
                className="absolute top-0 -right-3 w-3 h-full bg-gradient-to-r from-stone-300 to-stone-400 pointer-events-none"
                style={{
                  transform: "skewY(-2deg)",
                  boxShadow: "2px 4px 12px rgba(0,0,0,0.2)",
                }}
              />

              {/* Bottom Shadow Edge (3D depth) */}
              <div
                className="absolute -bottom-3 left-0 w-full h-3 bg-gradient-to-b from-stone-300 to-stone-400 pointer-events-none"
                style={{
                  transform: "skewX(-2deg)",
                  boxShadow: "4px 4px 12px rgba(0,0,0,0.15)",
                }}
              />
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              whileHover={{ y: -4, transition: { duration: 0.3, ease } }}
              className="absolute -bottom-6 right-6 w-56 border-l-2 border-accent bg-surface p-6 shadow-[0_20px_45px_-20px_rgba(30,27,24,0.3)] sm:block"
            >
              <p className="text-sm font-medium text-accent">Trusted By</p>
              <p className="mt-2 text-sm text-stone">500+ Happy Homeowners & Investors</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, ease }}
              className="section-label flex items-center gap-3 font-medium uppercase tracking-[0.2em] text-accent"
            >
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Our Commitment
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="mt-4 max-w-md text-3xl leading-tight sm:text-4xl"
            >
              Your Trust. Your Dream. Our Commitment.
            </motion.h2>

            <div className="mt-6 max-w-md space-y-4 text-stone">
              {[
                "We understand how hard you work for your money and how important it is to make the right property decision. That's why we are committed to providing transparent, personalized, and seamless real estate solutions tailored to your needs.",
                "Whether you are buying, selling, or investing, our experienced team is here to guide you every step of the way. With strong market knowledge and a customer-first approach, we help you discover the right property at the best possible value.",
                "For us, real estate is not just about properties—it's about your dreams, your investment, and your happiness. We work with honesty and dedication to make your property journey smooth, secure, and stress-free.",
              ].map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.06, ease }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mt-8 space-y-3"
            >
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease }}
                  className="group flex items-start gap-3 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 12 }}
                    transition={{ duration: 0.3 }}
                    className="mt-0.5 flex-shrink-0"
                  >
                    <CheckCircle2 size={20} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
                  </motion.div>
                  <motion.span
                    className="text-sm text-ink transition-colors group-hover:text-accent"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {point}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
