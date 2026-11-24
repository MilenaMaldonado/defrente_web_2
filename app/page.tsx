"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { standPhotoPath, standProjectGroups } from "@/lib/stand-projects"
import { hospitalityPhotoPath, hospitalityProjects } from "@/lib/hospitality-projects"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Instagram, Linkedin, Menu, X } from "lucide-react"

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

// Mapa: un pin por país, sin fotos. "side" indica a qué lado va el nombre.
const projectMapCountries: { name: string; cities?: string; x: number; y: number; side?: "left" | "right" }[] = [
  { name: "México", cities: "Ciudad de México, Tulum", x: 87, y: 60 },
  { name: "Ecuador", cities: "Quito", x: 155, y: 232 },
  { name: "Irlanda", cities: "Galway", x: 764, y: 141, side: "left" },
  { name: "España", cities: "Madrid, Marbella, San Sebastián, Valencia, La Coruña, Pontevedra", x: 762, y: 395, side: "left" },
  { name: "Francia", x: 872, y: 274, side: "left" },
  { name: "Suiza", x: 958, y: 310, side: "left" },
  { name: "Polonia", x: 1108, y: 205 },
  { name: "Chequia", cities: "Praga", x: 1066, y: 255 },
  { name: "Austria", cities: "Viena", x: 1066, y: 294 },
  { name: "Rumanía", x: 1200, y: 331 },
  { name: "Serbia", x: 1135, y: 371, side: "left" },
  { name: "Macedonia del Norte", x: 1160, y: 416 },
  { name: "Chipre", x: 1328, y: 517, side: "left" },
]

const processPhases = [
  {
    category: "Primera fase",
    title: "Diagnóstico estratégico",
    description: "Estudiamos tu proyección de ventas, tu cliente, tu producto y tu recorrido de compra. Definimos qué debe lograr el espacio antes de dibujar una línea.",
  },
  {
    category: "Segunda fase",
    title: "Diseño",
    description: "Traducimos la estrategia en layout y recorrido, distribución, materiales, mobiliario especificado, iluminación y frente.",
  },
  {
    category: "Tercera fase",
    title: "Ejecución y resultados",
    description: "Ejecutamos o entregamos listo para ejecutar, y auditamos el montaje. El resultado se mide en el negocio.",
  },
]

// Fotos de la rueda: las 3 fases se repiten a lo largo de los 9 sectores
const processWheelImages = [
  "/rueda/25.jpg",
  "/rueda/26.jpg",
  "/rueda/27.jpg",
  "/rueda/28.jpg",
  "/rueda/29.jpg",
  "/rueda/30.jpg",
  "/rueda/31.jpg",
  "/rueda/32.jpg",
  "/rueda/33.jpg",
]

