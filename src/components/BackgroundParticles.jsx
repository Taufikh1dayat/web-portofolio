import { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Balanced color palette (soft glowing tones)
    const colors = [
      "rgba(245, 158, 11, ",   // Soft Amber
      "rgba(251, 191, 36, ",   // Light Amber
      "rgba(16, 185, 129, ",   // Soft Emerald
      "rgba(56, 189, 248, ",   // Soft Sky Blue
      "rgba(255, 255, 255, ",  // Muted White
    ];

    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.8 + 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.4 + 0.3,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          pulseSpeed: Math.random() * 0.015 + 0.005,
          angle: Math.random() * Math.PI * 2,
        });
      }
    }

    initParticles();

    function render() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Bounce at boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Pulse opacity smoothly
        p.opacity += Math.sin(p.angle) * 0.003;
        p.angle += p.pulseSpeed;
        const currentOpacity = Math.max(0.2, Math.min(0.7, p.opacity));

        // Draw glowing particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentOpacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `${p.color}0.6)`;
        ctx.fill();

        // Connect nearby particles with subtle glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineOpacity = (1 - dist / 130) * 0.20;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${lineOpacity})`;
            ctx.lineWidth = 0.65;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-5] pointer-events-none overflow-hidden">
      {/* Canvas Particles */}
      <canvas ref={canvasRef} className="w-full h-full opacity-70" />

      {/* Balanced Rotating Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/12 rounded-full blur-[140px] animate-spin-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/12 rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute top-2/3 left-1/3 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[130px] animate-pulse-slow" />
    </div>
  );
}
