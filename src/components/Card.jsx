import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  image,
  category = "Web Development",
  techColors = {},
}) {
  const gradients = [
    "from-amber-500/20 via-orange-500/10 to-transparent",
    "from-sky-500/20 via-blue-600/10 to-transparent",
    "from-emerald-500/20 via-teal-600/10 to-transparent",
    "from-purple-500/20 via-pink-600/10 to-transparent",
    "from-rose-500/20 via-red-600/10 to-transparent",
    "from-cyan-500/20 via-indigo-600/10 to-transparent",
  ];
  
  const gradIdx =
    title.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    gradients.length;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col rounded-2xl border border-base-600/50 bg-base-800/40 hover:bg-base-700/50 hover:border-accent/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
    >
      {/* Banner / Image Area */}
      <div className="relative h-44 w-full bg-base-900 overflow-hidden border-b border-base-600/40 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradients[gradIdx]} p-5 flex flex-col justify-between relative`}>
            {/* Window control dots mock */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block" />
              <span className="ml-2 text-[10px] text-muted font-mono tracking-wider uppercase opacity-70">
                {category}
              </span>
            </div>

            {/* Code / Tech visual prompt */}
            <div className="my-auto flex items-center gap-3">
              <div className="p-3 rounded-xl bg-base-800/80 border border-base-600/50 text-accent group-hover:scale-110 transition-transform">
                <FaCode size={22} />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-300 block">
                  &lt;{title.replace(/\s+/g, '')} /&gt;
                </span>
                <span className="text-[11px] text-muted font-mono">
                  {tech.slice(0, 3).join(" • ")}
                </span>
              </div>
            </div>

            {/* Subtle glow */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-xl pointer-events-none" />
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Header & Title */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-heading font-semibold text-lg text-gray-100 group-hover:text-accent transition-colors duration-200">
              {title}
            </h3>
            <FaExternalLinkAlt size={13} className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
          </div>

          {/* Description */}
          <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>
        </div>

        <div>
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tech.map((item) => {
              const grad = techColors[item] || "from-gray-600 to-gray-700";
              return (
                <span
                  key={item}
                  className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r ${grad} text-white/90 shadow-sm`}
                >
                  {item}
                </span>
              );
            })}
          </div>

          {/* Link button */}
          <div className="flex items-center gap-1.5 text-xs text-accent group-hover:gap-2 font-medium transition-all duration-200 pt-2 border-t border-base-600/30">
            <span>Buka Project</span>
            <span className="text-sm leading-none transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