function getProcessSectorClipPath(index: number) {
  const count = processWheelImages.length
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
  // Partes de un proyecto (p. ej. lobby y habitaciones): cada una empieza en la imagen "from"
  sections?: { label: string; from: number; size?: string; service?: string; description?: string }[]
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

// Las habitaciones tipo A y B se muestran dentro de "Hotel Santo Domingo"
const hospitalityPortfolio = hospitalityProjects
  .filter(({ name }) => !name.startsWith("Hotel Santo Domingo · "))
  .map(({ name, location, year, area, photos, service, description }): ProjectEntry => {
    const rooms = hospitalityProjects.filter((project) => project.name.startsWith(`${name} · `))
    let nextImage = photos.length
    const sections = rooms.length > 0
      ? [
          { label: "Lobby y recepción", from: 0, size: area + " m²", service, description },
          ...rooms.map((room) => {
            const section = {
              label: room.name.slice(name.length + 3),
              from: nextImage,
              size: room.area + " m²",
              service: room.service,
              description: room.description,
            }
            nextImage += room.photos.length
            return section
          }),
        ]
      : undefined
    return {
      name,
      place: location + ", " + year,
      size: area + " m²",
      service,
      description,
      images: [...photos, ...rooms.flatMap((room) => room.photos)].map(hospitalityPhotoPath),
      sections,
    }
  })

const projectFolders: {
  name: string
  subtitle: string
  color: string
  textColor: string
  description: string
  projects: ProjectEntry[]
}[] = [
  {
    name: "Comercial",
    subtitle: "Arquitectura comercial · Retail",
    color: "#3f1f2c",
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
      ...standPortfolioGroups[1],
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
      {
        name: "Área infantil · Biblioteca",
        place: "Quito · Ecuador",
        size: "65 m²",
        description: "Desarrollo de espacio recreativo infantil, diseño y planificación.",
        images: imageSeries("/comercial/quito", ["1", "2", "3", "4"]),
      },
    ],
  },
  {
    name: "Stands",
    subtitle: "Stands, corners & pop-ups",
    color: "#93626f",
    textColor: "#fffaf3",
    description: "Formatos temporales que hacen visible tu marca y permiten llevar la experiencia de compra a nuevos espacios.",
    projects: [
      { name: "Tulum", place: "Tulum · México", images: imageSeries("/corner_popup/tulum", ["1", "1.2", "1.3", "1.4"]) },
      { name: "México DF", place: "México DF", images: imageSeries("/corner_popup/mexico1", ["1", "2"]) },
      ...standPortfolioGroups[0],
    ],
  },
  {
    name: "Hospitality",
    subtitle: "Hotelería · Hospitality",
    color: "#a47d86",
    textColor: "#fffaf3",
    description: "Lugares de estancia acogedores que equilibran bienestar, funcionalidad y una experiencia memorable.",
    projects: hospitalityPortfolio,
  },
]

