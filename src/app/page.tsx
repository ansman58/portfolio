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
    title: "Chops by Nefo",
    description:
      "Food ordering and delivery platform — Next.js, TypeScript, React.",
    live: "https://chopsbynefo.javanslem.dev",
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
            I help individual businesses, startups, and companies build robust and
            scalable web applications. With over 5 years of experience, I
            specialize in transforming ideas into reality using modern
            technologies like JavaScript, TypeScript, and Python.
          </p>
          <p className="mt-3 max-w-2xl text-gray-600">
            Beyond writing code, I focus on delivering optimized user experiences
            that engage and retain users. I&apos;ve delivered production-ready
            applications serving thousands of users and generating thousands of
            dollars in monthly recurring revenue for project owners.
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
          <h2 className="mb-6 text-xl font-semibold">Projects</h2>
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
                    View Website
                  </a>
                  {/* ·{" "}
                  <a href={p.source} className="underline hover:text-gray-600">
                    Source
                  </a> */}
                </p>
              </article>
            ))}
          </div>
        </section>

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
            <a href="https://www.linkedin.com/in/nnakwe-anslem-534047189" className="underline hover:text-black">
              LinkedIn
            </a>{" "}
            or message me on{" "}
            <a href="https://wa.me/2348062670715" className="underline hover:text-black">
              WhatsApp
            </a>
          </p>
        </section>
      </main>
    </>
  );
}


