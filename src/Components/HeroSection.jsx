import { youssef } from "../data/youssef";
import CodeEditor from "./CodeEditor";

export default function HeroSection() {
  const links = youssef.links.map((link, index) => (
    <a
      key={index}
      href={link.link}
      className="text-gray-400 hover:text-blue-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      dangerouslySetInnerHTML={{ __html: link.svg }}
    ></a>
  ));
  return (
    <div
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-900 min-h-[100dvh] items-center mx-auto"
    >
      <div className="flex flex-col justify-center mt-12 md:mt-0">
        <div className="mb-5 flex items-center gap-2 font-mono text-[12px] tracking-[0.08em] text-sky-400">
          <span className="inline-block h-px w-6 bg-sky-400"></span>
          hello, world
        </div>
        <h3 className="text-5xl md:text-7xl font-bold text-white mb-5">{youssef.name}</h3>
        <h4 className="text-xl text-gray-400 font-bold mb-4">
          {youssef.job} -{" "}
          <span className="text-blue-400">{youssef.framework}</span>
        </h4>
        <p className="text-gray-400">{youssef.bio}</p>
        <div className="flex gap-3 mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition-all"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View projects
          </button>
          <a
            href="#contact"
            className="ml-4 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-all"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-4 mt-8">{links}</div>
      </div>
      <div>
        <CodeEditor />
      </div>
    </div>
  );
}
