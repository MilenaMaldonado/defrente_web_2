import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ArrowLeft, ArrowRight } from "lucide-react"

// Update the projects array to reflect the actual projects
const projects = [
  {
    id: "01",
    title: "Residencia México",
    location: "Ciudad de México, México",
    category: "Residencial",
    year: "2023",
    area: "420 m²",
    client: "Privado",
    description:
      "Diseño contemporáneo que integra elementos de la arquitectura tradicional mexicana con un enfoque moderno y minimalista. El proyecto respeta la herencia cultural local mientras incorpora soluciones sostenibles y espacios abiertos que aprovechan la luz natural. Los materiales locales y las técnicas artesanales se combinan con tecnologías modernas para crear un hogar confortable y estéticamente impactante.",
    images: [
      "/placeholder.svg?height=1200&width=1600&text=México 1",
      "/placeholder.svg?height=800&width=1200&text=México 2",
      "/placeholder.svg?height=800&width=1200&text=México 3",
      "/placeholder.svg?height=800&width=1200&text=México 4",
    ],
  },
  {
    id: "02",
    title: "Villa Puerto Banús",
    location: "Marbella, España",
    category: "Residencial",
    year: "2022",
    area: "580 m²",
    client: "Privado",
    description:
      "Residencia de lujo con vistas al mar Mediterráneo, diseñada con líneas limpias y espacios abiertos que maximizan la luz natural. La villa incorpora amplias terrazas y áreas de estar exteriores que difuminan los límites entre el interior y el exterior. Los materiales de alta calidad y los acabados meticulosos reflejan la exclusividad de su ubicación en Puerto Banús.",
    images: [
      "/placeholder.svg?height=1200&width=1600&text=Puerto Banús 1",
      "/placeholder.svg?height=800&width=1200&text=Puerto Banús 2",
      "/placeholder.svg?height=800&width=1200&text=Puerto Banús 3",
      "/placeholder.svg?height=800&width=1200&text=Puerto Banús 4",
    ],
  },
  {
    id: "03",
    title: "Casa Mallorca",
    location: "Mallorca, España",
    category: "Residencial",
    year: "2023",
    area: "350 m²",
    client: "Privado",
    description:
      "Vivienda que fusiona la arquitectura mediterránea con elementos contemporáneos, creando espacios que dialogan con el entorno natural. El diseño aprovecha las vistas al mar y la topografía del terreno, integrando la piscina y las terrazas de manera orgánica. Los materiales tradicionales de la isla se reinterpretan con un lenguaje moderno y minimalista.",
    images: [
      "/placeholder.svg?height=1200&width=1600&text=Mallorca 1",
      "/placeholder.svg?height=800&width=1200&text=Mallorca 2",
      "/placeholder.svg?height=800&width=1200&text=Mallorca 3",
      "/placeholder.svg?height=800&width=1200&text=Mallorca 4",
    ],
  },
  {
    id: "04",
    title: "The Corner",
    location: "Barcelona, España",
    category: "Comercial",
    year: "2022",
    area: "180 m²",
    client: "The Corner Group",
    description:
      "Espacio comercial ubicado en una esquina emblemática, con un diseño que respeta la arquitectura original mientras incorpora elementos modernos. El proyecto recupera elementos históricos del edificio y los combina con una estética contemporánea que atrae la atención de los transeúntes. La iluminación y los materiales crean diferentes ambientes según el momento del día.",
    images: [
      "/placeholder.svg?height=1200&width=1600&text=Corner 1",
      "/placeholder.svg?height=800&width=1200&text=Corner 2",
      "/placeholder.svg?height=800&width=1200&text=Corner 3",
      "/placeholder.svg?height=800&width=1200&text=Corner 4",
    ],
  },
  {
    id: "05",
    title: "Oficinas Madrid",
    location: "Madrid, España",
    category: "Oficinas",
    year: "2023",
    area: "650 m²",
    client: "Corporativo Innovación",
    description:
      "Proyecto corporativo con un diseño que fomenta la colaboración y la creatividad, utilizando materiales nobles y una iluminación estudiada. Los espacios flexibles permiten diferentes configuraciones según las necesidades del momento, mientras que las áreas de descanso promueven el bienestar de los empleados. La sostenibilidad y la eficiencia energética son pilares fundamentales del proyecto.",
    images: [
      "/placeholder.svg?height=1200&width=1600&text=Madrid 1",
      "/placeholder.svg?height=800&width=1200&text=Madrid 2",
      "/placeholder.svg?height=800&width=1200&text=Madrid 3",
      "/placeholder.svg?height=800&width=1200&text=Madrid 4",
    ],
  },
  {
    id: "06",
    title: "Residencia Quito",
    location: "Quito, Ecuador",
    category: "Residencial",
    year: "2022",
    area: "380 m²",
    client: "Privado",
    description:
      "Vivienda de altura que aprovecha las vistas panorámicas de la ciudad, con un diseño que responde al clima y la cultura local. La orientación y los grandes ventanales capturan la luz natural y las impresionantes vistas de los Andes. Los espacios interiores fluyen naturalmente hacia terrazas estratégicamente ubicadas, creando una experiencia de vida integrada con el entorno.",
    images: [
      "/placeholder.svg?height=1200&width=1600&text=Quito 1",
      "/placeholder.svg?height=800&width=1200&text=Quito 2",
      "/placeholder.svg?height=800&width=1200&text=Quito 3",
      "/placeholder.svg?height=800&width=1200&text=Quito 4",
    ],
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Find the project by ID
  const project = projects.find((p) => p.id === params.id) || projects[0]

  // Find next and previous projects
  const currentIndex = projects.findIndex((p) => p.id === params.id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1]
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="DEFRENTE"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-10">
            <Link href="/#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Project Navigation */}
        <section className="py-8">
          <div className="container">
            <div className="flex justify-between items-center">
              <Link
                href="/portfolio"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Volver a portfolio
              </Link>

              <div className="flex gap-6">
                <Link
                  href={`/portfolio/${prevProject.id}`}
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Anterior
                </Link>
                <Link
                  href={`/portfolio/${nextProject.id}`}
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Siguiente
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Project Hero */}
        <section className="relative h-[80vh] overflow-hidden">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </section>

        {/* Project Info */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <span className="text-xs text-muted-foreground block mb-2">{project.id}</span>
                  <h1 className="text-3xl md:text-4xl font-medium mb-2">{project.title}</h1>
                  <p className="text-muted-foreground">{project.location}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm">Categoría</span>
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm">Año</span>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm">Superficie</span>
                    <span className="text-sm text-muted-foreground">{project.area}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm">Cliente</span>
                    <span className="text-sm text-muted-foreground">{project.client}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors"
                  >
                    Contactar para un proyecto similar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Imagen ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container">
            <h2 className="text-2xl font-medium mb-12">Otros proyectos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[prevProject, nextProject].map((relatedProject) => (
                <div key={relatedProject.id} className="group">
                  <Link href={`/portfolio/${relatedProject.id}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden mb-4">
                      <Image
                        src={relatedProject.images[0] || "/placeholder.svg"}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground">{relatedProject.id}</span>
                      <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{relatedProject.location}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="DEFRENTE"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-muted-foreground max-w-xs">
                Estudio de arquitectura y diseño con enfoque minimalista y visualmente impactante.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Navegación</h3>
                <nav className="flex flex-col gap-2">
                  <Link
                    href="/#portfolio"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Servicios
                  </Link>
                  <Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contacto
                  </Link>
                </nav>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Contacto</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">+34 608 756 113</p>
                  <p className="text-sm text-muted-foreground">defrente.es@gmail.com</p>
                  <p className="text-sm text-muted-foreground">9:00 - 18:00</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Legal</h3>
                <nav className="flex flex-col gap-2">
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacidad
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Términos
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} DEFRENTE. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <Link
        href="https://wa.me/34608756113"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:bg-[#1EBE57] transition-colors z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="sr-only">WhatsApp</span>
      </Link>
    </div>
  )
}

