import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  image,
  category = "Web Development",
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col border-2 border-white bg-base-800 shadow-brutal-yellow transition-all duration-200 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_#FFE600] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
    >
      {/* Retro Window Header */}
      <div className="bg-white text-black px-3 py-1.5 flex items-center justify-between border-b-2 border-white font-mono text-xs font-bold">
        <span className="truncate uppercase tracking-wider">{category}</span>
        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          <span className="w-3 h-3 border border-black bg-neo-yellow flex items-center justify-center text-[8px] font-black">_</span>
          <span className="w-3 h-3 border border-black bg-white flex items-center justify-center text-[8px] font-black">□</span>
          <span className="w-3 h-3 border border-black bg-neo-pink flex items-center justify-center text-[8px] font-black text-white">×</span>
        </div>
      </div>

      {/* Banner / Visual Area */}
      <div className="relative h-40 w-full bg-base-900 border-b-2 border-white/60 p-4 flex flex-col justify-between overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-between bg-grid-pattern opacity-90">
            <div className="flex items-center justify-between text-muted font-mono text-[11px]">
              <span>SRC::PROJECT</span>
              <span className="text-neo-lime font-bold">EXEC_OK</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 border-2 border-white bg-black text-neo-yellow shadow-brutal-sm">
                <FaCode size={18} />
              </div>
              <div className="font-mono text-xs text-white truncate max-w-[200px]">
                &lt;{title.replace(/\s+/g, '')} /&gt;
              </div>
            </div>
            <div className="font-mono text-[10px] text-muted truncate">
              STACK: {tech.slice(0, 3).join(" • ")}
            </div>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-heading font-black text-lg text-white group-hover:text-neo-yellow transition-colors leading-tight">
              {title}
            </h3>
            <FaExternalLinkAlt size={12} className="text-neo-yellow mt-1 shrink-0" />
          </div>

          <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 font-body line-clamp-3">
            {description}
          </p>
        </div>

        <div>
          {/* Tech Tags: Brutalist stickers */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tech.map((item) => (
              <span
                key={item}
                className="text-[10px] font-mono font-bold px-2 py-0.5 border border-white/80 bg-black text-white"
              >
                #{item}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="w-full py-2 px-3 border-2 border-white bg-neo-yellow text-black font-mono font-black text-xs uppercase flex items-center justify-between shadow-brutal-sm group-hover:bg-white transition-colors">
            <span>[ BUKA PROJECT ]</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </a>
  );
}
