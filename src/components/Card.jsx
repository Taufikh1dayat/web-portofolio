export default function ProjectCard({
  title,
  description,
  tech,
  link,
  techColors = {},
}) {
  // Generate deterministic gradient from title for card header
  const gradients = [
    "from-accent/20 to-amber-600/10",
    "from-sky-500/20 to-blue-600/10",
    "from-emerald-500/20 to-teal-600/10",
    "from-purple-500/20 to-pink-600/10",
    "from-orange-500/20 to-red-600/10",
    "from-cyan-500/20 to-blue-600/10",
  ];
  const gradIdx =
    title.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    gradients.length;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-base-600/50 bg-base-800/40 hover:bg-base-700/50 hover:border-accent/30 transition-all duration-300 overflow-hidden"
    >
      {/* Top bar */}
      <div
        className={`h-2 bg-gradient-to-r ${gradients[gradIdx]} rounded-t-xl`}
      />

      <div className="p-6">
        {/* Title */}
        <h3 className="font-heading font-semibold text-lg text-gray-100 group-hover:text-accent transition-colors duration-200 mb-3">
          {title}
        </h3>

        {/* Desc */}
        <p className="text-muted text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item) => {
            const grad = techColors[item] || "from-gray-600 to-gray-700";
            return (
              <span
                key={item}
                className={`text-[11px] font-medium px-2.5 py-1 rounded-full bg-gradient-to-r ${grad} text-white/90`}
              >
                {item}
              </span>
            );
          })}
        </div>

        {/* Arrow */}
        <div className="flex items-center gap-1 text-sm text-accent group-hover:gap-2 transition-all duration-200">
          <span className="font-medium">Lihat Project</span>
          <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
