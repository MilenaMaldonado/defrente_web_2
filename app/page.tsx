"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { standPhotoPath, standProjectGroups } from "@/lib/stand-projects"
import { hospitalityPhotoPath, hospitalityProjects } from "@/lib/hospitality-projects"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Facebook, Instagram, Linkedin, Menu, X } from "lucide-react"

function NavLinkFrame() {
  return (
    <span aria-hidden="true" className="nav-link-frame">
      <span className="nav-link-edge nav-link-edge-bottom" />
      <span className="nav-link-edge nav-link-edge-right" />
      <span className="nav-link-edge nav-link-edge-top" />
      <span className="nav-link-edge nav-link-edge-left" />
    </span>
  )
}

const projectMapLocations: { name: string; x: number; y: number; match?: string[] }[] = [
  { name: "México", x: 87, y: 60, match: ["México"] },
  { name: "Quito", x: 155, y: 232, match: ["Quito", "Cumbayá"] },
  { name: "Galway", x: 764, y: 141 },
  { name: "Francia", x: 872, y: 274 },
  { name: "La Coruña", x: 718, y: 338 },
  { name: "Pontevedra", x: 732, y: 354 },
  { name: "San Sebastián", x: 784, y: 362, match: ["San Sebastián"] },
  { name: "Valencia", x: 810, y: 412 },
  { name: "Suiza", x: 958, y: 310 },
  { name: "Praga", x: 1066, y: 255, match: ["Praga"] },
  { name: "Viena", x: 1066, y: 294 },
  { name: "Rumanía", x: 1200, y: 331, match: ["Rumanía"] },
  { name: "Serbia", x: 1135, y: 371 },
  { name: "Macedonia", x: 1160, y: 416 },
  { name: "Chipre", x: 1328, y: 517, match: ["Chipre"] },
]

const processPhases = [
  {
    category: "Consultoría",
    title: "Diagnóstico estratégico",
    description: "Estudiamos tu proyección de ventas, tu cliente, tu producto y tu recorrido de compra. Definimos qué debe lograr el espacio antes de dibujar una línea.",
    image: "/rueda/25.jpg",
  },
  {
    category: "Diseño",
    title: "Concepto de marca",
    description: "Traducimos la esencia de tu marca en una experiencia clara, reconocible y pensada para conectar con tus clientes.",
    image: "/rueda/26.jpg",
  },
  {
    category: "Espacio",
    title: "Arquitectura comercial",
    description: "Diseñamos espacios funcionales que equilibran circulación, exposición de producto y experiencia de compra.",
    image: "/rueda/27.jpg",
  },
  {
    category: "Identidad",
    title: "Universo visual",
    description: "Definimos colores, texturas y materiales para construir una identidad coherente en cada punto de contacto.",
    image: "/rueda/28.jpg",
  },
  {
    category: "Materialidad",
    title: "Selección de acabados",
    description: "Elegimos materiales y acabados que expresan el concepto, resisten el uso y acompañan la operación diaria.",
    image: "/rueda/29.jpg",
  },
  {
    category: "Experiencia",
    title: "Recorrido de cliente",
    description: "Organizamos el espacio para que descubrir, elegir y comprar resulte intuitivo y agradable.",
    image: "/rueda/30.jpg",
  },
  {
    category: "Desarrollo",
    title: "Diseño de proyecto",
    description: "Convertimos la estrategia en planos y decisiones concretas, coordinando cada detalle antes de la ejecución.",
    image: "/rueda/31.jpg",
  },
  {
    category: "Estrategia",
    title: "Plan de crecimiento",
    description: "Alineamos el diseño con los objetivos del negocio para crear una propuesta viable y replicable.",
    image: "/rueda/32.jpg",
  },
  {
    category: "Implantación",
    title: "Espacio que convierte",
    description: "Acompañamos la materialización del concepto para que el resultado conserve la intención y calidad del proyecto.",
    image: "/rueda/33.jpg",
  },
]

function getProcessSectorClipPath(index: number) {
  const count = processPhases.length
  const step = 360 / count
  const gap = 0
  const start = index * step - step / 2 + gap / 2
  const end = index * step + step / 2 - gap / 2
  const point = (radius: number, angle: number) => {
    const radians = (angle * Math.PI) / 180
    const x = 50 + radius * Math.sin(radians)
    const y = 50 - radius * Math.cos(radians)
    return `${x.toFixed(3)}% ${y.toFixed(3)}%`
  }

  const outerPoints = Array.from({ length: 9 }, (_, pointIndex) =>
    point(50, start + ((end - start) * pointIndex) / 8),
  )
  const innerPoints = Array.from({ length: 9 }, (_, pointIndex) =>
    point(31, end - ((end - start) * pointIndex) / 8),
  )

  return `polygon(${[...outerPoints, ...innerPoints].join(", ")})`
}

type ProjectEntry = {
  name: string
  place: string
  size?: string
  service?: string
  description?: string
  images: string[]
}

const imageSeries = (folder: string, files: string[]) => files.map((file) => `${folder}/${file}.webp`)

const standPortfolioGroups = standProjectGroups.map(({ projects }) =>
  projects.map(({ name, location, year, area, photos, service, description }): ProjectEntry => ({
    name,
    place: location + ", " + year,
    size: area + " m²",
    service,
    description,
    images: photos.map(standPhotoPath),
  })),
)

