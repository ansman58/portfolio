import Image from "next/image";
import profilePic from "@/assets/profile_pic.jpg";

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
    title: "Project One",
    description: "A short description — role, tech, and impact.",
    live: "#",
    source: "#",
  },
  {
    title: "Project Two",
    description: "A short description — role, tech, and impact.",
    live: "#",
    source: "#",
  },
  {
    title: "Project Three",
    description: "A short description — role, tech, and impact.",
    live: "#",
    source: "#",
  },
];

const blogs = [
  {
    title: "Building Accessible React Components",
    description: "A deep dive into ARIA patterns and keyboard navigation.",
    url: "#",
    date: "Nov 2024",
  },
  {
    title: "Why I Switched from Express to Adonis",
    description: "Lessons learned migrating a production API.",
    url: "#",
    date: "Oct 2024",
  },
  {
    title: "TypeScript Tips for Large Codebases",
    description: "Practical patterns that scale.",
    url: "#",
    date: "Sep 2024",
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
          Senior Software Developer — JavaScript, TypeScript, Python
        </p>
        <p className="mt-4 max-w-2xl text-gray-600">
          I build fast, accessible, and maintainable web apps. Currently focused
          on modern frontend frameworks and robust backend APIs.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="inline-block rounded border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white"
          >
            View Projects
          </a>
          <a
            href="mailto:youremail@example.com"
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
          I have over 4 years of professional experience building products using
          JavaScript, TypeScript, and Python. I work with React, Next.js, Astro,
          Solid, Express, Adonis, and Django. In my free time I enjoy reading,
          listening to music, and long-distance running.
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
      <section id="blog" className="py-16">
        <h2 className="mb-6 text-xl font-semibold">Blog</h2>
        <div className="space-y-4">
          {blogs.map((b) => (
            <a
              key={b.title}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded border border-black/10 p-5 hover:border-black/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium">{b.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{b.description}</p>
                </div>
                <span className="shrink-0 text-sm text-gray-500">{b.date}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <h2 className="mb-4 text-xl font-semibold">Contact</h2>
        <p className="text-gray-600">
          Want to discuss a role or project? Email me at{" "}
          <a
            href="mailto:youremail@example.com"
            className="underline hover:text-black"
          >
            youremail@example.com
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
