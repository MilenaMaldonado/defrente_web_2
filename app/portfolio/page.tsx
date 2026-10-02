"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ArrowRight, X } from "lucide-react"

// Estructura de proyectos con datos detallados para cada imagen
const projects = [
  {
    id: "puerto-banus",
    title: "",
    location: "",
    category: "Arquitectura comercial",
    description: "",
    images: [
      {
        url: "/comercial/madrid/4.webp",
        title: "Madrid, 80m2",
        year: "2025",
        description: "Proyecto diseño espacial y mobiliario modular. Integramos texturas, materiales cálidos creando un ambiente acogedor y sofisticado."
      },
      {
        url: "/comercial/quito/1.webp",
        title: "Quito, 65m2",
        year: "2022",
        description: "Proyecto diseño espacial y mobiliario infantil. Integramos colores, texturas, materiales didácticos creando un ambiente creativo e interactivo."
      },
      {
        url: "/comercial/quito1/1.webp",
        title: "Quito, 75m2",
        year: "2022",
        description: "Proyecto fundación, la intención era acoger en una cafetería mujeres soñadoras. Integramos espacios de colaboración y de estancia acogedores."
      },
      {
        url: "/comercial/1.1.webp",
        title: "Quito, 45m2",
        year: "2022",
        description: ""
      }
    ],
  },
  {
    id: "corner",
    title: "",
    location: "",
    category: "Corner y Pop Ups",
    description: "",
    images: [
      {
        url: "/corner_popup/mexico/2.3.webp",
        title: "México DF, 12m2",
        year: "2024",
        description: "Stand self service para marca de joyería, mobiliario distribuido en cuatro alas de exhibición de producto aprovechando cada metro cuadrado."
      },
      {
        url: "/corner_popup/tulum/1.webp",
        title: "Tulum, 12m2",
        year: "2024",
        description: "Stand cerrado distribuido en cuatro vistas para mayor visibilidad de producto."
      },
      {
        url: "/corner_popup/mexico1/1.webp",
        title: "México DF, 12m2",
        year: "2025",
        description: "Stand abierto exposición de gafas, buscamos crear puntos altos para visibilidad de marca e introducir iluminación directa para realzar el producto."
      }
    ],
  },
  {
    id: "madrid",
    title: "",
    location: "",
    category: "Escaparatismo",
    description: "",
    images: [
      {
        url: "/escaparatismo/goya_madrid/1.webp",
        title: "Goya - Madrid, 8m2",
        year: "2024",
        description: "Diseño de escaparate de joyería, texturas calidad, iluminación adecuada, enfocándonos en el producto como prioridad."
      }
    ],
  },
  {
    id: "mexico",
    title: "",
    location: "",
    category: "Hotelería",
    description: "",
    images: [
      {
        url: "/hoteleria/arbnb_madrid/2.webp",
        title: "Madrid, 56m2",
        year: "2023",
        description: "El objetivo se basa en crear espacios de estancia familiares, causar en un usuario de paso sensación de hogar."
      },
      {
        url: "/hoteleria/hoteleria_madrid/5.webp",
        title: "Madrid, 160m2",
        year: "2023",
        description: "Habitaciones y espacios de estancia con ambiente forestal, vegetación que genera vida espacial y colores envolventes."
      }
    ],
  },
  {
    id: "quito",
    title: "",
    location: "",
    category: "Oficinas",
    description: "",
    images: [
      {
        url: "/oficinas/cumbaya/1.webp",
        title: "Cumbayá, 20m2",
        year: "2021",
        description: "¿Por qué no hacer de tu sala de reuniones también un espacio de descanso para tus trabajadores? Integramos tu imagen de marca con tus valores empresariales."
      },
      {
        url: "/oficinas/quito/1.webp",
        title: "Quito, 80m2",
        year: "2020",
        description: "Reforma de Despacho de abogados, integrando vida con la vegetación."
      }
    ],
  },
  {
    id: "mallorca",
    title: "",
    location: "",
    category: "Sector joyería",
    description: "",
    images: [
      {
        url: "/joyeria/mallorca/2.webp",
        title: "Mallorca, 35m2",
        year: "2025",
        description: "Creamos un ambiente acogedor en donde las joyas sean el punto en foco, alineándonos a la imagen de marca y al perfil del usuario."
      },
      {
        url: "/joyeria/mexicodf/4.webp",
        title: "México DF, 105m2",
        year: "2024",
        description: "Combinar espacios de compra con lugares de estancia no es complicado. En donde comprar se vuelve un relax para tu usuario."
      },
      {
        url: "/joyeria/puertobanus/1.webp",
        title: "Puerto Banús, 80m2",
        year: "2024",
        description: "La elegancia en este espacio es prioridad, este espacio impulsa al usuario a tener un recorrido de compra adecuado."
      }
    ],
  },
]
//gi
export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("Todos")
  const [selectedImage, setSelectedImage] = useState<{ 
    projectId: string; 
    image: { 
      url: string; 
      title: string; 
      year: string; 
      description: string; 
    } 
  } | null>(null)

  // Filter projects based on selected category
  const filteredProjects =
    activeFilter === "Todos" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="flex min-h-screen flex-col bg-white" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
      <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/logocolor.png"
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
        {/* Portfolio Header */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Volver a inicio
                </Link>
                <h1 className="text-4xl md:text-5xl font-normal text-[#F7941D]">Portfolio</h1>
                <div className="h-1 w-20 bg-[#F7941D] mt-2 mb-6"></div>
              </div>
            </div>

            {/* Filtros de categoría - opcional */}
            <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
              <button
                className={`text-sm whitespace-nowrap ${
                  activeFilter === "Todos" ? "text-primary font-medium" : "text-muted-foreground"
                }`}
                onClick={() => setActiveFilter("Todos")}
              >
                Todos
              </button>
              {[...new Set(projects.map(p => p.category))].map(category => (
                <button
                  key={category}
                  className={`text-sm whitespace-nowrap ${
                    activeFilter === category ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid - Minimalist Version */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                  {/* Header del proyecto */}
                  <div className="p-6 border-b">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{project.category}</span>
                      <span className="text-xs text-muted-foreground">{project.location}</span>
                    </div>
                    {project.title && <h2 className="text-xl font-medium text-[#F7941D]">{project.title}</h2>}
                  </div>

                  {/* Project Gallery Grid - aseguramos que ocupe todo el espacio disponible */}
                  <div className="grid grid-cols-2 gap-1 flex-grow">
                    {project.images.length === 1 ? (
                      // Si solo hay una imagen, ocupa todo el ancho
                      <div className="col-span-2 h-full flex flex-col">
                        <div
                          className="relative aspect-[4/3] overflow-hidden cursor-pointer group flex-grow"
                          onClick={() => setSelectedImage({ 
                            projectId: project.id, 
                            image: project.images[0] 
                          })}
                        >
                          <Image
                            src={project.images[0].url}
                            alt={`${project.title || project.category}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                            <span className="text-xs text-white">Ver más del proyecto</span>
                          </div>
                        </div>
                        
                        {/* CTA para escaparatismo - aseguramos que ocupe el espacio restante */}
                        {project.id === "madrid" && (
                          <div className="bg-gray-50 border border-gray-100 p-8 flex flex-col items-center justify-center text-center flex-grow">
                            <h3 className="text-lg font-medium mb-2 text-[#F7941D]">¿Buscas renovar tu escaparate?</h3>
                            <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
                              Diseñamos escaparates que destacan tu marca y maximizan el impacto visual para atraer más clientes.
                            </p>
                            <Link
                              href="https://wa.me/34608756113?text=Hola%20DEFRENTE,%20me%20interesa%20información%20sobre%20diseño%20de%20escaparates"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-[#034D61] text-white px-6 py-3 rounded-sm text-sm hover:bg-[#023a4a] transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                                <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                              </svg>
                              Solicitar presupuesto
                            </Link>
                          </div>
                        )}
                      </div>
                    ) : project.images.length === 2 ? (
                      // Diseño mejorado para exactamente 2 imágenes
                      <>
                        {/* Primera imagen - más grande, ocupa toda la primera fila */}
                        <div className="col-span-2">
                          <div
                            className="relative aspect-video overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedImage({ 
                              projectId: project.id, 
                              image: project.images[0] 
                            })}
                          >
                            <Image
                              src={project.images[0].url}
                              alt={`${project.title || project.category} - Imagen 1`}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                              <span className="text-xs text-white">Ver más del proyecto</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Segunda imagen - se extiende en toda la segunda fila */}
                        <div className="col-span-2 mt-1">
                          <div
                            className="relative aspect-video overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedImage({ 
                              projectId: project.id, 
                              image: project.images[1] 
                            })}
                          >
                            <Image
                              src={project.images[1].url}
                              alt={`${project.title || project.category} - Imagen 2`}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                              <span className="text-xs text-white">Ver más del proyecto</span>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      // Si hay más de 2 imágenes, mantén el diseño original pero ajustado para llenar el espacio
                      <>
                        {project.images.map((image, index) => (
                          <div
                            key={index}
                            className={`relative aspect-[4/3] overflow-hidden cursor-pointer group ${
                              index >= 2 ? "mt-1" : ""
                            }`}
                            onClick={() => setSelectedImage({ 
                              projectId: project.id, 
                              image: image 
                            })}
                          >
                            <Image
                              src={image.url}
                              alt={`${project.title || project.category} - Imagen ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                              <span className="text-xs text-white">Ver más del proyecto</span>
                            </div>
                          </div>
                        ))}
                        
                        {/* CTA especial solo para Corner y Pop Ups */}
                        {project.id === "corner" && project.images.length === 3 && (
                          <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 border border-gray-100 flex flex-col items-center justify-center p-6 text-center mt-1">
                            <div className="relative w-36 h-36 mb-4">
                              <Image
                                src="/logos/logocolor.png"
                                alt="DEFRENTE Logo"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 mb-4">¿Te interesa un proyecto similar?</p>
                            <Link
                              href="https://wa.me/34608756113"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-[#FF5722] text-white px-4 py-2 rounded-sm text-sm hover:bg-[#e64a19] transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                                <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                              </svg>
                              Contactar
                            </Link>
                          </div>
                        )}

                        {/* CTA especial para Sector joyería */}
                        {project.id === "mallorca" && project.images.length === 3 && (
                          <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 border border-gray-100 flex flex-col items-center justify-center p-6 text-center mt-1">
                            <h3 className="text-lg font-medium mb-2 text-[#F7941D]">Espacios de joyería</h3>
                            <p className="text-sm text-gray-600 mb-4 max-w-xs">Diseñamos espacios comerciales que destacan la elegancia y exclusividad de tus piezas de joyería.</p>
                            <Link
                              href="https://wa.me/34608756113?text=Hola%20DEFRENTE,%20me%20interesa%20información%20sobre%20diseño%20de%20espacios%20para%20joyería"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-[#4CA399] text-white px-4 py-2 rounded-sm text-sm hover:bg-[#3d827a] transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                                <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                              </svg>
                              Solicitar información
                            </Link>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Footer con descripción y enlace - solo si hay descripción */}
                  {project.description && (
                    <div className="p-6 space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de presentación - exactamente como en home */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="bg-[#f8f8f8] rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Columna de imagen */}
                <div className="relative h-[500px] lg:h-auto">
                  <Image
                    src="/daniela/1907.jpg"
                    alt="Daniela Acurio - DEFRENTE"
                    fill
                    className="object-contain object-center"
                  />
                </div>
                
                {/* Columna de texto */}
                <div className="bg-[#4CA399] text-white p-8 lg:p-12">
                  <div className="max-w-xl">
                    <p className="mb-4">
                      Daniela Acurio es el corazón detrás de DEFRENTE, un estudio que transforma espacios en experiencias
                      memorables. Su pasión por el diseño y su capacidad para conectar con las emociones de las personas la
                      han llevado a especializarse en crear entornos retail y oficinas que inspiran, conectan y generan
                      resultados.
                    </p>
                    <p className="mb-4">
                      Para DEFRENTE, el diseño no es solo estético; es una herramienta para contar historias y construir
                      relaciones.
                    </p>
                    <p className="mb-8">
                      Cada proyecto en DEFRENTE nuestro equipo lo aborda con creatividad, funcionalidad y una profunda
                      comprensión de las necesidades de cada cliente. Diseñamos espacios que optimicen la experiencia del
                      usuario, refuercen la identidad de marca y dejen una huella duradera.
                    </p>
                    <p className="font-semibold text-lg border-l-4 border-white pl-4 italic">
                      "Lo que hacemos tiene un propósito y una magia única: conectamos a las personas con los espacios, y
                      a los espacios con emociones."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t py-12 bg-[#034D61] text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="/logos/logosoloblanco.png"
                alt="DEFRENTE"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <p className="mt-2 text-sm text-white/70">Estudio de arquitectura y diseño</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <nav className="flex flex-col gap-2">
                <Link href="#portfolio" className="text-sm hover:text-primary transition-colors">
                  Portfolio
                </Link>
                <Link href="#services" className="text-sm hover:text-primary transition-colors">
                  Servicios
                </Link>
                <Link href="#contact" className="text-sm hover:text-primary transition-colors">
                  Contacto
                </Link>
              </nav>

              <div className="flex flex-col gap-2">
                <p className="text-sm text-white/70">+34 608 756 113</p>
                <p className="text-sm text-white/70">defrente.es@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} DEFRENTE. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-xs text-white/50">Diseñado con pasión y precisión</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Cerrar</span>
          </button>
          
          <div 
            className="flex flex-col w-full max-w-4xl bg-white rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Contenedor de la imagen con tamaño fijo */}
            <div className="relative w-full h-[60vh] bg-black">
              <Image
                src={selectedImage.image.url}
                alt={selectedImage.image.title || "Imagen ampliada"}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Información de la imagen - siempre visible */}
            <div className="w-full p-6 border-t border-gray-100">
              <div className="flex justify-between items-center mb-3">
                {selectedImage.image.title && (
                  <h3 className="text-xl font-normal text-[#F7941D]">{selectedImage.image.title}</h3>
                )}
                {selectedImage.image.year && (
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full">
                    {selectedImage.image.year}
                  </span>
                )}
              </div>
              {selectedImage.image.description && (
                <p className="text-sm text-muted-foreground">{selectedImage.image.description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp floating button */}
      <Link
        href="https://wa.me/34608756113"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#F7941D] text-white rounded-full p-3 shadow-lg hover:bg-[#D17C10] transition-colors z-50"
      >
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
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
        </svg>
        <span className="sr-only">WhatsApp</span>
      </Link>
    </div>
  )
}

