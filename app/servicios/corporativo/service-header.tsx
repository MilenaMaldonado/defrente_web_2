"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navigation = [
  { label: "Home", href: "/" },
  { label: "Servicios", href: "/#services-carousel" },
  { label: "Portafolio", href: "/#projects" },
  { label: "Contacto", href: "/#contact" },
]

function NavigationFrame() {
  return (
    <span aria-hidden="true" className="nav-link-frame">
      <span className="nav-link-edge nav-link-edge-bottom" />
      <span className="nav-link-edge nav-link-edge-right" />
      <span className="nav-link-edge nav-link-edge-top" />
      <span className="nav-link-edge nav-link-edge-left" />
    </span>
  )
}

export function ServiceHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-[#fffaf3]">
      <div className="hero-shell hero-header-bar flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logos/logo_oficial.png"
            alt="DEFRENTE · Espacios que convierten"
            width={1600}
            height={839}
            className="hero-logo h-auto"
          />
        </Link>
        <nav className="hero-nav hidden lg:flex" aria-label="Navegación principal">
          <ul className="m-0 flex list-none items-center p-0">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={label === "Servicios" ? "nav-link nav-link-active no-underline" : "nav-link no-underline"}
                >
                  {label}
                  <NavigationFrame />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/#contact" className="nav-cta hidden whitespace-nowrap transition-opacity hover:opacity-70 lg:block">
          Agenda tu diagnóstico
        </Link>
        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="service-mobile-nav"
          className="rounded-sm p-2 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="service-mobile-nav"
        aria-label="Navegación móvil"
        hidden={!menuOpen}
        className="border-t border-white/20 bg-[#2e2119]/95 px-6 py-5 lg:hidden"
      >
        <div className="container flex flex-col gap-5">
          {navigation.map(({ label, href }) => (
            <Link key={href} href={href} className="nav-link nav-link-mobile no-underline" onClick={() => setMenuOpen(false)}>
              {label}
              <NavigationFrame />
            </Link>
          ))}
          <Link href="/#contact" className="nav-cta-mobile no-underline" onClick={() => setMenuOpen(false)}>
            Agenda tu diagnóstico
          </Link>
        </div>
      </nav>
    </header>
  )
}
