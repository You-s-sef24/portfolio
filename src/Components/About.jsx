import { youssef } from "../data/youssef";

export default function About() {
  const languages = youssef.languages.map((language, index) => (
    <h3
      key={index}
      className="text-gray-300 font-medium text-base bg-slate-800/50 border border-slate-700/50 px-3 py-1.5 rounded-md text-center"
    >
      {language}
    </h3>
  ));

  const skills = youssef.skills.frontend.map((skill, index) => (
    <span
      key={index}
      className="text-xs font-mono font-medium text-sky-400 bg-sky-400/10 border border-sky-400/20 px-3 py-2 rounded-lg text-center hover:bg-sky-400/20 transition-colors"
    >
      {skill}
    </span>
  ));

  const tools = youssef.skills.tools.map((tool, index) => (
    <span
      key={index}
      className="text-xs font-mono font-medium text-purple-400 bg-purple-400/10 border border-purple-400/20 px-3 py-2 rounded-lg text-center hover:bg-purple-400/20 transition-colors"
    >
      {tool}
    </span>
  ));

  return (
    <div
      id="about"
      className="min-h-screen bg-gray-900 text-white p-6 py-20 mx-auto"
    >
      <div className="mb-5 flex items-center gap-2 font-mono text-[12px] tracking-[0.08em] text-sky-400">
        <span className="inline-block h-px w-6 bg-sky-400"></span>
        {`<about />`}
      </div>
      <div className="w-full mb-12 text-center">
        <div className="mb-3 flex items-center justify-center gap-2 font-mono text-[12px] tracking-[0.08em] text-sky-400"></div>
        <h2 className="text-4xl font-bold mb-4 tracking-tight">About Me</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col gap-6 md:col-span-1 h-full">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 mb-4 border-b border-slate-800 pb-2">
              Personal Background
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                Birthdate:{" "}
                <span className="text-white font-medium block mt-0.5">
                  {youssef.birthdate}
                </span>
              </p>
              <p className="text-gray-400">
                Nationality:{" "}
                <span className="text-white font-medium block mt-0.5">
                  {youssef.nationality}
                </span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 mb-4 border-b border-slate-800 pb-2">
              Education
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                University:{" "}
                <span className="text-white font-medium block mt-0.5">
                  {youssef.education.university}
                </span>
              </p>
              <p className="text-gray-400">
                Faculty:{" "}
                <span className="text-white font-medium block mt-0.5">
                  {youssef.education.faculty}
                </span>
              </p>
              <p className="text-gray-400">
                Degree:{" "}
                <span className="text-white font-medium block mt-0.5">
                  {youssef.education.degree} ({youssef.education.startYear} -{" "}
                  {youssef.education.expectedGraduation})
                </span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 mb-4 border-b border-slate-800 pb-2">
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-2">{languages}</div>
          </div>
        </div>

        <div className="md:col-span-2 bg-slate-900/60 border border-slate-800 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 mb-4 border-b border-slate-800 pb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>{" "}
              Core Expertise
            </h3>
            <div className="grid grid-cols-2 gap-2.5">{skills}</div>
          </div>

          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-purple-400 mb-4 border-b border-slate-800 pb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>{" "}
              Tools & Workflow
            </h3>
            <div className="grid grid-cols-2 gap-2.5">{tools}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
