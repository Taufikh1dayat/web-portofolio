import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useInView from "../hooks/useInView";

const contacts = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "dayattaufik078@gmail.com",
    href: "mailto:dayattaufik078@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Taufikh1dayat",
    href: "https://github.com/Taufikh1dayat",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "M. Taufik Hidayat",
    href: "https://linkedin.com/in/m-taufik-hidayat-051541240",
  },
];

export default function Contact() {
  const [titleRef, titleVis] = useInView();
  const [cardsRef, cardsVis] = useInView();

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px]" />
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
          className={`transition-all duration-700 mb-12 ${
            titleVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3 font-heading">
            Contact
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Hubungi Saya
          </h2>
          <p className="text-muted mt-4 max-w-xl">
            Tertarik bekerja sama atau ingin berdiskusi? Silakan hubungi saya
            melalui salah satu platform di bawah ini.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className={`grid sm:grid-cols-3 gap-5 transition-all duration-700 delay-200 ${
            cardsVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-col items-center gap-4 p-8 rounded-xl border border-base-600/50 bg-base-800/50 hover:bg-base-700/60 hover:border-accent/40 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                  <Icon size={24} />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted mb-1">{item.label}</p>
                  <p className="text-gray-200 font-medium text-sm">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
