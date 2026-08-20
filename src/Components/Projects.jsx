import { youssef } from "../data/youssef";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  const projects = youssef.projects;

  const cards = projects.map((project) => (
    <ProjectCard
      key={project.id}
      img={project.img}
      title={project.title}
      description={project.description}
      techs={project.techs}
      demo={project.demo}
      github={project.github}
    />
  ));

  return (
    <div id="projects" className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto text-white p-6">
        <div className="mb-5 flex items-center gap-2 font-mono text-[12px] tracking-[0.08em] text-sky-400">
          <span className="inline-block h-px w-6 bg-sky-400"></span>
          {`<projects />`}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards}
        </div>
      </div>
    </div>
  );
}