const projectFolders: {
  name: string
  subtitle: string
  color: string
  textColor: string
  description: string
  projects: ProjectEntry[]
}[] = [
  {
    name: "Feria",
    subtitle: "Stand de feria · Efímero",
    color: "#3f1f2c",
    textColor: "#fffaf3",
    description: "Un stand de joyería de autoservicio diseñado para dar visibilidad al producto y aprovechar cada metro cuadrado.",
    projects: [
      {
        name: "Stand de joyería",
        place: "México DF, 2024",
        size: "12 m²",
        images: imageSeries("/corner_popup/mexico", ["2", "2.1", "2.2", "2.3"]),
      },
    ],
  },
  {
    name: "Corporativo",
    subtitle: "Oficinas · Corporativo",
    color: "#714654",
    textColor: "#fffaf3",
    description: "Espacios de trabajo que integran identidad de marca, comodidad y zonas pensadas para colaborar.",
    projects: [
      {
        name: "Salón Urdesa",
        place: "Cumbayá, 2019",
        size: "64 m²",
        service: "Rediseño y ejecución de espacio corporativo.",
        description: "Diseño de un espacio abierto de coworking y networking, orientado a fomentar la colaboración y el encuentro entre usuarios. La propuesta prioriza flexibilidad, confort y una distribución abierta que favorece distintos usos dentro de un mismo ambiente.",
        images: [
          "/servicios%20paginas/corporativo/CUMBAY%C3%81/OF%201.png",
          "/servicios%20paginas/corporativo/CUMBAY%C3%81/OF%202.png",
          "/servicios%20paginas/corporativo/CUMBAY%C3%81/OF%203%20(2).png",
        ],
      },
      {
        name: "Oficinas Grupo CEAS",
        place: "Quito, 2020",
        size: "180 m²",
        service: "Rediseño y ejecución de espacio corporativo.",
        description: "Transformación de un espacio diáfano en distintas áreas de trabajo y atención, mejorando la privacidad, funcionalidad y eficiencia operativa. La propuesta integra divisiones ligeras y vegetación para mantener la amplitud, favorecer la entrada de luz y crear un entorno más cálido y profesional.",
        images: imageSeries("/proyectos/corporativo/grupo-ceas", ["1", "2", "3", "4", "5"]),
      },
      {
        name: "Coworking Grupo Empresarial",
        place: "Quito, 2021",
        size: "164 m²",
        service: "Análisis de optimización y rentabilidad espacial, rediseño y ejecución de espacio corporativo.",
        description: "Rediseño integral de espacio corporativo orientado a optimizar la distribución, mejorar la funcionalidad y aumentar el aprovechamiento de cada área. La propuesta reorganiza los puestos de trabajo, zonas colaborativas y circulaciones para crear un entorno más eficiente, flexible y alineado con las necesidades operativas de la empresa.",
        images: imageSeries("/proyectos/corporativo/coworking-grupo-empresarial", ["1", "2", "3", "4", "5", "6"]),
      },
      {
        name: "IKIGAI",
        place: "Quito, 2025",
        size: "78 m²",
        service: "Diseño, rediseño y ejecución de espacio corporativo.",
        description: "Rediseño integral del área de Talento Humano, orientado a mejorar la funcionalidad, privacidad y confort del espacio. La propuesta reorganiza las áreas de trabajo y atención para crear un entorno más eficiente, profesional y alineado con la identidad de la empresa.",
        images: imageSeries("/proyectos/corporativo/ikigai", ["1", "2", "3", "4", "5"]),
      },
      {
        name: "Artro",
        place: "Quito, 2021",
        size: "66 m²",
        service: "Diseño, optimización y ejecución de espacio corporativo.",
        description: "Rediseño de áreas destinadas al descanso y bienestar del equipo, priorizando confort y funcionalidad. La propuesta incorpora zonas recreativas y de pausa que mejoran la experiencia del personal dentro del entorno de trabajo.",
        images: imageSeries("/proyectos/corporativo/artro", ["1", "2", "3", "4", "5", "6"]),
      },
    ],
  },
  {
    name: "Local",
    subtitle: "Arquitectura comercial · Local",
    color: "#93626f",
    textColor: "#fffaf3",
    description: "Diseñamos recorridos claros y ambientes que conectan la experiencia de compra con la identidad de cada marca.",
    projects: [
      {
        name: "Sistema modular de exposición",
        place: "San Sebastián, 2023",
        service: "Diseño y testeo de sistema modular de mobiliario expositivo.",
        description: "Desarrollo de un sistema modular compuesto por piezas independientes que pueden reorganizarse y desplazarse según las necesidades del espacio. El diseño juega con distintas alturas para jerarquizar el producto, mejorar su visibilidad y permitir configuraciones flexibles. El prototipo fue validado satisfactoriamente en fase de testeo.",
        images: imageSeries("/comercial/madrid", ["1", "2", "3", "4", "5"]),
      },
      { name: "Local comercial", place: "Quito · Ecuador", images: imageSeries("/comercial/quito", ["1", "2", "3", "4"]) },
      { name: "Local comercial II", place: "Quito · Ecuador", images: imageSeries("/comercial/quito1", ["1", "1.1", "2"]) },
      ...standPortfolioGroups[1],
    ],
  },
  {
    name: "Hotelería",
    subtitle: "Hotelería · Hospitality",
    color: "#a47d86",
    textColor: "#fffaf3",
    description: "Lugares de estancia acogedores que equilibran bienestar, funcionalidad y una experiencia memorable.",
    projects: [
      ...hospitalityProjects.map(({ name, location, year, area, photos, service, description }): ProjectEntry => ({
        name,
        place: location + ", " + year,
        size: area + " m²",
        service,
        description,
        images: photos.map(hospitalityPhotoPath),
      })),
    ],
  },
  {
    name: "Efímero",
    subtitle: "Corner & pop-up · Centro comercial",
    color: "#b08a92",
    textColor: "#2b101d",
    description: "Formatos temporales que hacen visible tu marca y permiten llevar la experiencia de compra a nuevos espacios.",
    projects: [
      { name: "Pop-up", place: "Tulum · México", images: imageSeries("/corner_popup/tulum", ["1", "1.2", "1.3", "1.4"]) },
      { name: "Corner", place: "México DF", images: imageSeries("/corner_popup/mexico1", ["1", "2"]) },
      ...standPortfolioGroups[0],
    ],
  },
  {
    name: "Joyería",
    subtitle: "Joyería & accesorios · España",
    color: "#dec3c8",
    textColor: "#5a2f3c",
    description: "Espacios donde iluminación, materiales y recorrido ponen el producto en el centro de la experiencia.",
    projects: [
      { name: "Joyería", place: "Mallorca · España", images: imageSeries("/joyeria/mallorca", ["2", "1"]) },
      { name: "Joyería", place: "México DF", images: imageSeries("/joyeria/mexicodf", ["4", "1", "2", "3"]) },
      { name: "Joyería", place: "Puerto Banús · España", images: imageSeries("/joyeria/puertobanus", ["1", "2", "3", "4"]) },
    ],
  },
]

