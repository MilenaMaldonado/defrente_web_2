import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectGallery } from "./project-gallery"
import { ServiceHeader } from "./service-header"

export const metadata: Metadata = {
  title: "Oficinas y espacios corporativos | DEFRENTE",
  description: "Consultoría y diseño de oficinas, sedes y áreas de atención para mejorar la operación y la experiencia del equipo.",
}

const projects = [
  {
    name: "Salón Urdesa",
    location: "Cumbayá, Ecuador",
    year: 2019,
    area: 64,
    folder: "/servicios paginas/corporativo/CUMBAYÁ",
    photos: ["OF 1.png", "OF 2.png", "OF 3 (2).png"],
    service: "Rediseño y ejecución de espacio corporativo.",
    description: "Diseñamos un espacio abierto de coworking y networking. La distribución flexible y el mobiliario favorecen el encuentro y la colaboración.",
  },
  {
    name: "Oficinas Grupo CEAS",
    location: "Quito, Ecuador",
    year: 2020,
    area: 180,
    folder: "/proyectos/corporativo/grupo-ceas",
    service: "Rediseño y ejecución de espacio corporativo.",
    description: "Organizamos un espacio diáfano en zonas de trabajo y atención. Las divisiones ligeras y la vegetación aportan privacidad sin perder amplitud ni luz.",
  },
  {
    name: "Coworking Grupo Empresarial",
    location: "Quito, Ecuador",
    year: 2021,
    area: 164,
    folder: "/proyectos/corporativo/coworking-grupo-empresarial",
    service: "Análisis de optimización y rentabilidad espacial, rediseño y ejecución de espacio corporativo.",
    description: "Reorganizamos los puestos de trabajo, las zonas colaborativas y las circulaciones para aprovechar mejor cada área y facilitar distintos usos.",
  },
  {
    name: "IKIGAI",
    location: "Quito, Ecuador",
    year: 2025,
    area: 78,
    folder: "/proyectos/corporativo/ikigai",
    service: "Diseño, rediseño y ejecución de espacio corporativo.",
    description: "Reorganizamos las áreas de trabajo y atención de Talento Humano para mejorar la privacidad, el confort y la funcionalidad del espacio.",
  },
  {
    name: "Artro",
    location: "Quito, Ecuador",
    year: 2021,
    area: 66,
    folder: "/proyectos/corporativo/artro",
    service: "Diseño, optimización y ejecución de espacio corporativo.",
    description: "Rediseñamos las áreas de descanso y bienestar del equipo con zonas recreativas y de pausa dentro del entorno de trabajo.",
  },
]

export default function CorporativoPage() {
  return (
    <div className="bg-[#2b101d] text-[#f0e7bd]">
      <ServiceHeader />
      <main>
        <section aria-labelledby="corporativo-title" className="relative isolate flex min-h-[36rem] items-end sm:min-h-[70svh]">
          <Image
            src="/servicios%20tarjetas/Portada%20Corporativo.png"
            alt=""
            fill
            sizes="100vw"
            priority
            className="-z-20 object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#2b101d] via-[#2b101d]/65 to-[#2e2119]/60" />
          <div className="hero-shell w-full pb-12 pt-40 sm:pb-16">
            <Link href="/#services-carousel" className="mb-6 inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Volver a Servicios
            </Link>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#9bd8ef]">02 · Corporativo</p>
            <h1 id="corporativo-title" className="max-w-4xl font-[family-name:var(--font-title)] text-[clamp(3rem,8vw,7rem)] italic leading-[0.9]">
              Oficinas y espacios corporativos
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
              Diseñamos oficinas, sedes y áreas de atención para mejorar la operación, la experiencia interna y el rendimiento del equipo.
            </p>
          </div>
        </section>

        <section aria-labelledby="corporativo-approach" className="bg-[#f0e7bd] text-[#2b101d]">
          <div className="hero-shell grid gap-5 py-12 md:grid-cols-[1fr_2fr] md:gap-12 md:py-20">
            <h2 id="corporativo-approach" className="font-[family-name:var(--font-title)] text-5xl italic leading-none sm:text-6xl">
              Qué hacemos
            </h2>
            <div className="max-w-2xl space-y-4 text-base leading-relaxed">
              <p>
                Analizamos cómo trabaja el equipo, cómo se mueve por la oficina y cómo se atiende a los visitantes. A partir de ese diagnóstico, reorganizamos puestos, salas de reunión, espacios colaborativos y recepciones.
              </p>
              <p>
                Ajustamos la distribución, las circulaciones y el mobiliario para favorecer la concentración, la colaboración y la privacidad donde hace falta. Así, cada zona responde a un uso concreto y aprovecha mejor el espacio disponible.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="corporativo-projects" className="hero-shell py-9 md:py-12">
          <h2 id="corporativo-projects" className="mb-8 font-[family-name:var(--font-title)] text-5xl italic leading-none text-[#9bd8ef] sm:text-6xl">
            Proyectos relacionados
          </h2>
          <div className="grid gap-5">
            {projects.map((project) => (
              <article key={project.name} className="grid min-w-0 bg-[#f0e7bd] text-[#2b101d] md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
                <ProjectGallery
                  name={project.name}
                  photos={(project.photos ?? ["1.webp", "2.webp", "3.webp"]).map((photo) => {
                    const path = `${project.folder}/${photo}`.split("/").map(encodeURIComponent).join("/")
                    return path
                  })}
                />
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
