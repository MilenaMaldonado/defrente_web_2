import { standPhotoPath, standProjectGroups } from "@/lib/stand-projects"
import type { Metadata } from "next"
import { ProjectGallery } from "../corporativo/project-gallery"
import { ServiceHeader } from "../corporativo/service-header"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Stands, pop-ups y corners | DEFRENTE",
  description: "Consultoría, diseño e implantación de stands, pop-ups y corners comerciales.",
}

export default function StandsPage() {
  return (
    <div className="bg-[#2b101d] text-[#f0e7bd]">
      <ServiceHeader />
      <main>
        <section className="relative isolate flex min-h-[36rem] items-end sm:min-h-[70svh]" aria-labelledby="stands-title">
          <Image src="/servicios%20tarjetas/Portada%20stands.png" alt="" fill sizes="100vw" priority className="-z-20 object-cover" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#2b101d] via-[#2b101d]/65 to-[#2e2119]/60" />
          <div className="hero-shell w-full pb-12 pt-40 sm:pb-16">
            <Link href="/#services-carousel" className="mb-6 inline-block text-sm hover:underline">← Volver a Servicios</Link>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#9bd8ef]">04 · Efímero</p>
            <h1 id="stands-title" className="max-w-4xl font-[family-name:var(--font-title)] text-[clamp(3rem,8vw,7rem)] italic leading-[0.9]">Stands, pop-ups y corners</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">Diseñamos espacios que dan visibilidad a tu marca en ferias, campañas y nuevas ubicaciones.</p>
          </div>
        </section>

        <section className="bg-[#f0e7bd] text-[#2b101d]" aria-labelledby="stands-approach">
          <div className="hero-shell grid gap-5 py-12 md:grid-cols-[1fr_2fr] md:gap-12 md:py-20">
            <h2 id="stands-approach" className="font-[family-name:var(--font-title)] text-5xl italic leading-none sm:text-6xl">Qué hacemos</h2>
            <p className="max-w-2xl leading-relaxed">Analizamos la ubicación, el recorrido y el producto para diseñar la distribución, el mobiliario y la exhibición de cada stand, pop-up o corner. También desarrollamos conceptos de tienda que pueden replicarse en nuevas aperturas.</p>
          </div>
        </section>

        <section className="hero-shell py-9 md:py-12" aria-labelledby="stands-projects">
          <h2 id="stands-projects" className="mb-8 font-[family-name:var(--font-title)] text-5xl italic leading-none text-[#9bd8ef] sm:text-6xl">Proyectos relacionados</h2>
          <div className="space-y-10">
            {standProjectGroups.map((group) => (
              <section key={group.title} aria-label={group.title}>
                <h3 className="mb-4 font-[family-name:var(--font-title)] text-3xl italic">{group.title}</h3>
                <div className="grid gap-5">
                  {group.projects.map((project) => (
                    <article key={project.name} className="grid min-w-0 bg-[#f0e7bd] text-[#2b101d] md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
                      <ProjectGallery name={project.name} photos={project.photos.map(standPhotoPath)} />
                      <div className="self-center px-5 py-5 lg:px-8">
                        <p className="mb-1 text-xs uppercase tracking-wider">{project.location} · {project.year} · {project.area} m²</p>
                        <h4 className="font-[family-name:var(--font-title)] text-3xl italic leading-none sm:text-4xl">{project.name}</h4>
                        <dl className="mt-3 text-sm leading-snug">
                          <dt className="text-xs font-semibold uppercase tracking-wider">Servicio brindado</dt>
                          <dd className="mt-0.5">{project.service}</dd>
                        </dl>
                        <p className="mt-2 text-sm leading-snug">{project.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[#f0e7bd]/30 pt-6">
            <Link href="/#services-carousel" className="text-sm hover:underline">← Volver a Servicios</Link>
            <Button asChild size="lg" className="rounded-none bg-[#f0e7bd] text-[#2b101d] hover:bg-[#fffaf3]">
              <Link href="/#contact">Agenda tu diagnóstico →</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
