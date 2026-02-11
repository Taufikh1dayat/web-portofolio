// export default function About() {
//   const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Tailwind CSS",
//     "Git",
//     "Python",
//   ];

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950 pt-28">
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-white">
//         <h1 className="text-4xl font-bold mb-8">About Me</h1>

//         <p className="max-w-2xl text-gray-300 mb-12 leading-relaxed">
//           Saya adalah seorang frontend developer yang fokus membangun antarmuka
//           website modern, responsif, dan mudah digunakan. Saya terbiasa
//           menggunakan React JS dan Tailwind CSS dalam pengembangan web.
//         </p>

//         <h2 className="text-2xl font-semibold mb-6">Skills</h2>

//         <div className="flex flex-wrap gap-3">
//           {skills.map((skill) => (
//             <span
//               key={skill}
//               className="px-4 py-2 bg-white/10 rounded-full text-sm"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function About() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Git",
        "Python",
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950 pt-28">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-white">
                <h1 className="text-4xl font-bold mb-8">About Me</h1>

                <p className="max-w-2xl text-gray-300 mb-12 leading-relaxed">
                    Saya adalah seorang frontend developer yang fokus membangun antarmuka
                    website modern, responsif, dan mudah digunakan. Saya terbiasa
                    menggunakan React JS dan Tailwind CSS dalam pengembangan web.
                </p>

                <h2 className="text-2xl font-semibold mb-6">Skills</h2>

                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 bg-white/10 rounded-full text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
