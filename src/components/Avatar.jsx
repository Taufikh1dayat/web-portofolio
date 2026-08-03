import { useState } from "react";

export default function Avatar({
  src = "/fotosaya.jpeg",
  alt = "M. Taufik Hidayat",
  name = "TH",
  width = 280,
  height = 340,
  className = "",
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative shrink-0 group cursor-pointer ${className}`}
      style={{ width: `${width}px`, maxWidth: "100%" }}
    >
      {/* Atmosphere Glow Behind Card */}
      <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-accent/30 via-amber-500/20 to-emerald-500/20 blur-xl opacity-75 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500" />

      {/* Main Portrait Frame Card */}
      <div className="relative rounded-[2rem] border border-base-600/60 bg-base-800/80 p-3 shadow-2xl backdrop-blur-xl group-hover:border-accent/50 group-hover:-translate-y-1.5 transition-all duration-500">
        
        {/* Inner Image Container with Fixed Aspect Ratio */}
        <div
          className="relative w-full rounded-[1.5rem] overflow-hidden bg-base-900 border border-base-600/40 flex items-center justify-center"
          style={{ height: `${height}px` }}
        >
          {src && !imgError ? (
            <img
              src={src}
              alt={alt}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-base-800 to-base-900 p-6 text-center">
              <span className="font-heading font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-accent to-amber-400 mb-2">
                {name}
              </span>
              <span className="text-xs text-muted font-medium">M. Taufik Hidayat</span>
            </div>
          )}

          {/* Gradient Overlay Shadow on Bottom of Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-base-900/80 via-transparent to-transparent opacity-80" />
        </div>

        {/* Floating Glassmorphism Badge */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-base-900/90 border border-accent/40 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-gray-200 shrink-0 group-hover:border-accent group-hover:scale-105 transition-all duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Frontend Developer</span>
        </div>
      </div>
    </div>
  );
}
