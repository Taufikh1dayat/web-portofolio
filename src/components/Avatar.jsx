export default function Avatar({ name = 'TH', size = 160 }) {
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
    >
      {/* Ring glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-amber-400/20 to-amber-600/30 animate-float blur-sm" />

      {/* Ring solid */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 160 160"
        fill="none"
      >
        <circle
          cx="80" cy="80" r="74"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-base-600"
        />
        <circle
          cx="80" cy="80" r="74"
          stroke="url(#avatarGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="465"
          strokeDashoffset="116"
          className="transition-all duration-700"
        />
        <defs>
          <linearGradient id="avatarGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </svg>

      {/* Initials circle */}
      <div
        className="absolute inset-3 rounded-full bg-base-800 flex items-center justify-center border border-base-600"
      >
        <span
          className="font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-amber-500"
          style={{ fontSize: size * 0.3 }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
