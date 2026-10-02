"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock, Instagram, Linkedin, Menu, X } from "lucide-react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        
        <section className="relative min-h-screen overflow-hidden bg-[#3c3027] text-[#fffaf3]">
          <Image
            src="/Home/Home/Home F1.webp"
            alt="Interiorismo retail DEFRENTE"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#2e2119]/60" />

          <header className="absolute inset-x-0 top-0 z-50 border-b border-white/20 bg-transparent text-[#fffaf3]">
            <div className="container flex h-20 items-center justify-between">
              <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/logos/logocolor.png"
                  alt="DEFRENTE"
                  width={150}
                  height={50}
                  className="h-16 w-auto md:h-20"
                  priority
                />
              </Link>
              <nav className="relative hidden flex-1 lg:ml-8 lg:flex xl:ml-36" aria-label="Navegación principal">
                <ul className="m-0 flex list-none items-center justify-center gap-8 p-0 xl:gap-16">
                  <li>
                    <Link href="/" className="nav-link whitespace-nowrap border-b border-orange-200 pb-1 no-underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="nav-link whitespace-nowrap no-underline transition-opacity hover:opacity-70">
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link href="#portfolio" className="nav-link whitespace-nowrap no-underline transition-opacity hover:opacity-70">
                      Portafolio
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="nav-link whitespace-nowrap no-underline transition-opacity hover:opacity-70">
                      Contacto
                    </Link>
                  </li>
                  <li className="absolute right-0">
                    <Link href="#contact" className="nav-link whitespace-nowrap no-underline transition-opacity hover:opacity-70">
                      Agenda tu diagnóstico
                    </Link>
                  </li>
                </ul>
              </nav>
              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMobileMenuOpen}
                className="rounded-sm p-2 transition-opacity hover:opacity-70 lg:hidden"
                onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            {isMobileMenuOpen && (
              <nav className="border-t border-white/20 bg-[#2e2119]/95 px-6 py-5 lg:hidden">
                <div className="container flex flex-col gap-5">
                  <Link href="/" className="border-b border-orange-200 pb-2 text-[#ffe2bc] text-[0.95rem] font-normal" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <Link href="#services" className="text-[#ffe2bc] text-[0.95rem] font-normal" onClick={() => setIsMobileMenuOpen(false)}>
                    Servicios
                  </Link>
                  <Link href="#portfolio" className="text-[#ffe2bc] text-[0.95rem] font-normal" onClick={() => setIsMobileMenuOpen(false)}>
                    Portafolio
                  </Link>
                  <Link href="#contact" className="text-[#ffe2bc] text-[0.95rem] font-normal" onClick={() => setIsMobileMenuOpen(false)}>
                    Contacto
                  </Link>
                  <Link href="#contact" className="text-[#ffe2bc] text-[0.95rem] font-normal" onClick={() => setIsMobileMenuOpen(false)}>
                    Agenda tu diagnóstico
                  </Link>
                </div>
              </nav>
            )}
          </header>

          <div className="relative z-10 min-h-screen">
            <div className="absolute inset-0 flex items-center justify-center px-4 pb-16 pt-24 text-center sm:pb-20">
              <div className="main-content w-full text-center">
                <p className="eyebrow mx-auto mb-5 text-center">
                  CONSULTORÍA ESTRATÉGICA DE RETAIL · TIENDAS QUE VENDEN MÁS
                </p>
                <h1 className="main-title mx-auto block text-center">
                  <span>Consultoría</span>
                  <br />
                  <span className="main-title-second ml-0">&amp; diseño</span>
                </h1>
                <p className="bottom-subheading mx-auto text-center">
                  DE LOCALES COMERCIALES
                </p>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 px-4 pb-8 sm:pb-10 md:pb-14 lg:pb-16">
              <div className="container flex w-full flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-wrap items-center gap-8">
                  <Link href="#contact" className="bottom-link transition-opacity hover:opacity-65">
                    Agenda tu diagnóstico
                  </Link>
                  <Link href="#services" className="bottom-link transition-opacity hover:opacity-65">
                    Ver Servicios
                  </Link>
                </div>
                <div className="flex w-full flex-col gap-7 lg:max-w-[50%] lg:flex-row lg:items-start lg:gap-12">
                  <p className="description-text max-w-sm flex-1">
                    Analizamos tu proyección de ventas y plan de crecimiento anual para diseñar una tienda que responda a tus objetivos de negocio.
                  </p>
                  <p className="description-text max-w-sm flex-1">
                    optimizamos el recorrido del cliente, la distribución del espacio y la visibilidad de tu tienda para impulsar las ventas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#F7941D]">Portfolio</h2>
            <div className="h-1 w-20 bg-[#F7941D] mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "México", img: "/joyeria/mexicodf/3.webp", category: "Sector Joyería" },
                { name: "Puerto Banús", img: "/corner_popup/tulum/1.3.webp", category: "Corner y Pop Ups" },
                { name: "Mallorca", img: "/hoteleria/arbnb_madrid/2.2.webp", category: "Hotelería" },
                { name: "Corner", img: "/comercial/quito1/2.webp", category: "Arquitectura comercial" },
                { name: "Madrid", img: "/escaparatismo/goya_madrid/2.webp", category: "Escaparatismo" },
                { name: "Quito", img: "/oficinas/cumbaya/1.webp", category: "Oficinas" }
              ].map((item) => (
                <div key={item.name} className="group relative overflow-hidden rounded-lg">
                  {/* Badge de categoría más grande */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/85 backdrop-blur-sm text-sm font-medium px-4 py-2 rounded-full text-gray-800 shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  <Image
                    src={item.img}
                    alt={`Proyecto ${item.name}`}
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">Ver más proyectos</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-[#f8f8f8]">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#F7941D]">Servicios 360°</h2>
            <div className="h-1 w-20 bg-[#F7941D] mb-6"></div>

            {/* Versión móvil con tarjetas */}
            <div className="lg:hidden space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-center text-lg mb-6">
                  Con nuestro enfoque 360°, no solo diseñamos espacios; creamos experiencias que inspiran, conectan y generan resultados medibles para tu negocio.
                </p>
              </div>

              {[
                {
                  step: 1,
                  title: "Estrategia y Conceptualización Retail",
                  desc: "Definimos el concepto perfecto para tu marca. Creamos espacios únicos que conectan con tus clientes y maximizan tu impacto comercial.",
                  color: "#034D61",
                  icon: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"
                },
                {
                  step: 2,
                  title: "Retail Branding y Comunicación",
                  desc: "Desarrollamos tu identidad visual que refuerza el mensaje de tu marca. Integramos diseño gráfico, señalética y branding experiencial garantizando que cada detalle comunique quién eres.",
                  color: "#D17C10",
                  icon: "M12 2H2v10h10V2Z M22 12h-4v10h4V12Z M14 12h-4v10h4V12Z M14 2h8v6h-8V2Z"
                },
                {
                  step: 3,
                  title: "Planteamiento Comercial",
                  desc: "Optimizamos cada metro cuadrado. Diseñamos layouts estratégicos que aumentan las ventas y mejoran el flujo de clientes.",
                  color: "#7BBCAD",
                  icon: "M2 12h20 M2 12v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8 M2 12v-2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2 M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"
                },
                {
                  step: 4,
                  title: "Implantación Roll Up",
                  desc: "Llevamos a cabo la ejecución del proyecto con precisión y supervisión experta. Desde la instalación hasta los últimos ajustes, garantizamos un resultado impecable listo para impactar.",
                  color: "#034D61",
                  icon: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z M22 10-8.97 5.7a1.94 1.94 0 0 1-2.07 0L2 10"
                },
                {
                  step: 5,
                  title: "Proyecto de Arquitectura",
                  desc: "Llevamos tus ideas a la realidad con diseños creativos, técnicos precisos, funcionales y estéticamente impactantes. Ejecución o seguimiento de Obra y mantenimiento de locales comerciales.",
                  color: "#D17C10",
                  icon: "M5 3a2 2 0 0 0-2 2 M19 3a2 2 0 0 1 2 2 M21 19a2 2 0 0 1-2 2 M5 21a2 2 0 0 1-2-2 M9 3h1 M9 21h1 M14 3h1 M14 21h1 M3 9v1 M21 9v1 M3 14v1 M21 14v1"
                },
                {
                  step: 6,
                  title: "Diseño Mobiliario Retail",
                  desc: "Creamos mobiliario personalizado que combina diseño, funcionalidad y durabilidad. Cada pieza está pensada para reflejar tu identidad de marca mientras optimiza el uso del espacio.",
                  color: "#7BBCAD",
                  icon: "M21 7v6h-6 M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
                },
                {
                  step: 7,
                  title: "Experiencias virtuales",
                  desc: "Visualiza tu espacio antes de construirlo. Ofrecemos recorridos virtuales que te permiten ajustar cada detalle en tiempo real.",
                  color: "#D17C10",
                  icon: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z M13 5v2 M13 17v2 M13 11v2"
                }
              ].map((service, index) => (
                <div key={index} className="flow-step-card relative bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 relative">
                      <div className={`h-14 w-14 rounded-full flex items-center justify-center shadow-md`} style={{ backgroundColor: service.color }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                          <path d={service.icon} />
                  </svg>
                </div>
                      <div className="absolute -top-2 -right-2 bg-white text-gray-800 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold border-2" style={{ borderColor: service.color }}>
                        {service.step}
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="font-bold text-lg text-[#F7941D]">{service.title}</h3>
                    </div>
              </div>
                  <p className="text-gray-600">{service.desc}</p>

                  {/* Flecha hacia abajo excepto para el último elemento */}
                  {index < 6 && (
                    <div className="flex justify-center mt-4 mb-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#034D61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                  )}
                </div>
              ))}
              </div>

            {/* Diagrama circular para pantallas grandes */}
            <div className="hidden lg:flex justify-center">
              <div className="relative" style={{ width: "800px", height: "800px" }}>
                {/* Círculo central */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full h-48 w-48 flex items-center justify-center z-10 shadow-lg">
                  <Image
                    src="/logos/logoredondo.png"
                    alt="DEFRENTE"
                    width={180}
                    height={180}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Línea circular con flecha que conecta todos los servicios */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 720 720">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#034D61" />
                    </marker>
                  </defs>
                </svg>

                {/* Los 7 círculos de servicios */}
                {[
                  { step: 1, title: "Estrategia y Conceptualización Retail", desc: "Definimos el concepto perfecto para tu marca. Creamos espacios únicos que conectan con tus clientes y maximizan tu impacto comercial.", color: "#034D61", angle: 0, icon: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" },
                  { step: 2, title: "Retail Branding y Comunicación", desc: "Desarrollamos tu identidad visual que refuerza el mensaje de tu marca. Integramos diseño gráfico, señalética y branding experiencial garantizando que cada detalle comunique quién eres.", color: "#D17C10", angle: 51.4, icon: "M12 2H2v10h10V2Z M22 12h-4v10h4V12Z M14 12h-4v10h4V12Z M14 2h8v6h-8V2Z" },
                  { step: 3, title: "Planteamiento Comercial", desc: "Optimizamos cada metro cuadrado. Diseñamos layouts estratégicos que aumentan las ventas y mejoran el flujo de clientes.", color: "#7BBCAD", angle: 102.8, icon: "M2 12h20 M2 12v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8 M2 12v-2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2 M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" },
                  { step: 4, title: "Implantación Roll Up", desc: "Llevamos a cabo la ejecución del proyecto con precisión y supervisión experta. Desde la instalación hasta los últimos ajustes, garantizamos un resultado impecable listo para impactar.", color: "#034D61", angle: 154.2, icon: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z M22 10-8.97 5.7a1.94 1.94 0 0 1-2.07 0L2 10" },
                  { step: 5, title: "Proyecto de Arquitectura", desc: "Llevamos tus ideas a la realidad con diseños creativos, técnicos precisos, funcionales y estéticamente impactantes. Ejecución o seguimiento de Obra y mantenimiento de locales comerciales.", color: "#D17C10", angle: 205.6, icon: "M5 3a2 2 0 0 0-2 2 M19 3a2 2 0 0 1 2 2 M21 19a2 2 0 0 1-2 2 M5 21a2 2 0 0 1-2-2 M9 3h1 M9 21h1 M14 3h1 M14 21h1 M3 9v1 M21 9v1 M3 14v1 M21 14v1" },
                  { step: 6, title: "Diseño Mobiliario Retail", desc: "Creamos mobiliario personalizado que combina diseño, funcionalidad y durabilidad. Cada pieza está pensada para reflejar tu identidad de marca mientras optimiza el uso del espacio.", color: "#7BBCAD", angle: 257, icon: "M21 7v6h-6 M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" },
                  { step: 7, title: "Experiencias virtuales", desc: "Visualiza tu espacio antes de construirlo. Ofrecemos recorridos virtuales que te permiten ajustar cada detalle en tiempo real.", color: "#D17C10", angle: 308.4, icon: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z M13 5v2 M13 17v2 M13 11v2" }
                ].map((service, index) => {
                  // Calculamos la posición exacta en un círculo
                  const angle = index * (360 / 7) * (Math.PI / 180);
                  const x = 360 + Math.sin(angle) * 250;
                  const y = 360 - Math.cos(angle) * 250;

                  // Posicionamiento específico para cada tooltip según las instrucciones
                  let tooltipStyle = {};

                  if (index === 0) { // Paso 1: Mantener como está
                    tooltipStyle = {
                      bottom: '110%',
                      left: '50%',
                      transform: 'translateX(-50%)'
                    };
                  } else if (index >= 1 && index <= 3) { // Pasos 2, 3, 4: Aumentar separación a la derecha
                    tooltipStyle = {
                      top: '50%',
                      left: '200%',  // Aumentado de 110% a 125%
                      transform: 'translateY(-50%)'
                    };
                  } else { // Pasos 5, 6, 7: Aumentar separación a la izquierda
                    tooltipStyle = {
                      top: '50%',
                      right: '200%',  // Aumentado de 110% a 125%
                      transform: 'translateY(-50%)'
                    };
                  }

                  // Triángulo de indicación para cada tooltip
                  let triangleStyle = {};

                  if (index === 0) { // Paso 1: Triángulo apunta hacia abajo desde el tooltip
                    triangleStyle = {
                      bottom: '-6px',
                      left: '50%',
                      marginLeft: '-6px',
                      transform: 'rotate(45deg)'
                    };
                  } else if (index >= 1 && index <= 3) { // Pasos 2, 3, 4
                    triangleStyle = {
                      top: '50%',
                      left: '-6px',
                      marginTop: '-6px',
                      transform: 'rotate(45deg)'
                    };
                  } else { // Pasos 5, 6, 7
                    triangleStyle = {
                      top: '50%',
                      right: '-6px',
                      marginTop: '-6px',
                      transform: 'rotate(45deg)'
                    };
                  }

                  // Dentro del return del mapeo de servicios, después del círculo y antes del tooltip
                  // Agregamos líneas conectoras para pasos 2-7 (no para el paso 1)
                  {
                    index > 0 && (
                      <div
                        className="absolute z-10 pointer-events-none"
                        style={{
                          width: index >= 1 && index <= 3 ? '75px' : '75px',
                          height: '2px',
                          backgroundColor: service.color,
                          top: '50%',
                          left: index >= 1 && index <= 3 ? '100%' : 'auto',
                          right: index >= 4 && index <= 6 ? '100%' : 'auto',
                          transform: 'translateY(-50%)'
                        }}
                      >
                        {/* Triángulo de flecha al final de la línea */}
                        <div
                          className="absolute"
                          style={{
                            width: '0',
                            height: '0',
                            borderTop: '4px solid transparent',
                            borderBottom: '4px solid transparent',
                            borderLeft: index >= 1 && index <= 3 ? `8px solid ${service.color}` : 'none',
                            borderRight: index >= 4 && index <= 6 ? `8px solid ${service.color}` : 'none',
                            top: '-3px',
                            right: index >= 1 && index <= 3 ? '-8px' : 'auto',
                            left: index >= 4 && index <= 6 ? '-8px' : 'auto',
                          }}
                        />
              </div>
                    )
                  }

                  return (
                    <div
                      key={index}
                      className="absolute z-20 service-circle"
                      style={{
                        left: `calc(${x / 720 * 100}%)`,
                        top: `calc(${y / 720 * 100}%)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="relative">
                        {/* Círculo con ícono y número */}
                        <div
                          className="h-20 w-20 rounded-full flex items-center justify-center border-2 border-white shadow-lg transition-transform hover:scale-110"
                          style={{ backgroundColor: service.color }}
                        >
                          <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                              width="32" height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                              <path d={service.icon} />
                  </svg>
                            <div className="absolute -top-3 -right-3 bg-white text-gray-800 h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold border-2" style={{ borderColor: service.color }}>
                              {service.step}
                </div>
              </div>
            </div>

                        {/* Tooltip con descripción - SIEMPRE VISIBLE (sin opacity-0 ni hover) */}
                        <div
                          className="absolute z-30 bg-white rounded-lg shadow-xl p-4 w-56 pointer-events-none"
                          style={tooltipStyle}
                        >
                          <div className="font-bold text-sm mb-2">{service.title}</div>
                          <p className="text-xs text-gray-600">{service.desc}</p>
                          <div
                            className="absolute w-3 h-3 bg-white"
                            style={triangleStyle}
                          ></div>
              </div>

                        {/* Etiqueta de título visible debajo del círculo */}
                        <div
                          className="absolute text-center font-semibold text-sm"
                          style={{
                            width: '140px',
                            left: '50%',
                            top: '100%',
                            marginTop: '10px',
                            transform: 'translateX(-50%)'
                          }}
                        >
                          {service.title}
                        </div>
                  </div>
                </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Nueva sección de presentación */}
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

        <section id="contact" className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#F7941D]">¡Si te gusta lo que hacemos, contáctanos!</h2>
            <div className="h-1 w-20 bg-[#F7941D] mb-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre
                      </label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Asunto
                    </label>
                    <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea id="message" placeholder="Cuéntanos sobre tu proyecto..." className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Enviar mensaje
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-6 text-[#F7941D]">Información de contacto</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-4 text-primary" />
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-muted-foreground">+34 608 756 113</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-4 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">defrente.es@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-4 text-primary" />
                      <div>
                        <p className="font-medium">Horario</p>
                        <p className="text-muted-foreground">9:00 - 18:00</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-4 text-primary" />
                      <div>
                        <p className="font-medium">Ubicación</p>
                        <p className="text-muted-foreground">España</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f8f8f8] p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-6 text-[#F7941D]">Síguenos</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <Link href="https://www.linkedin.com/" target="_blank" rel="noopener">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
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
                  Portafolio
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

