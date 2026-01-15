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
    title: "Beauty Salon Website",
    description: "Modern salon booking platform with responsive design — Next.js, TypeScript, React.",
    live: process.env.NEXT_PUBLIC_BEAUTY_SALON_LIVE_URL!,
    source: process.env.NEXT_PUBLIC_BEAUTY_SALON_SOURCE_URL!,
  },
  {
    title: "Car Rental Platform",
    description: "Full-featured car rental service with checkout system — Next.js, TypeScript, Custom Components.",
    live: process.env.NEXT_PUBLIC_CAR_RENTAL_LIVE_URL!,
    source: process.env.NEXT_PUBLIC_CAR_RENTAL_SOURCE_URL!,
  },
  {
    title: "Consulting Website",
    description: "Professional consulting service landing page — Next.js, TypeScript, Modern UI.",
    live: process.env.NEXT_PUBLIC_CONSULTING_LIVE_URL!,
    source: process.env.NEXT_PUBLIC_CONSULTING_SOURCE_URL!,
  },
  {
    title: "Dental Clinic Website",
    description: "Healthcare website with appointment booking — Next.js, TypeScript, Responsive Design.",
    live: process.env.NEXT_PUBLIC_DENTAL_CLINIC_LIVE_URL!,
    source: process.env.NEXT_PUBLIC_DENTAL_CLINIC_SOURCE_URL!,
  },
  {
    title: "E-Commerce Platform",
    description: "Complete e-commerce solution with product catalog — Next.js, TypeScript, React.",
    live: process.env.NEXT_PUBLIC_ECOMMERCE_LIVE_URL!,
    source: process.env.NEXT_PUBLIC_ECOMMERCE_SOURCE_URL!,
  },
  {
    title: "Restaurant Website",
    description: "Restaurant showcase with menu and reservations — Next.js, TypeScript, Modern Design.",
    live: process.env.NEXT_PUBLIC_RESTAURANT_LIVE_URL!,
    source: process.env.NEXT_PUBLIC_RESTAURANT_SOURCE_URL!,
  },
];



export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="py-24">
        <div className="mb-8 h-32 w-32 overflow-hidden rounded-full bg-gray-100">
          <Image
            src={profilePic}
            alt="Anslem Nnakwe"
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Anslem Nnakwe
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Software Developer — JavaScript, TypeScript, Python
        </p>
        <p className="mt-4 max-w-2xl text-gray-600">
          I create digital experiences that are fast, accessible, and reliable.
          I&apos;m currently deep-diving into modern frontend tech and building
          strong backend systems.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="inline-block rounded border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white"
          >
            View Projects
          </a>
          <a
            href="mailto:javanslem@gmail.com"
            className="inline-block rounded border border-black/30 px-5 py-2 text-sm font-medium hover:border-black"
          >
            Contact
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <h2 className="mb-4 text-xl font-semibold">About</h2>
        <p className="max-w-2xl text-gray-600">
          I help individual businesses, startups, and companies build robust and scalable web applications. With over 4 years of experience, I specialize in transforming ideas into reality using modern technologies like JavaScript, TypeScript, and Python.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16">
        <h2 className="mb-4 text-xl font-semibold">Skills</h2>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-gray-600">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16">
        <h2 className="mb-6 text-xl font-semibold">Selected Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded border border-black/10 p-5"
            >
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.description}</p>
              <p className="mt-3 text-sm">
                <a href={p.live} className="underline hover:text-gray-600">
                  Live
                </a>{" "}
                ·{" "}
                <a href={p.source} className="underline hover:text-gray-600">
                  Source
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Blog */}
      {/* <section id="blog" className="py-16">
        <h2 className="mb-6 text-xl font-semibold">Blog</h2>
        <p className="text-gray-600">Coming Soon...</p>
      </section> */}

      {/* Contact */}
      <section id="contact" className="py-16">
        <h2 className="mb-4 text-xl font-semibold">Contact</h2>
        <p className="text-gray-600">
          Want to discuss a role or project? Email me at{" "}
          <a
            href="mailto:javanslem@gmail.com"
            className="underline hover:text-black"
          >
            javanslem@gmail.com
          </a>
          .
        </p>
        <p className="mt-2 text-gray-600">
          You can also connect on{" "}
          <a href="#" className="underline hover:text-black">
            LinkedIn
          </a>{" "}
          or view a downloadable resume.
        </p>
      </section>
    </main>
  );
}
