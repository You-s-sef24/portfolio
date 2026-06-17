import { youssef } from "../data/youssef";

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
    <div
      id="projects"
      className="min-h-screen bg-gray-900 text-white p-6 mx-auto"
    >
      <div className="mb-5 flex items-center gap-2 font-mono text-[12px] tracking-[0.08em] text-sky-400">
        <span className="inline-block h-px w-6 bg-sky-400"></span>
        {`<projects />`}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards}
      </div>
    </div>
  );
}

export function ProjectCard({ img, title, description, techs, demo, github }) {
  return (
    <div className="rounded shadow-sm bg-slate-800/40 border border-slate-800 overflow-hidden scale-100 hover:scale-[1.01] transition-transform duration-300">
      <div className="flex items-center gap-2 border-b border-slate-800 bg-[#0d1117] px-4 py-[10px]">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="flex-1" />
        <span className="font-mono text-xs text-gray-500">{demo}</span>
        <span className="flex-1" />
      </div>

      <img src={img} alt={title} className="w-full h-auto object-contain" />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {(techs || []).map((tech, index) => (
            <span
              key={index}
              className="text-xs font-mono font-medium text-sky-400 bg-sky-400/10 border border-sky-400/20 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <hr className="border-slate-800" />

      <div className="flex justify-around p-3 bg-[#0d1117]/50">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1"
          title="GitHub Repository"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.29-.01-1.25-.02-2.27-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.66.25 2.89.12 3.19.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
          </svg>
          <span>Github</span>
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1"
          title="Live Demo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="20"
            height="20"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
}
