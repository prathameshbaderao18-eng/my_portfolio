
import { useState } from "react";
import { Play, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/projects";

const filters = [
  "ALL WORK",
  "REELS",
  "MOTION",
  "PROMOTIONAL"
];

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="project-card"
      onClick={() => onOpen(project)}
    >
      <div className="project-media">
        <video
          src={project.video}
          muted
          playsInline
          preload="metadata"
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          onMouseOver={(e) =>
            e.currentTarget.play().catch(() => {})
          }
          onMouseOut={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
        />

        <span className="play-indicator">
          <Play size={16} fill="currentColor" />
        </span>

        <span className="project-tag">
          {project.tag}
        </span>
      </div>

      <div className="project-meta">
        <div>
          <p className="eyebrow">
            {project.category}
          </p>
          <h3>{project.title}</h3>
        </div>

        <span className="project-number">
          {project.number}
          <ArrowUpRight size={17} />
        </span>
      </div>

      <p className="project-description">
        {project.description}
      </p>
    </motion.button>
  );
}

export default function VideoGallery() {
  const [activeFilter, setActiveFilter] =
    useState("ALL WORK");

  const [selected, setSelected] = useState(null);

  const filteredProjects =
    activeFilter === "ALL WORK"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <>
      <div className="portfolio-toolbar">
        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <span className="work-count">
          {String(filteredProjects.length).padStart(2, "0")}
          {" / "}
          {String(projects.length).padStart(2, "0")} PROJECTS
        </span>
      </div>

      <motion.div layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              onOpen={setSelected}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close video"
            >
              <X />
            </button>

            <motion.div
              className="modal-inner"
              initial={{ y: 20, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                key={selected.video}
                src={selected.video}
                controls
                autoPlay
                playsInline
                controlsList="nodownload noplaybackrate"
               disablePictureInPicture
               onContextMenu={(e) => e.preventDefault()}
              />

              <p className="eyebrow">
                {selected.category}
              </p>

              <h3>{selected.title}</h3>

              <p>{selected.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
