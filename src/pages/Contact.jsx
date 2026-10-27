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
    // ponytail: auto-dispatch mailto so messages reach mailbox; upgrade to backend API later
    const mailtoUri = `mailto:dayattaufik078@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact dari ${formData.name}`
    )}&body=${encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    setTimeout(() => {
      setStatus("sent");
      window.location.href = mailtoUri;
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    }, 600);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Title */}
        <div
          ref={titleRef}
          className={`transition-all duration-500 mb-10 ${
            titleVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-block px-2.5 py-0.5 border border-white/60 bg-black text-neo-yellow font-mono text-xs font-bold uppercase tracking-wider mb-2">
            // COMM_CHANNEL::OPEN
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white">
            HUBUNGI SAYA
          </h2>
          <p className="text-muted mt-2 font-mono text-xs sm:text-sm max-w-xl">
            Tertarik bekerja sama atau ingin berdiskusi mengenai proyek web? Silakan kirim pesan langsung.
          </p>
        </div>

        {/* Content Grid */}
        <div
          ref={contentRef}
          className={`grid lg:grid-cols-12 gap-8 items-start transition-all duration-500 delay-100 ${
            contentVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white text-black px-3 py-1.5 border-2 border-white font-mono text-xs font-black uppercase tracking-wider">
              [ DIRECT CONTACT CHANNELS ]
            </div>
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 border-2 border-white bg-base-800 shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal hover:bg-black transition-all"
                >
                  <div className="p-3 border-2 border-white bg-neo-yellow text-black shrink-0 group-hover:bg-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono font-bold uppercase text-neo-lime">
                      // {item.label}
                    </p>
                    <p className="text-white font-mono font-bold text-xs sm:text-sm group-hover:text-neo-yellow transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 border-2 border-white bg-base-800 shadow-brutal">
            <div className="bg-white text-black px-4 py-2 border-b-2 border-white flex items-center justify-between font-mono text-xs font-black">
              <span>// TRANSMIT_MESSAGE.EXE</span>
              <span className="text-neo-pink">[ACTIVE]</span>
            </div>

            <div className="p-6 sm:p-8">
              {status === "sent" ? (
                <div className="p-6 border-2 border-white bg-black text-center space-y-3 shadow-brutal-sm">
                  <FaCheckCircle size={36} className="mx-auto text-neo-lime" />
                  <h4 className="font-heading font-black text-lg text-white uppercase">
                    Pesan Berhasil Diproses!
                  </h4>
                  <p className="font-mono text-xs text-muted max-w-sm mx-auto">
                    Klien email dibuka otomatis untuk pengiriman final. Terima kasih!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name-input" className="block font-mono text-xs font-bold text-gray-200 mb-1">
                        NAMA LENGKAP <span className="text-neo-yellow">*</span>
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        className="w-full px-3.5 py-2.5 border-2 border-white bg-black text-white font-mono text-xs focus:outline-none focus:border-neo-yellow focus:shadow-brutal-yellow transition-all placeholder:text-muted/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="email-input" className="block font-mono text-xs font-bold text-gray-200 mb-1">
                        EMAIL <span className="text-neo-yellow">*</span>
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@email.com"
                        className="w-full px-3.5 py-2.5 border-2 border-white bg-black text-white font-mono text-xs focus:outline-none focus:border-neo-yellow focus:shadow-brutal-yellow transition-all placeholder:text-muted/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject-input" className="block font-mono text-xs font-bold text-gray-200 mb-1">
                      SUBJEK
                    </label>
                    <input
                      id="subject-input"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subjek/Tujuan pesan"
                      className="w-full px-3.5 py-2.5 border-2 border-white bg-black text-white font-mono text-xs focus:outline-none focus:border-neo-yellow focus:shadow-brutal-yellow transition-all placeholder:text-muted/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message-input" className="block font-mono text-xs font-bold text-gray-200 mb-1">
                      PESAN <span className="text-neo-yellow">*</span>
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tuliskan pesan atau penawaran kerja sama..."
                      className="w-full px-3.5 py-2.5 border-2 border-white bg-black text-white font-mono text-xs focus:outline-none focus:border-neo-yellow focus:shadow-brutal-yellow transition-all placeholder:text-muted/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 px-6 border-2 border-white bg-neo-yellow text-black font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <span>[ MENGIRIM DATA... ]</span>
                    ) : (
                      <>
                        <FaPaperPlane size={12} />
                        <span>[ KIRIM PESAN ]</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
