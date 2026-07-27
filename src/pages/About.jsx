import useInView from "../hooks/useInView";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git", level: 70 },
  { name: "Python", level: 65 },
];

export default function About() {
  const [titleRef, titleVis] = useInView();
  const [bioRef, bioVis] = useInView();
  const [skillsRef, skillsVis] = useInView();

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-24 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-24 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Title */}
        <div
          ref={titleRef}
          className={`transition-all duration-700 mb-16 ${
            titleVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3 font-heading">
            About
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Tentang Saya
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <div
            ref={bioRef}
            className={`md:col-span-3 transition-all duration-700 delay-200 ${
              bioVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-muted text-lg leading-relaxed mb-6">
              Saya adalah seorang frontend developer yang fokus membangun
              antarmuka website modern, responsif, dan mudah digunakan. Saya
              terbiasa menggunakan React JS dan Tailwind CSS dalam pengembangan
              web.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Saat ini saya aktif mengembangkan project-project web dan terus
              belajar teknologi baru untuk meningkatkan kualitas kode dan
              pengalaman pengguna.
            </p>
          </div>

          {/* Skills */}
          <div
            ref={skillsRef}
            className={`md:col-span-2 transition-all duration-700 delay-400 ${
              skillsVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="font-heading font-semibold text-lg mb-6 text-gray-200">
              Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-base-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-amber-400 transition-all duration-1000 ease-out"
                      style={{
                        width: skillsVis ? `${skill.level}%` : "0%",
                        transitionDelay: `${i * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
