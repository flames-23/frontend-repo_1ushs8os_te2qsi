import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Code2, Rocket, Sparkles, Workflow } from 'lucide-react'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs text-white/90 backdrop-blur">
      {children}
    </span>
  )
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-xs text-white/70">{label}</div>
    </div>
  )
}

export default function App() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-400 to-purple-600" />
              <span className="text-sm font-semibold tracking-tight">BlueForge Web</span>
            </a>
            <nav className="hidden gap-6 md:flex">
              <a href="#services" className="text-sm text-white/80 hover:text-white">Services</a>
              <a href="#work" className="text-sm text-white/80 hover:text-white">Work</a>
              <a href="#process" className="text-sm text-white/80 hover:text-white">Process</a>
              <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
            </nav>
            <a href="#contact" className="hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow md:inline-flex">
              Get a quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero with Spline 3D */}
      <section className="relative h-[90vh] w-full overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft gradient overlay: don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 flex flex-wrap gap-2">
              <Pill>
                <Sparkles className="h-3.5 w-3.5" />
                Award‑winning websites
              </Pill>
              <Pill>
                <Rocket className="h-3.5 w-3.5" />
                Built for growth
              </Pill>
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              We design and develop websites that convert
            </h1>
            <p className="mt-4 max-w-xl text-white/80">
              A modern studio crafting fast, accessible, and scalable web experiences for startups and enterprises.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition-shadow">
                Start your project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
                View our work
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat value="120+" label="Projects shipped" />
              <Stat value="35%" label="Avg. conversion lift" />
              <Stat value="<1s" label="Core Web Vitals" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20">
        <div className="absolute inset-0 -z-0 opacity-30 blur-3xl [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
          <div className="mx-auto h-64 max-w-5xl bg-gradient-to-r from-blue-600/30 via-indigo-500/30 to-purple-600/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">What we do</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Full‑stack website development</h2>
            <p className="mt-3 text-white/70">From strategy to launch — tailored, fast, and accessible.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Code2 className="h-5 w-5" />, title: 'Custom Websites', desc: 'Next‑gen sites with React, headless CMS, and blazing performance.'
              },
              {
                icon: <Workflow className="h-5 w-5" />, title: 'Product UI', desc: 'Design systems and frontends that scale with your roadmap.'
              },
              {
                icon: <Rocket className="h-5 w-5" />, title: 'Growth & SEO', desc: 'Technical SEO, analytics, and experiments that move metrics.'
              },
            ].map((s) => (
              <div key={s.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  {s.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-blue-300 group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Selected work</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Recent projects</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Project {i}</h3>
                    <span className="text-xs text-white/60">Website</span>
                  </div>
                  <p className="mt-1 text-sm text-white/70">A high‑performance marketing site with rich interactions.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">How we work</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A clear, collaborative process</h2>
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Discovery', desc: 'Goals, users, and success metrics' },
              { step: '02', title: 'Design', desc: 'Wireframes, UI, and design system' },
              { step: '03', title: 'Build', desc: 'Frontend, backend, and integrations' },
              { step: '04', title: 'Launch', desc: 'QA, analytics, and hand‑off' },
            ].map((p) => (
              <li key={p.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-white/50">{p.step}</div>
                <div className="mt-1 text-lg font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pb-24 pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-semibold">Have a project in mind?</h3>
                <p className="mt-2 text-white/70">Tell us about your goals and we’ll craft a proposal in 24 hours.</p>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md">
                <div className="flex items-center gap-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your work email"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white placeholder-white/60 outline-none focus:border-blue-400"
                  />
                  <button className="h-12 whitespace-nowrap rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 text-sm font-semibold text-white shadow">
                    Request quote
                  </button>
                </div>
                <p className="mt-2 text-xs text-white/60">We’ll get back within one business day.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-600 via-cyan-400 to-purple-600" />
            <span className="text-sm text-white/70">© {new Date().getFullYear()} BlueForge Web</span>
          </div>
          <div className="text-xs text-white/60">Made with care — performant, accessible, and scalable.</div>
        </div>
      </footer>
    </div>
  )
}
