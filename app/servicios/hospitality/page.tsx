import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectGallery } from "../corporativo/project-gallery"
import { ServiceHeader } from "../corporativo/service-header"
import { hospitalityPhotoPath, hospitalityProjects } from "@/lib/hospitality-projects"

export const metadata: Metadata = {
  title: "Hoteles y hospitalidad | DEFRENTE",
  description: "Consultoría y diseño para hoteles, alojamientos turísticos y restaurantes, enfocados en la acogida, el bienestar y la atención al cliente.",
}

export default function HospitalityPage() {
  return (
    <div className="bg-[#2b101d] text-[#f0e7bd]">
      <ServiceHeader />
      <main>
        <section aria-labelledby="hospitality-title" className="relative isolate flex min-h-[36rem] items-end sm:min-h-[70svh]">
          <Image src="/servicios%20tarjetas/hospitaly.png" alt="" fill sizes="100vw" priority className="-z-20 object-cover" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#2b101d] via-[#2b101d]/65 to-[#2e2119]/60" />
          <div className="hero-shell w-full pb-12 pt-40 sm:pb-16">
            <Link href="/#services-carousel" className="mb-6 inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Volver a Servicios
            </Link>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#9bd8ef]">05 · Hospitality</p>
            <h1 id="hospitality-title" className="max-w-4xl font-[family-name:var(--font-title)] text-[clamp(3rem,8vw,7rem)] italic leading-[0.9]">
              Hoteles y hospitalidad
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
              Diseñamos hoteles, alojamientos turísticos y restaurantes enfocados en la acogida, el bienestar y la atención al cliente.
            </p>
          </div>
        </section>

        <section aria-labelledby="hospitality-approach" className="bg-[#f0e7bd] text-[#2b101d]">
          <div className="hero-shell grid gap-5 py-12 md:grid-cols-[1fr_2fr] md:gap-12 md:py-20">
            <h2 id="hospitality-approach" className="font-[family-name:var(--font-title)] text-5xl italic leading-none sm:text-6xl">
              Qué hacemos
            </h2>
            <div className="max-w-2xl space-y-4 text-base leading-relaxed">
              <p>
                Analizamos el recorrido del huésped, desde la llegada hasta el descanso, y cómo trabaja el equipo que lo atiende. Con ese diagnóstico diseñamos lobbies, recepciones, habitaciones y zonas comunes.
              </p>
              <p>
                Cuidamos la distribución, la iluminación, los materiales y el mobiliario para que cada espacio transmita la identidad del lugar, resulte cómodo y sea fácil de operar y mantener.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="hospitality-projects" className="hero-shell py-9 md:py-12">
          <h2 id="hospitality-projects" className="mb-8 font-[family-name:var(--font-title)] text-5xl italic leading-none text-[#9bd8ef] sm:text-6xl">
            Proyectos relacionados
          </h2>
          <div className="grid gap-5">
            {hospitalityProjects.map((project) => (
              <article key={project.name} className="grid min-w-0 bg-[#f0e7bd] text-[#2b101d] md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
                <ProjectGallery name={project.name} photos={project.photos.map(hospitalityPhotoPath)} />
                <div className="self-center px-5 py-5 lg:px-8">
                  <p className="mb-1 text-xs uppercase tracking-wider">{project.location} · {project.year} · {project.area} m²</p>
                  <h3 className="font-[family-name:var(--font-title)] text-3xl italic leading-none sm:text-4xl">{project.name}</h3>
                  <dl className="mt-3 text-sm leading-snug">
                    <dt className="text-xs font-semibold uppercase tracking-wider">Servicio brindado</dt>
                    <dd className="mt-0.5">{project.service}</dd>
                  </dl>
                  <p className="mt-2 text-sm leading-snug">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[#f0e7bd]/30 pt-6">
            <Link href="/#services-carousel" className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Volver a Servicios
            </Link>
            <Button asChild size="lg" className="rounded-none bg-[#f0e7bd] text-[#2b101d] hover:bg-[#fffaf3]">
              <Link href="/#contact">Agenda tu diagnóstico <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
