import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { FallbackImage } from "./FallbackImage";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
  index: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

const statusStyles: Record<Project["status"], string> = {
  "Ready to Move": "bg-accent text-base",
  "Under Construction": "bg-ink text-base",
  Upcoming: "border border-ink/20 bg-base/95 text-ink",
};

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease } }}
      className="group relative flex flex-col overflow-hidden border border-line bg-surface shadow-[0_0_0_0_rgba(30,27,24,0)] transition-shadow duration-300 ease-smooth hover:shadow-[0_18px_40px_-24px_rgba(30,27,24,0.35)]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-300 ease-smooth group-hover:scale-x-100"
      />
      <div className="relative aspect-[4/3] overflow-hidden">
        <FallbackImage
          src={project.image}
          alt={`${project.name}, ${project.type} in ${project.location}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className={`absolute left-4 top-4 px-3 py-1 text-xs tracking-wide ${statusStyles[project.status]}`}>
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-ink">{project.name}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-stone">
          <MapPin size={14} aria-hidden="true" />
          {project.location} &middot; {project.type}
        </p>
        <p className="mt-4 flex-1 text-sm text-stone">{project.description}</p>

        <a
          href={`#contact`}
          className="mt-6 inline-flex items-center gap-1.5 self-start border-b border-ink pb-0.5 text-sm text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          View Project
          <ArrowUpRight
            size={15}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.article>
  );
}
