export default function BackgroundParticles() {
  // ponytail: static geometric grid replaces heavy canvas animation; zero GPU drain
  return (
    <div className="fixed inset-0 z-[-5] pointer-events-none overflow-hidden select-none">
      {/* Retro Dot Grid Matrix */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Retro Brutalist Corner Crosshairs & Tech Marks */}
      <div className="absolute top-6 left-6 font-mono text-xs text-white/20 select-none">
        +[00:00:00]
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs text-white/20 select-none">
        SYS.READY_
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-xs text-white/20 select-none">
        GRID::ACTIVE
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-xs text-white/20 select-none">
        PORTFOLIO.V2
      </div>

      {/* Stark Geometric Accent Shapes */}
      <div className="absolute top-1/4 -right-12 w-64 h-64 border-2 border-neo-yellow/20 rotate-12 pointer-events-none" />
      <div className="absolute bottom-1/3 -left-12 w-48 h-48 border-2 border-neo-cyan/20 -rotate-6 pointer-events-none" />
    </div>
  );
}
