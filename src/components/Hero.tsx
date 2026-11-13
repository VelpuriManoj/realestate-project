import { useRef, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { FallbackImage } from "./FallbackImage";

const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const shouldReduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const mouseX = useSpring(rawX, springConfig);
  const mouseY = useSpring(rawY, springConfig);

  const imageRotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const imageRotateY = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);
  const imageMoveX = useTransform(mouseX, [-0.5, 0.5], [-24, 24]);
  const markMoveX = useTransform(mouseX, [-0.5, 0.5], [-40, 40]);
  const markMoveY = useTransform(mouseY, [-0.5, 0.5], [-24, 24]);
  const contentRotateY = useTransform(mouseX, [-0.5, 0.5], [3, -3]);
  const contentMoveX = useTransform(mouseX, [-0.5, 0.5], [10, -10]);

  const handleMouseMove = (event: ReactMouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - rect.left) / rect.width - 0.5);
    rawY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen items-end overflow-hidden bg-ink [perspective:900px]"
    >
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease }}
        style={{ y: imageY, transformStyle: "preserve-3d" }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 20, ease: "linear" }}
          style={{ rotateX: imageRotateX, rotateY: imageRotateY, x: imageMoveX }}
          className="h-full w-full"
        >
          <FallbackImage src={heroImage} alt="A modern villa surrounded by landscaped gardens" className="h-full w-full scale-110 object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="absolute inset-0 bg-ink/10" />
      </motion.div>

      {/* Decorative floating mark */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -14, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        style={{ x: markMoveX, translateY: markMoveY }}
        className="absolute right-8 top-28 hidden h-24 w-24 rounded-full border border-base/25 sm:block lg:right-14"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity, rotateY: contentRotateY, x: contentMoveX }}
        className="container-x relative flex w-full flex-col gap-12 pb-20 pt-40 sm:pb-24 lg:flex-row lg:items-end lg:justify-between lg:pb-28"
      >
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="font-display text-[2.6rem] font-medium leading-[1.05] text-base sm:text-6xl lg:text-[4.2rem]"
          >
            Build your dream.
            <br />
            Invest in your future.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="mt-6 max-w-md text-base/relaxed text-base/80 sm:text-lg"
          >
            Discover thoughtfully planned spaces designed for comfortable living and long-term value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
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

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          className="hidden items-center gap-2 self-end pb-1 text-sm text-base/70 transition-colors hover:text-base lg:inline-flex"
        >
          Scroll to learn more
          <ArrowDownRight size={16} aria-hidden="true" />
        </motion.a>
      </motion.div>
    </section>
  );
}
