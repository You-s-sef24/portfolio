import { youssef } from "../data/youssef";

export default function CodeEditor() {
  return (
    <div className="overflow-hidden rounded-[10px] border border-slate-800 shadow-[0_32px_64px_rgba(0,0,0,0.5)]">
      {/* Top Window Bar */}
      <div className="flex items-center gap-2 border-b border-slate-800 bg-[#0d1117] px-4 py-[10px]">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />

        <span className="flex-1" />
        <span className="font-mono text-xs text-gray-600">developer.js</span>
        <span className="flex-1" />
      </div>

      {/* Editor Body */}
      <div className="overflow-x-auto bg-[#0d1117] py-5 font-mono text-[13px] leading-[1.9]">
        {/* Line 1 */}
        <div className="flex pr-6">
          <span className="min-w-12 shrink-0 select-none pr-4 text-right text-slate-700">
            1
          </span>
          <span className="text-white">
            <span className="text-purple-500">const</span>{" "}
            <span className="text-sky-400">developer</span> ={" "}
            <span className="text-yellow-400">{`{`}</span>
          </span>
        </div>

        {/* Line 2 */}
        <div className="flex pr-6">
          <span className="min-w-12 shrink-0 select-none pr-4 text-right text-slate-700">
            2
          </span>
          <span className="text-slate-400 pl-4">
            <span className="text-sky-400">name</span>:{" "}
            <span className="text-amber-300">"{youssef.name}"</span>,
          </span>
        </div>

        {/* Line 3 */}
        <div className="flex pr-6">
          <span className="min-w-12 shrink-0 select-none pr-4 text-right text-slate-700">
            3
          </span>
          <span className="text-slate-400 pl-4">
            <span className="text-sky-400">role</span>:{" "}
            <span className="text-amber-300">"{youssef.job}"</span>,
          </span>
        </div>

        {/* Line 4 */}
        <div className="flex pr-6">
          <span className="min-w-12 shrink-0 select-none pr-4 text-right text-slate-700">
            4
          </span>
          <span className="text-slate-400 pl-4">
            <span className="text-sky-400">openToWork</span>:{" "}
            <span className="text-orange-400">
              {String(youssef.openToWork)}
            </span>
            ,
          </span>
        </div>

        {/* Line 5 */}
        <div className="flex pr-6">
          <span className="min-w-12 shrink-0 select-none pr-4 text-right text-slate-700">
            5
          </span>
          <span className="text-slate-400 pl-4">
            <span className="text-sky-400">location</span>:{" "}
            <span className="text-amber-300">"{youssef.location}"</span>,
          </span>
        </div>

        {/* Line 6 */}
        <div className="flex pr-6">
          <span className="min-w-12 shrink-0 select-none pr-4 text-right text-slate-700">
            6
          </span>
          <span className="text-yellow-400">{`};`}</span>
        </div>

        {/* Line 7 */}
        <div className="flex pr-6">
          <span className="min-w-12 shrink-0 select-none pr-4 text-right text-slate-700">
            7
          </span>
          <span className="text-sky-400"></span>
        </div>

        {/* Line 8 */}
        <div className="flex pr-6">
          <span className="min-w-12 shrink-0 select-none pr-4 text-right text-slate-700">
            8
          </span>
          <span className="text-white">
            <span className="text-purple-500">export default</span> developer;
          </span>
        </div>

        {/* Line 9 (Cursor) */}
        <div className="flex pr-6">
          <span className="min-w-12 shrink-0 select-none pr-4 text-right text-slate-700">
            9
          </span>
          <span className="text-white">
            <span className="mt-1 inline-block h-[14px] w-[2px] animate-pulse bg-sky-400" />
          </span>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="flex items-center gap-4 border-t border-slate-800 bg-[#161b22] px-4 py-[5px]">
        <span className="font-mono text-[11px] text-violet-400">
          JavaScript
        </span>
        <span className="font-mono text-[11px] text-gray-600">UTF-8</span>
        <span className="flex-1" />
        <span className="font-mono text-[11px] text-gray-600">Ln 9, Col 1</span>
      </div>

      {/* Tech Stack Footer */}
      <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg border border-slate-800 bg-gray-900 px-4 py-3">
        <span className="mr-1 font-mono text-[11px] text-gray-600">stack:</span>
        {youssef.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-sky-400/20 bg-sky-400/10 px-2 py-0.5 font-mono text-[11px] text-sky-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