const mapLocations = projectMapLocations.map((location) => ({
  ...location,
  projects: projectFolders
    .flatMap((folder, folderIndex) => folder.projects.map((entry, entryIndex) => ({ folderIndex, entryIndex, entry })))
    .filter(({ entry }) => location.match?.some((keyword) => entry.place.includes(keyword))),
}))

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeServiceCard, setActiveServiceCard] = useState(0)
  const [processTurn, setProcessTurn] = useState(0)
  const processTouchStartX = useRef<number | null>(null)
  const caseCompareRef = useRef<HTMLDivElement | null>(null)
  const contactStageRef = useRef<HTMLDivElement | null>(null)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [isNewsletterEmailValid, setIsNewsletterEmailValid] = useState(false)
  const [isNewsletterFieldActive, setIsNewsletterFieldActive] = useState(false)
  const [activeProjectFolder, setActiveProjectFolder] = useState(0)
  const [activeProjectEntry, setActiveProjectEntry] = useState(0)
  const [activeProjectImage, setActiveProjectImage] = useState(0)
  const [projectPageTurn, setProjectPageTurn] = useState(0)
  const activeProcessPhase = ((processTurn % processPhases.length) + processPhases.length) % processPhases.length
  useEffect(() => {
    const compare = caseCompareRef.current
    if (!compare) return

    const midpoint = 50
    const amplitude = 33
    const speed = 0.00045
    const idleDelay = 3000
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let position = midpoint
    let phase = 0
    let drag = false
    let automatic = true
    let visible = false
    let lastFrame = performance.now()
    let idleTimer: number | undefined
    let animationFrame = 0

    const setPosition = (nextPosition: number) => {
      position = Math.max(0, Math.min(100, nextPosition))
      compare.style.setProperty("--compare-position", `${position}%`)
      compare.setAttribute("aria-valuenow", String(Math.round(position)))
    }

    const setFromPointer = (clientX: number) => {
      const bounds = compare.getBoundingClientRect()
      if (bounds.width === 0) return
      setPosition(((clientX - bounds.left) / bounds.width) * 100)
    }

    const pauseAutomaticMotion = () => {
      automatic = false
      window.clearTimeout(idleTimer)
      idleTimer = window.setTimeout(() => {
        phase = Math.asin(Math.max(-1, Math.min(1, (position - midpoint) / amplitude)))
        automatic = true
      }, idleDelay)
    }

    const onPointerDown = (event: PointerEvent) => {
      drag = true
      pauseAutomaticMotion()
      compare.setPointerCapture(event.pointerId)
      setFromPointer(event.clientX)
    }

    const onPointerMove = (event: PointerEvent) => {
      if (drag) setFromPointer(event.clientX)
    }

    const onPointerUp = () => {
      drag = false
      pauseAutomaticMotion()
    }

    const onKeyDown = (event: KeyboardEvent) => {
      const keyPositions: Record<string, number> = {
        ArrowLeft: position - 5,
        ArrowRight: position + 5,
        Home: 0,
        End: 100,
      }
      const nextPosition = keyPositions[event.key]

      if (nextPosition === undefined) return
      event.preventDefault()
      pauseAutomaticMotion()
      setPosition(nextPosition)
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !reducedMotion) {
        lastFrame = performance.now()
        animationFrame = window.requestAnimationFrame(loop)
      } else {
        window.cancelAnimationFrame(animationFrame)
      }
    })

    function loop(now: number) {
      const delta = Math.min(now - lastFrame, 50)
      lastFrame = now
      if (automatic && visible && !drag && !reducedMotion) {
        phase += delta * speed
        setPosition(midpoint + amplitude * Math.sin(phase))
      }
      if (visible && !reducedMotion) animationFrame = window.requestAnimationFrame(loop)
    }

    setPosition(midpoint)
    observer.observe(compare)
    compare.addEventListener("pointerdown", onPointerDown)
    compare.addEventListener("pointermove", onPointerMove)
    compare.addEventListener("pointerup", onPointerUp)
    compare.addEventListener("pointercancel", onPointerUp)
    compare.addEventListener("keydown", onKeyDown)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
      window.clearTimeout(idleTimer)
      compare.removeEventListener("pointerdown", onPointerDown)
      compare.removeEventListener("pointermove", onPointerMove)
      compare.removeEventListener("pointerup", onPointerUp)
      compare.removeEventListener("pointercancel", onPointerUp)
      compare.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  useEffect(() => {
    const stage = contactStageRef.current
    if (!stage) return

    const button = stage.querySelector<HTMLButtonElement>(".contact-cta")
    const bars = Array.from(stage.querySelectorAll<HTMLElement>(".contact-bar"))
    if (!button || bars.length === 0) return

    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))
    const smooth = (value: number) => value * value * (3 - 2 * value)
    const random = (min: number, max: number) => min + Math.random() * (max - min)
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const barStates = bars.map((element, index) => ({
      element,
      angle: (index / bars.length) * Math.PI * 2 + random(-0.095, 0.095),
      length: random(155, 425),
      gap: random(48, 85),
      chaosLength: random(160, 480),
      chaosWidth: random(48, 84),
      chaosX: Math.random(),
      chaosY: Math.random(),
      chaosRotation: random(-100, 100),
      delay: random(0, 0.45),
      phase: random(0, Math.PI * 2),
      x: null as number | null,
      y: null as number | null,
      rotation: 0,
      currentLength: 0,
      currentWidth: 0,
      targetX: 0,
      targetY: 0,
      targetRotation: 0,
    }))

    let width = 0
    let height = 0
    let scale = 1
    let centerX = 0
    let centerY = 0
    let progress = 0
    let pointerX = -999
    let pointerY = -999
    let burst = 0
    let visible = false
    let animationFrame = 0
    let disposed = false

    const layout = () => {
      width = stage.clientWidth
      height = stage.clientHeight
      scale = clamp(width / 1020, 0.55, 1.18)
      const stageBounds = stage.getBoundingClientRect()
      const buttonBounds = button.getBoundingClientRect()
      centerX = buttonBounds.left - stageBounds.left + buttonBounds.width / 2
      centerY = buttonBounds.top - stageBounds.top + buttonBounds.height / 2

      barStates.forEach((bar) => {
        const horizontalRadius = Math.abs(Math.cos(bar.angle))
        const verticalRadius = Math.abs(Math.sin(bar.angle))
        const radius = Math.min(
          horizontalRadius ? buttonBounds.width / 2 / horizontalRadius : Infinity,
          verticalRadius ? buttonBounds.height / 2 / verticalRadius : Infinity,
        )
        const finalRadius = (radius + bar.gap + bar.length / 2) * scale + radius * (1 - scale)
        bar.targetX = centerX + Math.cos(bar.angle) * finalRadius
        bar.targetY = centerY + Math.sin(bar.angle) * finalRadius
        bar.targetRotation = (bar.angle * 180) / Math.PI
      })
    }

    const updateProgress = () => {
      const bounds = stage.getBoundingClientRect()
      progress = clamp((window.innerHeight - bounds.top) / (window.innerHeight * 0.85), 0, 1)
    }

    const onPointerMove = (event: PointerEvent) => {
      const bounds = stage.getBoundingClientRect()
      pointerX = event.clientX - bounds.left
      pointerY = event.clientY - bounds.top
    }

    const onPointerLeave = () => {
      pointerX = pointerY = -999
    }

    const onPointerDown = () => {
      burst = 1
    }

    const draw = (now: number) => {
      burst *= 0.96
      barStates.forEach((bar) => {
        const targetProgress = reducedMotion ? 1 : clamp(smooth(clamp(progress * 1.5 - bar.delay, 0, 1)) - burst * 0.8, 0, 1)
        const chaosX = bar.chaosX * width
        const chaosY = bar.chaosY * height
        let x = chaosX + (bar.targetX - chaosX) * targetProgress
        let y = chaosY + (bar.targetY - chaosY) * targetProgress
        let rotation = bar.chaosRotation + (bar.targetRotation - bar.chaosRotation) * targetProgress
        const length = (bar.chaosLength + (bar.length - bar.chaosLength) * targetProgress) * scale
        const barWidth = (bar.chaosWidth + (31 - bar.chaosWidth) * targetProgress) * scale

        if (!reducedMotion) {
          x += Math.sin(now * 0.0007 + bar.phase) * 5 * targetProgress
          y += Math.cos(now * 0.0009 + bar.phase) * 5 * targetProgress
          rotation += Math.sin(now * 0.0006 + bar.phase) * 1.5 * targetProgress
          const deltaX = x - pointerX
          const deltaY = y - pointerY
          const distance = Math.hypot(deltaX, deltaY)
          if (distance > 0 && distance < 220) {
            const force = 1 - distance / 220
            x += (deltaX / distance) * force * 90
            y += (deltaY / distance) * force * 90
            rotation += force * 28 * (deltaX > 0 ? 1 : -1)
          }
        }

        if (bar.x === null || bar.y === null) {
          bar.x = x
          bar.y = y
          bar.rotation = rotation
          bar.currentLength = length
          bar.currentWidth = barWidth
        }

        const easing = reducedMotion ? 1 : 0.14
        bar.x += (x - bar.x) * easing
        bar.y += (y - bar.y) * easing
        bar.rotation += (rotation - bar.rotation) * easing
        bar.currentLength += (length - bar.currentLength) * easing
        bar.currentWidth += (barWidth - bar.currentWidth) * easing
        bar.element.style.width = `${bar.currentLength}px`
        bar.element.style.height = `${bar.currentWidth}px`
        bar.element.style.transform = `translate(${bar.x - bar.currentLength / 2}px, ${bar.y - bar.currentWidth / 2}px) rotate(${bar.rotation}deg)`
      })

      if (visible && !reducedMotion && !disposed) animationFrame = window.requestAnimationFrame(draw)
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw)
      } else {
        window.cancelAnimationFrame(animationFrame)
        if (reducedMotion) draw(performance.now())
      }
    })

    layout()
    updateProgress()
    observer.observe(stage)
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", layout)
    stage.addEventListener("pointermove", onPointerMove)
    stage.addEventListener("pointerleave", onPointerLeave)
    stage.addEventListener("pointerdown", onPointerDown)
    document.fonts?.ready.then(() => {
      if (!disposed) layout()
    })

    return () => {
      disposed = true
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", layout)
      stage.removeEventListener("pointermove", onPointerMove)
      stage.removeEventListener("pointerleave", onPointerLeave)
      stage.removeEventListener("pointerdown", onPointerDown)
    }
  }, [isContactFormOpen])

  const openProjectFolder = (index: number) => {
    const nextIndex = (index + projectFolders.length) % projectFolders.length
    if (nextIndex === activeProjectFolder) return
    setActiveProjectFolder(nextIndex)
    setActiveProjectEntry(0)
    setActiveProjectImage(0)
    setProjectPageTurn((turn) => turn + 1)
  }

  const goToProject = (folderIndex: number, entryIndex: number) => {
    if (folderIndex !== activeProjectFolder) setProjectPageTurn((turn) => turn + 1)
    setActiveProjectFolder(folderIndex)
    setActiveProjectEntry(entryIndex)
    setActiveProjectImage(0)
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const openProjectEntry = (index: number) => {
    setActiveProjectEntry(index)
    setActiveProjectImage(0)
  }

  const activeFolder = projectFolders[activeProjectFolder]
  const activeEntry = activeFolder.projects[activeProjectEntry] ?? activeFolder.projects[0]

  const serviceCards = [
    {
      number: "01",
      image: "/servicios%20tarjetas/Portada%20locales.png",
      imageAlt: "Interior de una joyería con exhibidores",
      category: "LOCALES",
      title: "Locales comerciales",
      description: "Optimizamos el recorrido y analizamos tus objetivos para atraer más clientes y convertir más visitas en ventas.",
    },
    {
      number: "02",
      href: "/servicios/corporativo",
      image: "/servicios%20tarjetas/Portada%20Corporativo.png",
      imageAlt: "Oficina con zona de estar y mesas de trabajo",
      category: "CORPORATIVO",
      title: "Oficinas y espacios corporativos",
      description: "Oficinas, sedes y áreas de atención para mejorar la operación, la experiencia interna y el rendimiento del equipo.",
    },
    {
      number: "03",
      image: "/comercial/quito1/2.webp",
      imageAlt: "Interior comercial con mesas y sillas",
      category: "EXPANSIÓN",
      title: "Franquicias y expansión",
      description: "Un modelo de tienda replicable que protege tu marca, facilita futuras aperturas y acompaña tu plan de crecimiento.",
    },
    {
      number: "04",
      href: "/servicios/stands",
      image: "/servicios%20tarjetas/Portada%20stands.png",
      imageAlt: "Stand de joyería MiraMira",
      category: "EFÍMERO",
      title: "Stands, pop-ups y corners",
      description: "Tu marca vendiendo fuera de casa: ferias y campañas para probar el mercado.",
    },
    {
      number: "05",
      href: "/servicios/hospitality",
      image: "/servicios%20tarjetas/hospitaly.png",
      imageAlt: "Sala y comedor con iluminación cálida",
      category: "HOSPITALITY",
      title: "Hoteles y hospitalidad",
      description: "Consultoría y diseño para el sector hotelero y restaurantes, enfocada en la acogida, el bienestar y la atención al cliente.",
    },
  ]

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
          <div className="absolute inset-0 bg-[#2e2119]/85" />

          <header className="absolute inset-x-0 top-0 z-50 bg-transparent text-[#fffaf3]">
            <div className="hero-shell hero-header-bar flex items-center justify-between">
              <Link href="/" className="relative z-10 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/logos/logo_oficial.png"
                  alt="DEFRENTE · Espacios que convierten"
                  width={1600}
                  height={839}
                  className="hero-logo h-auto"
                  priority
                />
              </Link>
              <nav className="hero-nav hidden lg:flex" aria-label="Navegación principal">
                <ul className="m-0 flex list-none items-center p-0">
                  <li>
                    <Link href="/" aria-current="page" className="nav-link nav-link-active whitespace-nowrap no-underline">
                      Home
                      <NavLinkFrame />
                    </Link>
                  </li>
                  <li>
                    <Link href="#services-carousel" className="nav-link whitespace-nowrap no-underline">
                      Servicios
                      <NavLinkFrame />
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" className="nav-link whitespace-nowrap no-underline">
                      Portafolio
                      <NavLinkFrame />
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="nav-link whitespace-nowrap no-underline">
                      Contacto
                      <NavLinkFrame />
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link href="#contact" className="nav-cta relative z-10 hidden whitespace-nowrap no-underline transition-opacity hover:opacity-70 lg:block">
                Agenda tu diagnóstico
              </Link>
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
                  <Link href="/" className="nav-link nav-link-mobile no-underline" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                    <NavLinkFrame />
                  </Link>
                  <Link href="#services-carousel" className="nav-link nav-link-mobile no-underline" onClick={() => setIsMobileMenuOpen(false)}>
                    Servicios
                    <NavLinkFrame />
                  </Link>
                  <Link href="#projects" className="nav-link nav-link-mobile no-underline" onClick={() => setIsMobileMenuOpen(false)}>
                    Portafolio
                    <NavLinkFrame />
                  </Link>
                  <Link href="#contact" className="nav-link nav-link-mobile no-underline" onClick={() => setIsMobileMenuOpen(false)}>
                    Contacto
                    <NavLinkFrame />
                  </Link>
                  <Link href="#contact" className="nav-cta-mobile no-underline" onClick={() => setIsMobileMenuOpen(false)}>
                    Agenda tu diagnóstico
                  </Link>
                </div>
              </nav>
            )}
          </header>

          <div className="hero-shell hero-body relative z-10 flex min-h-screen flex-col">
            <div className="main-content text-left">
              <p className="eyebrow text-left">
                CONSULTORÍA ESTRATÉGICA DE RETAIL · TIENDAS QUE VENDEN MÁS
              </p>
              <h1 className="main-title text-left">
                <span className="main-title-first">Consultoría</span>
                <span className="main-title-second"><span className="title-ampersand">&amp;</span> diseño</span>
              </h1>
              <p className="bottom-subheading text-left">
                DE LOCALES COMERCIALES
              </p>
            </div>

            <div className="hero-bottom mt-auto">
              <div className="hero-bottom-links">
                <Link href="#contact" className="bottom-link transition-opacity hover:opacity-65">
                  Agenda tu diagnóstico
                </Link>
                <Link href="#services-carousel" className="bottom-link transition-opacity hover:opacity-65">
                  Ver Servicios
                </Link>
              </div>
              <div className="hero-descriptions">
                <p className="description-text">
                  Analizamos tu proyección de ventas y plan de crecimiento anual para diseñar una tienda que responda a tus objetivos de negocio.
                </p>
                <p className="description-text">
                  optimizamos el recorrido del cliente, la distribución del espacio y la visibilidad de tu tienda para impulsar las ventas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services-carousel" className="service-showcase">
          <div className="service-showcase-top">
            <div className="service-showcase-intro">
              <h2><span>QUÉ</span><span>HACEMOS</span></h2>
              <p>
                Analizamos tu negocio<br />
                y diseñamos el espacio<br />
                para que guíe al cliente,<br />
                mantenga su atención<br />
                e impulse la compra.
              </p>
            </div>
            <div className="service-showcase-art" aria-hidden="true">
              <Image
                src="/comercial/servicios/logo_diseno.png"
                alt=""
                width={1680}
                height={390}
                sizes="(max-width: 768px) 58vw, 78vw"
                priority
                className="service-showcase-art-image"
              />
            </div>
          </div>

          <div className="service-showcase-bottom">
            <div className="service-showcase-consultancy">
              <h2>Consultoría<br /><span>&amp; diseño</span></h2>
              <p>Elegimos el enfoque<br />según la necesidad<br />de tu negocio</p>
            </div>

            <div className="service-carousel" aria-roledescription="carrusel" aria-label="Servicios de DEFRENTE">
              <div className="service-carousel-track" aria-live="polite">
                {serviceCards.map((card, index) => {
                  const relativeIndex = (index - activeServiceCard + serviceCards.length) % serviceCards.length
                  const position = relativeIndex > Math.floor(serviceCards.length / 2)
                    ? relativeIndex - serviceCards.length
                    : relativeIndex

                  return (
                    <article
                      key={card.number}
                      className="service-carousel-card"
                      data-position={position}
                      aria-hidden={position !== 0}
                      aria-label={`${card.number} · ${card.category}`}
                      onPointerMove={(event) => {
                        if (position !== 0 || event.pointerType !== "mouse") return

                        const bounds = event.currentTarget.getBoundingClientRect()
                        const horizontalPosition = (event.clientX - bounds.left) / bounds.width
                        const verticalPosition = (event.clientY - bounds.top) / bounds.height

                        event.currentTarget.style.setProperty(
                          "--card-tilt-y",
                          `${(horizontalPosition - 0.5) * 12}deg`,
                        )
                        event.currentTarget.style.setProperty(
                          "--card-tilt-x",
                          `${(0.5 - verticalPosition) * 5}deg`,
                        )
                      }}
                      onPointerLeave={(event) => {
                        event.currentTarget.style.setProperty("--card-tilt-y", "0deg")
                        event.currentTarget.style.setProperty("--card-tilt-x", "0deg")
                      }}
                    >
                      <div className="service-carousel-image-wrap">
                        <Image
                          src={card.image}
                          alt={card.imageAlt}
                          fill
                          sizes="(max-width: 768px) 72vw, 320px"
                          loading={position === 0 ? "eager" : "lazy"}
                          className="service-carousel-image"
                        />
                      </div>
                      <div className="service-carousel-copy">
                        <div className="service-card-heading">
                          <span className="service-card-number">{card.number}</span>
                          <div>
                            <p className="service-card-category">{card.category}</p>
                            <h3>{card.title}</h3>
                          </div>
                        </div>
                        <p className="service-card-description">{card.description}</p>
                        <Link href={card.href ?? "#services-carousel"} tabIndex={position === 0 ? 0 : -1} className="service-card-link">
                          Ver servicio <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>

              <button
                type="button"
                className="service-carousel-control service-carousel-previous"
                aria-label="Servicio anterior"
                onClick={() => setActiveServiceCard((current) => (current - 1 + serviceCards.length) % serviceCards.length)}
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="service-carousel-control service-carousel-next"
                aria-label="Siguiente servicio"
                onClick={() => setActiveServiceCard((current) => (current + 1) % serviceCards.length)}
              >
                <ArrowRight aria-hidden="true" />
              </button>

              <div className="service-carousel-pagination" aria-label={`Servicio ${activeServiceCard + 1} de ${serviceCards.length}`}>
                {serviceCards.map((card, index) => (
                  <button
                    key={card.number}
                    type="button"
                    aria-label={`Ver servicio ${card.number}: ${card.title}`}
                    aria-current={activeServiceCard === index ? "true" : undefined}
                    className={activeServiceCard === index ? "is-active" : ""}
                    onClick={() => setActiveServiceCard(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="featured-case" aria-labelledby="featured-case-title">
          <div className="featured-case-inner">
            <div className="featured-case-heading">
              <div>
                <p className="featured-case-kicker">ÚLTIMO CASO DE ÉXITO</p>
                <h2 id="featured-case-title" className="featured-case-result">
                  <span>+67%</span>
                  <span>del ticket<br />promedio</span>
                </h2>
              </div>
              <div className="featured-case-details" aria-label="Datos del proyecto">
                <span>MARCA: MIRAMIRA</span>
                <span>ENFOQUE: IMPULSAR TICKET PROMEDIO</span>
                <span>SERVICIO: REDISEÑO CONCEPTUAL Y ESTRATÉGICO DE TIENDA</span>
              </div>
            </div>

            <div className="featured-case-story">
              <p>
                Para este diseño comercial<br />
                para franquicias analizamos<br />
                cómo se movía el cliente,<br />
                qué miraba y qué lo detenía.
              </p>
              <h3>¿Qué hicimos<br />con miramira?</h3>
              <p>
                A partir de ahí reordenamos el espacio<br />
                para que el recorrido trabajara a favor<br />
                de la venta y cada zona tuviera un<br />
                propósito comercial.
              </p>
            </div>

            <figure className="featured-case-visual">
              <div className="featured-case-side" aria-hidden="true" />
              <div className="featured-case-photo">
                <div
                  ref={caseCompareRef}
                  className="featured-case-compare"
                  role="slider"
                  aria-label="Comparar el antes y el después de la tienda MiraMira"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={50}
                  tabIndex={0}
                >
                  <Image
                    src="/antes_despues/Miramira_ANTES_separada.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 68vw"
                    className="featured-case-image"
                  />
                  <div className="featured-case-after-image">
                    <Image
                      src="/antes_despues/Miramira_DESPUES_separada.png"
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 68vw"
                      className="featured-case-image"
                    />
                  </div>
                  <div className="featured-case-image-overlay" aria-hidden="true" />
                  <span className="featured-case-label featured-case-label-before" aria-hidden="true">ANTES</span>
                  <span className="featured-case-label featured-case-label-after" aria-hidden="true">DESPUÉS</span>
                  <span className="featured-case-handle" aria-hidden="true">
                    <span />
                  </span>
                </div>
              </div>
            </figure>

            <p className="featured-case-caption">
              El resultado fue un ticket promedio más alto, con una lógica replicable en todas sus tiendas.
            </p>
          </div>
        </section>

        <section className="process-wheel-section" aria-labelledby="process-wheel-title">
          <div className="process-wheel-heading">
            <p>Primero analizamos tu negocio,</p>
            <h2 id="process-wheel-title">después diseñamos</h2>
            <span>Cada proyecto avanza en tres fases, con la consultoría como punto de partida.</span>
          </div>

          <div
            className="process-wheel-stage"
            role="group"
            aria-label="Fases de trabajo de DEFRENTE"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") setProcessTurn((turn) => turn + 1)
              if (event.key === "ArrowLeft") setProcessTurn((turn) => turn - 1)
            }}
            onTouchStart={(event) => {
              processTouchStartX.current = event.touches[0]?.clientX ?? null
            }}
            onTouchEnd={(event) => {
              if (processTouchStartX.current === null) return

              const distance = event.changedTouches[0].clientX - processTouchStartX.current
              if (Math.abs(distance) > 40) {
                setProcessTurn((turn) => turn + (distance < 0 ? 1 : -1))
              }
              processTouchStartX.current = null
            }}
          >
            <div
              className="process-wheel"
              style={{ transform: `rotate(${-processTurn * (360 / processPhases.length)}deg)` }}
              aria-hidden="true"
            >
              {processPhases.map((phase, index) => (
                <div
                  key={phase.category}
                  className={`process-wheel-sector${index === activeProcessPhase ? " is-active" : ""}`}
                  style={{
                    clipPath: getProcessSectorClipPath(0),
                    transform: `rotate(${index * (360 / processPhases.length)}deg)`,
                  }}
                >
                  <div className="process-wheel-image-frame">
                    <Image
                      src={phase.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 60vw, 480px"
                      loading={index === activeProcessPhase ? "eager" : "lazy"}
                      className="process-wheel-image"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="process-wheel-hub" aria-live="polite" aria-atomic="true">
              <p className="process-wheel-category">{processPhases[activeProcessPhase].category}</p>
              <span className="process-wheel-number">{String(activeProcessPhase + 1).padStart(2, "0")}</span>
              <h3>
                {activeProcessPhase === 0 ? (
                  <>Diagnóstico <span>estratégico</span></>
                ) : processPhases[activeProcessPhase].title}
              </h3>
              <p className="process-wheel-description">{processPhases[activeProcessPhase].description}</p>
            </div>

            <button
              type="button"
              className="process-wheel-control process-wheel-previous"
              aria-label="Fase anterior"
              onClick={() => setProcessTurn((turn) => turn - 1)}
            >
              <ArrowLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className="process-wheel-control process-wheel-next"
              aria-label="Siguiente fase"
              onClick={() => setProcessTurn((turn) => turn + 1)}
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </div>

          <p className="process-wheel-footer">
            Operamos desde España, con proyectos en 18 ciudades europeas.<br />
            Trabajamos en Europa y Latinoamérica.
          </p>
          <div className="process-wheel-map">
            <Image
              src="/fotos_principal/mapa.png"
              alt="Mapa de proyectos de DEFRENTE en Europa y Latinoamérica"
              width={1469}
              height={572}
              sizes="100vw"
              className="process-wheel-map-image"
            />
            {mapLocations.map(({ name, x, y, projects }) => {
              const placement = [
                y < 200 ? "is-below" : "is-above",
                x < 300 ? "is-start" : x > 1150 ? "is-end" : "is-center",
              ].join(" ")

              return (
                <div
                  key={name}
                  className={`process-map-spot ${placement}${projects.length ? " has-projects" : ""}`}
                  style={{ left: `${(x / 1469) * 100}%`, top: `${(y / 572) * 100}%` }}
                >
                  <button
                    type="button"
                    className="process-map-marker"
                    aria-label={projects.length ? `${name}: ${projects.length} ${projects.length === 1 ? "proyecto" : "proyectos"}` : name}
                    onClick={(event) => {
                      const canHover = window.matchMedia("(hover: hover)").matches
                      if (projects.length && canHover) {
                        goToProject(projects[0].folderIndex, projects[0].entryIndex)
                      } else {
                        event.currentTarget.focus()
                      }
                    }}
                  >
                    {!projects.length && <span className="process-map-location" aria-hidden="true">{name}</span>}
                  </button>
                  {projects.length > 0 && (
                    <div className="process-map-card">
                      <p className="process-map-card-title">
                        {name} <span>· {projects.length} {projects.length === 1 ? "proyecto" : "proyectos"}</span>
                      </p>
                      <ul className={`process-map-card-grid${projects.length === 1 ? " is-single" : ""}`}>
                        {projects.slice(0, 4).map(({ folderIndex, entryIndex, entry }) => (
                          <li key={`${folderIndex}-${entryIndex}`}>
                            <button
                              type="button"
                              className="process-map-card-item"
                              onClick={() => goToProject(folderIndex, entryIndex)}
                            >
                              <span className="process-map-card-photo">
                                <Image src={entry.images[0]} alt="" fill sizes="160px" />
                              </span>
                              <span className="process-map-card-name">{entry.name}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                      {projects.length > 2 && (
                        <button
                          type="button"
                          className={`process-map-card-more${projects.length > 4 ? "" : " is-mobile-only"}`}
                          onClick={() => goToProject(projects[2].folderIndex, projects[2].entryIndex)}
                        >
                          Ver más proyectos en {name}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <section id="projects" className="project-folders-section" aria-label="Proyectos de DEFRENTE">
          <div className="project-folders-bar project-folders-bar-top" aria-hidden="true" />
          <div className="project-folders-bar project-folders-bar-bottom" aria-hidden="true" />

          <div className="project-folders-layout">
            <header className="project-folders-heading">
              <p className="project-folders-kicker">Espacios que convierten</p>
              <h2>Proyectos</h2>
              <p className="project-folders-intro">Cada proyecto responde a un objetivo comercial <strong>concreto.</strong></p>
              <p className="project-folders-note">Pulsa una pestaña de la carpeta para conocer cada espacio.</p>
            </header>

            <div className="project-binder-wrap">
              <div className="project-stack" style={{ "--stack-count": projectFolders.length } as CSSProperties}>
                <div
                  className="project-stack-layers"
                  role="tablist"
                  aria-label="Elegir proyecto"
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                      event.preventDefault()
                      openProjectFolder(activeProjectFolder + 1)
                    }
                    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                      event.preventDefault()
                      openProjectFolder(activeProjectFolder - 1)
                    }
                  }}
                >
                  {projectFolders.map((folder, index) => (
                    <div
                      key={folder.name}
                      role="presentation"
                      className={`project-stack-layer${activeProjectFolder === index ? " is-active" : ""}`}
                      style={{
                        "--i": index,
                        "--layer-color": folder.color,
                        "--layer-text": folder.textColor,
                      } as CSSProperties}
                    >
                      <button
                        id={`project-tab-${index}`}
                        type="button"
                        role="tab"
                        aria-selected={activeProjectFolder === index}
                        aria-controls="project-binder-panel"
                        tabIndex={activeProjectFolder === index ? 0 : -1}
                        className="project-stack-tab"
                        onClick={() => openProjectFolder(index)}
                      >
                        {folder.name}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="project-stack-body">
                  <div
                    className="project-binder-paper"
                    role="tabpanel"
                    id="project-binder-panel"
                    aria-labelledby={`project-tab-${activeProjectFolder}`}
                  >
                    <div className="project-binder-page" key={`page-${activeProjectFolder}`}>
                      {activeFolder.projects.length > 1 && (
                        <div className="project-binder-entries" role="group" aria-label={`Proyectos de ${activeFolder.name}`}>
                          {activeFolder.projects.map((entry, entryIndex) => (
                            <button
                              key={`${entry.name}-${entry.place}`}
                              type="button"
                              className="project-binder-entry"
                              aria-pressed={activeProjectEntry === entryIndex}
                              onClick={() => openProjectEntry(entryIndex)}
                            >
                              {entry.service ? entry.name : entry.place.split(" · ")[0]}
                            </button>
                          ))}
                        </div>
                      )}

                      <div className="project-binder-gallery">
                        <div className="project-binder-photo">
                          <Image
                            key={activeEntry.images[activeProjectImage]}
                            src={activeEntry.images[activeProjectImage]}
                            alt={`${activeEntry.name}, ${activeEntry.place}, imagen ${activeProjectImage + 1}`}
                            fill
                            sizes="(max-width: 900px) 80vw, (max-width: 1450px) 42vw, 660px"
                            className="project-binder-photo-image"
                          />
                          {activeEntry.images.length > 1 && (
                            <>
                              <button
                                type="button"
                                className="project-binder-photo-nav project-binder-photo-prev"
                                aria-label="Imagen anterior"
                                onClick={() => setActiveProjectImage((current) => (current - 1 + activeEntry.images.length) % activeEntry.images.length)}
                              >
                                <ArrowLeft aria-hidden="true" />
                              </button>
                              <button
                                type="button"
                                className="project-binder-photo-nav project-binder-photo-next"
                                aria-label="Imagen siguiente"
                                onClick={() => setActiveProjectImage((current) => (current + 1) % activeEntry.images.length)}
                              >
                                <ArrowRight aria-hidden="true" />
                              </button>
                              <span className="project-binder-photo-count">
                                {activeProjectImage + 1} / {activeEntry.images.length}
                              </span>
                            </>
                          )}
                        </div>

                        {activeEntry.images.length > 1 && (
                          <div className="project-binder-thumbs" key={`thumbs-${activeProjectEntry}`} aria-label="Imágenes del proyecto">
                            {activeEntry.images.map((image, imageIndex) => (
                              <button
                                key={image}
                                type="button"
                                className="project-binder-thumb"
                                aria-label={`Ver imagen ${imageIndex + 1}`}
                                aria-pressed={activeProjectImage === imageIndex}
                                onClick={() => setActiveProjectImage(imageIndex)}
                              >
                                <Image src={image} alt="" fill sizes="96px" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="project-binder-card" key={`card-${activeProjectEntry}`}>
                        <div className="project-binder-card-heading">
                          <span className="project-binder-number">{String(activeProjectFolder + 1).padStart(2, "0")}.</span>
                          <div>
                            <span className="project-binder-category">{activeFolder.subtitle}</span>
                            <h3>{activeEntry.name}</h3>
                          </div>
                        </div>
                        <span className="project-binder-location">
                          {activeEntry.place}{activeEntry.size ? ` · ${activeEntry.size}` : ""}
                        </span>
                        {activeEntry.service && (
                          <p className="project-binder-service"><strong>Servicio:</strong> {activeEntry.service}</p>
                        )}
                        <p>{activeEntry.description ?? activeFolder.description}</p>
                        <Link href="/portfolio" className="project-binder-link">
                          Ver todos los proyectos <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>

                    {projectPageTurn > 0 && <div className="project-binder-flip" key={`flip-${projectPageTurn}`} aria-hidden="true" />}
                  </div>
                </div>
              </div>

              <p className="project-folders-hint" aria-live="polite">
                {String(activeProjectFolder + 1).padStart(2, "0")} / {String(projectFolders.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section text-[#2b101d]">
          <div className="contact-paper relative mx-auto">
            <div className="contact-intro relative grid gap-6 px-6 py-10 text-[#f0e7bd] sm:grid-cols-2 sm:items-center sm:gap-10 sm:px-10 sm:py-12 lg:px-16">
              <div className="contact-intro-left relative z-10 text-center">
                <Image
                  src="/logos/icono-negro.png"
                  alt=""
                  width={700}
                  height={507}
                  aria-hidden="true"
                  className="contact-intro-watermark"
                />
                <h2 className="contact-intro-wordmark">
                  <span>ESPACIOS</span>
                  <span>QUE CONVIERTEN</span>
                </h2>
                <p className="contact-intro-lead">
                  Cuéntanos sobre ese espacio comercial, oficina o franquicia que quieres hacer más rentable.
                </p>
              </div>
              <div className="contact-intro-right relative z-10 text-center">
                <h3 className="contact-intro-highlight">Analizamos tu caso</h3>
                <p className="contact-intro-sub">
                  y te decimos qué se puede hacer antes de intervenirlo.
                </p>
              </div>
            </div>

            {!isContactFormOpen ? (
              <div ref={contactStageRef} className="contact-stage relative flex items-center justify-center">
                <div className="contact-bars" aria-hidden="true">
                  {Array.from({ length: 22 }, (_, index) => (
                    <span key={index} className="contact-bar" />
                  ))}
                </div>
                <div className="contact-stage-content relative text-center">
                  <button
                    type="button"
                    aria-expanded={false}
                    aria-controls="contact-form-panel"
                    className="contact-cta"
                    onClick={() => {
                      setIsContactFormOpen(true)
                      window.requestAnimationFrame(() => {
                        document.getElementById("contact-form-panel")?.scrollIntoView({ behavior: "smooth", block: "center" })
                      })
                    }}
                  >
                    Agenda tu diagnóstico
                  </button>
                </div>
              </div>
            ) : (
              <div id="contact-form-panel" className="contact-form-panel relative z-10 mx-auto max-w-4xl px-6 py-10 sm:px-10 sm:py-14">
                <div className="mb-8 flex justify-end">
                  <button
                    type="button"
                    className="contact-close"
                    onClick={() => {
                      setIsContactFormOpen(false)
                      setIsContactFormSubmitted(false)
                    }}
                  >
                    Cerrar <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="mb-10 max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2b101d]/60">Primer paso</p>
                  <h2 className="mt-3 font-title text-4xl italic sm:text-5xl">Cuéntanos tu caso</h2>
                  <p className="mt-5 text-base leading-7 text-[#2b101d]/80 sm:text-lg">
                    Cuéntanos sobre ese espacio comercial, oficina o franquicia que quieres hacer más rentable. Analizamos tu caso y te decimos qué se puede hacer antes de intervenirlo.
                  </p>
                </div>

                {isContactFormSubmitted ? (
                  <div role="status" className="border border-[#2b101d]/20 bg-[#2b101d] px-6 py-8 text-[#f0e7bd] sm:px-9">
                    <p className="font-title text-3xl italic">Gracias.</p>
                    <p className="mt-3 leading-7">Hemos recibido tu caso y te contactamos pronto.</p>
                  </div>
                ) : (
                  <form
                    className="grid gap-x-6 gap-y-5 sm:grid-cols-2"
                    onSubmit={(event) => {
                      event.preventDefault()
                      setIsContactFormSubmitted(true)
                    }}
                  >
                    <div className="contact-field">
                      <label htmlFor="contact-name">Nombre</label>
                      <Input id="contact-name" name="name" autoComplete="name" placeholder="Tu nombre" required />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="contact-email">Email</label>
                      <Input id="contact-email" name="email" type="email" autoComplete="email" placeholder="tu@email.com" required />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="contact-phone">Teléfono</label>
                      <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+34 600 000 000" required />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="contact-city">Ciudad</label>
                      <Input id="contact-city" name="city" autoComplete="address-level2" placeholder="¿Dónde está el espacio?" required />
                    </div>
                    <div className="contact-field sm:col-span-2">
                      <label htmlFor="contact-space-type">Tipo de espacio</label>
                      <select id="contact-space-type" name="spaceType" defaultValue="" required>
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="local-comercial">Local comercial</option>
                        <option value="oficina">Oficina</option>
                        <option value="franquicia">Franquicia</option>
                        <option value="stand-pop-up">Stand-pop-up</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div className="contact-field sm:col-span-2">
                      <label htmlFor="contact-case">Cuéntanos tu caso</label>
                      <Textarea id="contact-case" name="case" placeholder="¿Qué te gustaría mejorar de tu espacio?" className="min-h-36 resize-y" required />
                    </div>
                    <div className="sm:col-span-2">
                      <Button type="submit" className="contact-submit">
                        Enviar <span aria-hidden="true">→</span>
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer text-[#2b101d]">
        <div className="site-footer-inner">
          <div className="footer-directory text-[#f0e7bd]">
            <nav aria-label="Servicios del estudio">
              <h2 className="footer-directory-heading">Servicios</h2>
              <ul className="mt-2 space-y-0.5">
                {["Locales comerciales", "Oficinas", "Franquicias", "Stands & pop-ups", "Hospitality"].map((service) => (
                  <li key={service}>
                    <Link href="#services-carousel" className="footer-directory-link">{service}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Información del estudio">
              <h2 className="footer-directory-heading">Estudio</h2>
              <ul className="mt-2 space-y-0.5">
                <li><Link href="#process-wheel-title" className="footer-directory-link">Método</Link></li>
                <li><Link href="#projects" className="footer-directory-link">Proyectos</Link></li>
                <li><Link href="#contact" className="footer-directory-link">Contacto</Link></li>
              </ul>
            </nav>
          </div>

          <div className="footer-folder-panel bg-[#f0e7bd]">
            <div className="footer-brand-row">
              <Link href="/" className="inline-flex" aria-label="DEFRENTE, inicio">
                <Image
                  src="/logos/logo_nuevo.png"
                  alt="DEFRENTE"
                  width={2402}
                  height={1260}
                  className="footer-logo h-auto"
                />
              </Link>
              <div className="footer-socials" role="group" aria-label="Redes sociales">
                <span aria-label="Instagram" title="Instagram"><Instagram className="h-6 w-6" /></span>
                <span aria-label="Facebook" title="Facebook"><Facebook className="h-6 w-6" /></span>
                <span aria-label="LinkedIn" title="LinkedIn"><Linkedin className="h-6 w-6" /></span>
              </div>
            </div>

            <div className="footer-newsletter-block">
              <h2 className="footer-newsletter-title">Newsletter</h2>
              <div
                className="newsletter-signup mt-3 flex min-h-10 w-full items-stretch gap-1"
                onMouseEnter={() => setIsNewsletterFieldActive(true)}
                onMouseLeave={(event) => {
                  if (!event.currentTarget.contains(document.activeElement)) {
                    setIsNewsletterFieldActive(false)
                  }
                }}
                onFocusCapture={() => setIsNewsletterFieldActive(true)}
                onBlurCapture={(event) => {
                  const nextTarget = event.relatedTarget
                  if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                    setIsNewsletterFieldActive(false)
                  }
                }}
              >
                <label className="sr-only" htmlFor="newsletter-email">Tu email</label>
                <input
                  id="newsletter-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={newsletterEmail}
                  onChange={(event) => {
                    setNewsletterEmail(event.currentTarget.value)
                    setIsNewsletterEmailValid(event.currentTarget.validity.valid && event.currentTarget.value.trim().length > 0)
                  }}
                  placeholder="email"
                  className="min-w-0 flex-1 border border-[#2b101d]/15 bg-[#2b101d] px-3 py-2 text-sm text-[#f0e7bd] outline-none transition-colors placeholder:text-[#f0e7bd]/50 focus:border-[#9c7953] focus:ring-1 focus:ring-[#9c7953]"
                />
                <button
                  type="button"
                  tabIndex={isNewsletterFieldActive || isNewsletterEmailValid ? 0 : -1}
                  aria-hidden={!isNewsletterFieldActive && !isNewsletterEmailValid}
                  className={`newsletter-subscribe shrink-0 bg-[#2b101d] px-5 text-sm font-medium text-[#f0e7bd] transition-all duration-300 hover:bg-[#482238] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b101d] ${
                    isNewsletterFieldActive || isNewsletterEmailValid ? "newsletter-subscribe-visible" : ""
                  }`}
                >
                  Suscribirse
                </button>
              </div>
            </div>

            <p className="footer-newsletter-description">
              Ideas de retail que aumentan ventas, una vez al mes.
            </p>
          </div>

          <div className="footer-legal text-[#f0e7bd]">
            <p>© 2026 DEFRENTE · Europa y Latinoamérica</p>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <a href="mailto:defrente.es@gmail.com" className="transition-colors hover:text-white">defrente.es@gmail.com</a>
              <a href="tel:+34608756113" className="transition-colors hover:text-white">+34 608 75 6113</a>
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
