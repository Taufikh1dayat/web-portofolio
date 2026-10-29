# M. Taufik Hidayat — Personal Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Status-Active-22c55e?style=for-the-badge" alt="Status" />
</p>

Website portofolio personal yang dibangun menggunakan **React 19**, **Vite**, dan **Tailwind CSS**. Didesain dengan estetika **Neo-Brutalism** — kontras tinggi, border tebal, shadow solid, dan tipografi berat — responsif di semua ukuran layar.

**Live Demo**: [web-portofolio-two-rouge.vercel.app](https://web-portofolio-two-rouge.vercel.app/)

---

## Fitur Utama

- **Neo-Brutalism Design System**: Palet warna hitam pekat dengan aksen Neo-Yellow (`#FFE600`) dan Neo-Lime, border 2px solid white, dan shadow solid berlapis.
- **Filter Kategori Proyek**: Penyaring proyek interaktif (Semua, Web Application, Data Mining, AI & Desktop, Computer Vision, Frontend).
- **Skill Bar Animasi**: Visualisasi skill dengan progress bar yang dianimasikan saat masuk viewport via IntersectionObserver.
- **Sertifikasi & Kredensial**: Tampilan kartu sertifikat resmi Dicoding dengan akses PDF dan tautan verifikasi langsung.
- **Interactive Contact Form**: Form kontak dengan penanganan status pengiriman dan akses cepat ke email & sosial media.
- **Scroll-To-Top Button**: Tombol floating untuk kemudahan navigasi halaman.
- **100% Responsif**: Tampilan optimal di Desktop, Tablet, dan Mobile.

---

## Teknologi & Tools

| Kategori | Teknologi |
| :--- | :--- |
| **Framework Utama** | [React 19.2](https://react.dev/) |
| **Build Tool** | [Vite 7.2](https://vite.dev/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Styling** | [Tailwind CSS v3.4](https://tailwindcss.com/), PostCSS, Autoprefixer |
| **Icons** | [React Icons v5](https://react-icons.github.io/react-icons/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## Panduan Memulai

### 1. Clone Repository
```bash
git clone https://github.com/Taufikh1dayat/web-portofolio.git
cd web-portofolio/portfolio-react
```

### 2. Install Dependensi
```bash
npm install
```

### 3. Jalankan Server Lokal
```bash
npm run dev
```
Buka browser dan akses `http://localhost:5173`.

### 4. Build untuk Produksi
```bash
npm run build
```

---

## Struktur Direktori

```text
portfolio-react/
├── public/
│   └── fotosaya.jpeg                  # Foto Profil
├── src/
│   ├── components/
│   │   ├── Avatar.jsx                 # Kartu Profil
│   │   ├── BackgroundParticles.jsx    # Latar Belakang Canvas
│   │   ├── Card.jsx                   # Kartu Proyek
│   │   ├── Footer.jsx                 # Footer & Social Links
│   │   ├── NavbarRoot.jsx             # Navigasi Responsif
│   │   ├── ScrollToTop.jsx            # Tombol Scroll ke Atas
│   │   └── ScrollToTopOnNavigate.jsx  # Reset Scroll saat Navigasi
│   ├── hooks/
│   │   └── useInView.js               # Custom Hook IntersectionObserver
│   ├── pages/
│   │   ├── Home.jsx                   # Halaman Utama (Hero Section)
│   │   ├── About.jsx                  # Halaman Profile, Skill & Sertifikasi
│   │   ├── Projects.jsx               # Halaman Galeri Proyek & Filter
│   │   └── Contact.jsx                # Halaman Form Kontak
│   ├── App.jsx                        # Konfigurasi Rute Global
│   ├── index.css                      # Custom Styling & Base Layer
│   └── main.jsx                       # Entry Point React
├── tailwind.config.js                 # Konfigurasi Tema & Design Token
├── vite.config.js                     # Konfigurasi Vite
└── package.json                       # Dependensi Proyek
```

---

## Kontak

- **Nama**: M. Taufik Hidayat
- **Email**: [dayattaufik078@gmail.com](mailto:dayattaufik078@gmail.com)
- **GitHub**: [@Taufikh1dayat](https://github.com/Taufikh1dayat)
- **LinkedIn**: [M. Taufik Hidayat](https://linkedin.com/in/m-taufik-hidayat-051541240)

---

<p align="center">Built by <b>M. Taufik Hidayat</b></p>
