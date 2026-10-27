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
      className={`relative shrink-0 select-none ${className}`}
      style={{ width: `${width}px`, maxWidth: "100%" }}
    >
      {/* Neo-brutalist Window Card */}
      <div className="relative border-4 border-white bg-base-800 shadow-[8px_8px_0px_0px_#FFE600] transition-transform duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#FFE600]">
        {/* Retro Window Title Bar */}
        <div className="bg-white text-black px-3 py-1.5 flex items-center justify-between border-b-2 border-white font-mono text-[11px] font-bold">
          <span>ID::TAUFIK.JPG</span>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-black inline-block" />
            <span className="w-2.5 h-2.5 bg-black inline-block" />
          </div>
        </div>

        {/* Inner Image Container */}
        <div
          className="relative w-full bg-base-900 overflow-hidden flex items-center justify-center p-2"
          style={{ height: `${height}px` }}
        >
          {src && !imgError ? (
            <img
              src={src}
              alt={alt}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top border-2 border-white/60 grayscale hover:grayscale-0 transition-all duration-300"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-base-900 border-2 border-white/40 p-4 text-center">
              <span className="font-heading font-black text-6xl text-neo-yellow mb-2">
                {name}
              </span>
              <span className="text-xs font-mono text-white">M. Taufik Hidayat</span>
            </div>
          )}
        </div>

        {/* Retro Sticker Badge */}
        <div className="absolute -bottom-4 right-2 px-3 py-1 bg-neo-lime text-black border-2 border-black font-mono text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_#ffffff] rotate-[-3deg]">
          ⚡ FRONTEND DEV
        </div>
      </div>
    </div>
  );
}
