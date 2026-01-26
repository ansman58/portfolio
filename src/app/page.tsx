import Image from "next/image";
import profilePic from "@/assets/profile_pic.jpeg";

const skills = [
  "JavaScript / TypeScript",
  "React / Next.js / Astro / Solid",
  "Node.js / Express / Adonis",
  "Python / Django",
  "Testing, CI/CD, Deployment",
  "Accessibility & Performance",
];

const projects = [
  {
    title: "Lata.ng",
    description:
      "E-commerce marketplace connecting buyers and sellers with product management — Next.js, Node.js, Full-Stack.",
    live: "https://lata.ng",
    source: "#",
  },
  {
    title: "Beauty Salon Website",
    description:
      "Modern salon booking platform with responsive design — Next.js, TypeScript, React.",
    live: "https://beauty.javanslem.dev",
    source: "https://github.com/ansman58/beauty-salon",
  },
  {
    title: "Car Rental Platform",
    description:
      "Full-featured car rental service with checkout system — Next.js, TypeScript, Custom Components.",
    live: "https://carental.javanslem.dev",
    source: "https://github.com/ansman58/car-rental",
  },
  {
    title: "Consulting Website",
    description:
      "Professional consulting service landing page — Next.js, TypeScript, Modern UI.",
    live: "https://consulting.javanslem.dev",
    source: "https://github.com/ansman58/consulting-firm",
  },
  {
    title: "Dental Clinic Website",
    description:
      "Healthcare website with appointment booking — Next.js, TypeScript, Responsive Design.",
    live: "https://dental.javanslem.dev",
    source: "https://github.com/ansman58/dental-clinic",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Complete e-commerce solution with product catalog — Next.js, TypeScript, React.",
    live: "https://ecommerce.javanslem.dev",
    source: "https://github.com/ansman58/ecommerce-site",
  },
  {
    title: "PropertyPro SEC",
    description:
      "Real estate platform connecting buyers to landlords, enabling property uploads — Next.js, Node.js, Full-Stack.",
    live: "https://propertyprosec.com/",
    source: "#",
  },
  {
    title: "Restaurant Website",
    description:
      "Restaurant showcase with menu and reservations — Next.js, TypeScript, Modern Design.",
    live: "https://restaurant.javanslem.dev",
    source: "https://github.com/ansman58/restaurant",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anslem Nnakwe",
    url: "https://javanslem.dev",
    jobTitle: "Senior Software Developer & Web Designer",
    sameAs: [
      "https://github.com/ansman58",
      "https://www.linkedin.com/in/nnakwe-anslem-534047189",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "UI/UX Design",
      "Web Development",
    ],
    description: "Senior Software Developer and Designer with 5+ years of experience in building high-performance web applications.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section id="about" className="py-24">
          <div className="mb-8 h-32 w-32 overflow-hidden rounded-full bg-gray-100 shadow-xl border-4 border-white">
            <Image
              src={profilePic}
              alt="Anslem Nnakwe - Senior Web Developer"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Senior Software Developer & <span className="text-gray-500">UI/UX Designer</span>
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            I’m Anslem Nnakwe, better known as <span className="font-semibold">Javanslem</span>. 
            I build robust, scalable, and high-performance web applications.
          </p>
          <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">
            With over <span className="font-medium text-black">5 years of experience</span>, 
            I specialize in transforming complex ideas into pixel-perfect reality using 
            modern technologies like <span className="font-medium text-black">React, Next.js, TypeScript, and Python</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-block rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Explore My Projects
            </a>
            <a
              href="mailto:javanslem@gmail.com"
              className="inline-block rounded-full border border-black px-8 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 border-t border-black/5">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">Core Competencies</h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 text-gray-600 text-sm">
            {skills.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-black"></span>
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 border-t border-black/5">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">Selected Work</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="text-lg font-bold group-hover:text-gray-600 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600 flex-grow leading-relaxed">{p.description}</p>
                <div className="mt-6 flex items-center gap-4 text-sm font-medium">
                  <a href={p.live} className="text-black underline underline-offset-4 hover:decoration-2 transition-all">
                    Live Demo
                  </a>
                  <a href={p.source} className="text-gray-500 hover:text-black transition-colors">
                    Source Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 border-t border-black/5 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Let’s Build Something Exceptional</h2>
          <p className="mx-auto max-w-xl text-gray-600 leading-relaxed text-lg">
            Whether you’re a startup or an established company, I’m ready to bring your next web project to life.
          </p>
          <div className="mt-10">
            <a
              href="mailto:javanslem@gmail.com"
              className="inline-block text-2xl font-bold underline underline-offset-8 hover:text-gray-600 transition-colors"
            >
              javanslem@gmail.com
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-8 text-gray-500 font-medium">
            <a href="https://www.linkedin.com/in/nnakwe-anslem-534047189" className="hover:text-black transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/ansman58" className="hover:text-black transition-colors">
              GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  );
}


