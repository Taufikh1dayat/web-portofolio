import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
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
  const [contentRef, contentVis] = useInView();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

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
            Tertarik bekerja sama atau ingin berdiskusi mengenai proyek web? Silakan hubungi saya melalui formulir di bawah atau via media sosial.
          </p>
        </div>

        {/* Content Grid */}
        <div
          ref={contentRef}
          className={`grid lg:grid-cols-12 gap-8 items-start transition-all duration-700 delay-200 ${
            contentVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-heading font-semibold text-gray-100 mb-4">
              Informasi Kontak
            </h3>
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 p-5 rounded-xl border border-base-600/50 bg-base-800/50 hover:bg-base-700/60 hover:border-accent/40 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-0.5">{item.label}</p>
                    <p className="text-gray-200 font-medium text-sm group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-base-800/40 border border-base-600/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-xl font-heading font-semibold text-gray-100 mb-6">
              Kirim Pesan
            </h3>

            {status === "sent" ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <FaCheckCircle size={40} className="mx-auto text-emerald-400 animate-bounce" />
                <h4 className="font-heading font-semibold text-lg text-emerald-300">
                  Pesan Terkirim!
                </h4>
                <p className="text-muted text-sm max-w-sm mx-auto">
                  Terima kasih telah menghubungi. Saya akan segera membalas pesan Anda secepatnya.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Nama Lengkap <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 rounded-xl bg-base-900/80 border border-base-600/60 text-gray-100 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-base-900/80 border border-base-600/60 text-gray-100 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subjek/Tujuan pesan"
                    className="w-full px-4 py-3 rounded-xl bg-base-900/80 border border-base-600/60 text-gray-100 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Pesan <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pesan atau penawaran kerja sama..."
                    className="w-full px-4 py-3 rounded-xl bg-base-900/80 border border-base-600/60 text-gray-100 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 px-6 rounded-xl bg-accent text-base-900 font-semibold flex items-center justify-center gap-2 hover:bg-accent-light transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-base-900 border-t-transparent rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
