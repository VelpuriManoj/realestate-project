import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

const ease = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  return (
    <section id="projects" className="bg-accent-tint py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, ease }}
              className="section-label flex items-center gap-3 font-medium uppercase tracking-[0.2em] text-accent"
            >
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Our Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="mt-4 text-3xl leading-tight sm:text-4xl"
            >
              Featured developments
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="max-w-sm text-stone"
          >
            A cross-section of what we're building across Hyderabad right now, from ready homes to upcoming plots.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
