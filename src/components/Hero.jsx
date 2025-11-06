import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-fuchsia-50" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-medium text-blue-600">Hello, I'm</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              A Creative Frontend Developer
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
              I build elegant, fast, and accessible web experiences using React, TypeScript, and Tailwind. I love crafting delightful interactions and solving complex UI problems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-200/50 via-indigo-200/40 to-fuchsia-200/40 blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-2xl bg-white p-1 shadow-xl ring-1 ring-black/5">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-gray-50 to-white grid place-items-center">
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center text-3xl font-bold">
                  YOU
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