const beforeAfterCases = [
  {
    name: "tienda MiraMira",
    before: "/antes_despues/Miramira_ANTES_separada.png",
    after: "/antes_despues/Miramira_DESPUES_separada.png",
  },
  {
    name: "cafetería",
    before: "/antes_despues/Cafeteria_ANTES.png",
    after: "/antes_despues/Cafeteria_DESPUES.png",
  },
]

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeServiceCard, setActiveServiceCard] = useState(0)
  const [processTurn, setProcessTurn] = useState(0)
  const processTouchStartX = useRef<number | null>(null)
  const processStageRef = useRef<HTMLDivElement | null>(null)
  const [isProcessPaused, setIsProcessPaused] = useState(false)
  const [isProcessVisible, setIsProcessVisible] = useState(false)
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
  const [activeBeforeAfter, setActiveBeforeAfter] = useState(0)
  const activeProcessPhase = ((processTurn % processPhases.length) + processPhases.length) % processPhases.length
  const activeProcessSector = ((processTurn % processWheelImages.length) + processWheelImages.length) % processWheelImages.length

  // La rueda solo gira cuando está en pantalla
  useEffect(() => {
    const stage = processStageRef.current
    if (!stage) return
    const observer = new IntersectionObserver(([entry]) => setIsProcessVisible(entry.isIntersecting))
    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

  // Gira sola cada 4 s; se detiene con el ratón encima o al usarla, y cuenta de nuevo tras cada giro manual
  useEffect(() => {
    if (isProcessPaused || !isProcessVisible) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = window.setTimeout(() => setProcessTurn((turn) => turn + 1), 4000)
    return () => window.clearTimeout(timer)
  }, [processTurn, isProcessPaused, isProcessVisible])

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
        const previousCycle = Math.floor(phase / (Math.PI * 2))
        phase += delta * speed
        // Al terminar una pasada completa (antes y después) pasa al siguiente caso
        if (Math.floor(phase / (Math.PI * 2)) > previousCycle) {
          setActiveBeforeAfter((current) => (current + 1) % beforeAfterCases.length)
        }
        setPosition(midpoint + amplitude * Math.sin(phase))
      }
      if (visible && !reducedMotion) animationFrame = window.requestAnimationFrame(loop)
    }

    // Sin animación automática, los casos se alternan cada 10 segundos
    const reducedMotionTimer = reducedMotion
      ? window.setInterval(() => {
          setActiveBeforeAfter((current) => (current + 1) % beforeAfterCases.length)
        }, 10000)
      : undefined

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
      window.clearInterval(reducedMotionTimer)
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

  const openProjectEntry = (index: number) => {
    setActiveProjectEntry(index)
    setActiveProjectImage(0)
  }

  const activeFolder = projectFolders[activeProjectFolder]
  const activeEntry = activeFolder.projects[activeProjectEntry] ?? activeFolder.projects[0]
  const activeSection = activeEntry.sections?.filter((section) => section.from <= activeProjectImage).at(-1)

  const serviceCards = [
    {
      number: "01",
      image: "/servicios%20tarjetas/Portada%20locales.png",
      imageAlt: "Interior de una joyería con exhibidores",
      category: "SERVICIO",
      title: "Consultoría",
      forWho: "Marcas con equipo propio de obra o proveedores, o que quieren decidir antes de invertir.",
      includes: "Diagnóstico del local, estrategia de recorrido y zonificación, diseño (layout, mobiliario, iluminación, materialidad), manual de tienda.",
      deliverable: "Documentos y criterios listos para ejecutar.",
    },
    {
      number: "02",
      image: "/comercial/quito1/2.webp",
      imageAlt: "Interior comercial con mesas y sillas",
      category: "SERVICIO",
      title: "Ejecución",
      forWho: "Marcas que ya tienen un concepto definido y necesitan llevarlo al local.",
      includes: "Implementación, coordinación de proveedores, supervisión de obra, adaptación a locales reales y checklist de control.",
      deliverable: "Local construido según diseño.",
    },
    {
      number: "03",
      image: "/servicios%20tarjetas/Portada%20Corporativo.png",
      imageAlt: "Oficina con zona de estar y mesas de trabajo",
      category: "SERVICIO",
      title: "360°",
      forWho: "Marcas que quieren un solo responsable de principio a fin.",
      includes: "Consultoría + Ejecución + auditoría post-montaje.",
      deliverable: "Local operando y validado.",
    },
  ]

  const openContactForm = () => {
    setIsContactFormOpen(true)
    window.requestAnimationFrame(() => {
      document.getElementById("contact-form-panel")?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

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
            <div className="service-showcase-media">
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
              <ul className="service-showcase-stats" aria-label="Metros cuadrados desarrollados">
                <li>
                  <strong>+1331 m²</strong>
                  <span>desarrollados en retail</span>
                </li>
                <li>
                  <strong>+550 m²</strong>
                  <span>desarrollados en hotelería</span>
                </li>
                <li>
                  <strong>+131 m²</strong>
                  <span>desarrollados en food service</span>
                </li>
              </ul>
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
                        <dl className="service-card-details">
                          <div>
                            <dt>Para quién</dt>
                            <dd>{card.forWho}</dd>
                          </div>
                          <div>
                            <dt>Qué incluye</dt>
                            <dd>{card.includes}</dd>
                          </div>
                          <div>
                            <dt>Entregable</dt>
                            <dd>{card.deliverable}</dd>
                          </div>
                        </dl>
                        <button
                          type="button"
                          tabIndex={position === 0 ? 0 : -1}
                          className="service-card-link"
                          onClick={openContactForm}
                        >
                          Solicitar servicio <span aria-hidden="true">→</span>
                        </button>
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
              <div className="featured-case-photo">
                <div
                  ref={caseCompareRef}
                  className="featured-case-compare"
                  role="slider"
                  aria-label={`Comparar el antes y el después: ${beforeAfterCases[activeBeforeAfter].name}`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={50}
                  tabIndex={0}
                >
                  {beforeAfterCases.map((item, index) => (
                    <div
                      key={item.name}
                      className={`featured-case-slide${index === activeBeforeAfter ? " is-active" : ""}`}
                      aria-hidden={index !== activeBeforeAfter}
                    >
                      <Image
                        src={item.before}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 68vw"
                        className="featured-case-image"
                      />
                      <div className="featured-case-after-image">
                        <Image
                          src={item.after}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 68vw"
                          className="featured-case-image"
                        />
                      </div>
                    </div>
                  ))}
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
            ref={processStageRef}
            className="process-wheel-stage"
            role="group"
            aria-label="Fases de trabajo de DEFRENTE"
            tabIndex={0}
            onMouseEnter={() => setIsProcessPaused(true)}
            onMouseLeave={() => setIsProcessPaused(false)}
            onFocus={() => setIsProcessPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsProcessPaused(false)
            }}
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
              style={{ transform: `rotate(${-processTurn * (360 / processWheelImages.length)}deg)` }}
              aria-hidden="true"
            >
              {processWheelImages.map((image, index) => (
                <div
                  key={image}
                  className={`process-wheel-sector${index === activeProcessSector ? " is-active" : ""}`}
                  style={{
                    clipPath: getProcessSectorClipPath(0),
                    transform: `rotate(${index * (360 / processWheelImages.length)}deg)`,
                  }}
                >
                  <div className="process-wheel-image-frame">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 60vw, 480px"
                      loading={index === activeProcessSector ? "eager" : "lazy"}
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
              src="/fotos_principal/mapa_paises.png"
              alt="Mapa de proyectos de DEFRENTE en Europa y Latinoamérica"
              width={1469}
              height={572}
              sizes="100vw"
              className="process-wheel-map-image"
            />
            {projectMapCountries.map(({ name, cities, x, y, side = "right" }) => (
              <div
                key={name}
                className={`process-map-spot is-${side}`}
                style={{ left: `${(x / 1469) * 100}%`, top: `${(y / 572) * 100}%` }}
                tabIndex={cities ? 0 : undefined}
                aria-label={cities ? `${name}: ${cities}` : name}
              >
                <svg className="process-map-pin" viewBox="0 0 24 32" aria-hidden="true">
                  <path d="M12 0C5.4 0 0 5.3 0 11.9 0 20.8 12 32 12 32s12-11.2 12-20.1C24 5.3 18.6 0 12 0Zm0 16.5a4.6 4.6 0 1 1 0-9.2 4.6 4.6 0 0 1 0 9.2Z" />
                </svg>
                <span className="process-map-country" aria-hidden="true">{name}</span>
                {cities && <span className="process-map-cities" aria-hidden="true">{cities}</span>}
              </div>
            ))}
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
                              {entry.name}
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
                                {activeSection && <> · {activeSection.label}</>}
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
                        {activeEntry.sections && (
                          <div className="project-binder-sections" role="group" aria-label={`Partes de ${activeEntry.name}`}>
                            {activeEntry.sections.map((section) => (
                              <button
                                key={section.label}
                                type="button"
                                className="project-binder-section"
                                aria-pressed={activeSection?.label === section.label}
                                onClick={() => setActiveProjectImage(section.from)}
                              >
                                {section.label}
                              </button>
                            ))}
                          </div>
                        )}
                        <span className="project-binder-location">
                          {activeEntry.place}
                          {(activeSection?.size ?? activeEntry.size) ? ` · ${activeSection?.size ?? activeEntry.size}` : ""}
                        </span>
                        {(activeSection?.service ?? activeEntry.service) && (
                          <p className="project-binder-service">
                            <strong>Servicio:</strong> {activeSection?.service ?? activeEntry.service}
                          </p>
                        )}
                        <p>{activeSection?.description ?? activeEntry.description ?? activeFolder.description}</p>
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
                <span aria-label="TikTok" title="TikTok">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </span>
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
