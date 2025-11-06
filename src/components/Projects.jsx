import { Code2, Globe, Monitor } from "lucide-react";

const projects = [
  {
    title: "SaaS Dashboard",
    description:
      "A responsive analytics dashboard with charts, dark mode, and role-based access.",
    tags: ["React", "Tailwind", "Recharts"],
    icon: Monitor,
    link: "#",
  },
  {
    title: "E-commerce Storefront",
    description:
      "Modern storefront with product filters, cart, and checkout flow connected to an API.",
    tags: ["Vite", "React", "Stripe"],
    icon: Globe,
    link: "#",
  },
  {
    title: "Component Library",
    description:
      "A reusable UI component kit following accessible design patterns.",
    tags: ["Storybook", "Radix", "TypeScript"],
    icon: Code2,
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Featured Projects
          </h2>
          <a href="#contact" className="text-sm text-blue-600 hover:text-blue-700">
            Get in touch
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.title}
                href={p.link}
                className="group rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-950">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-gray-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
