const cornerService = "Consultoría estratégica retail, diseño e implantación de corner para expansión de franquicia."
const expansionService = "Consultoría estratégica retail, diseño y ejecución de tienda para expansión de franquicia."
const compactDescription =
  "Desarrollo de un formato compacto orientado a maximizar la exposición de producto en pocos metros cuadrados. La propuesta mejora la visibilidad, facilita la venta cruzada y organiza el recorrido para favorecer una compra más ágil y contribuir al incremento del ticket medio."
const categoriesDescription =
  "Diseño de un espacio que integra distintas categorías dentro de una experiencia de compra coherente. La distribución favorece el descubrimiento de producto, la venta cruzada y una mayor permanencia del cliente, apoyando el crecimiento del ticket medio."

const projects = [
  {
    name: "Corner Liverpool",
    location: "Reino Unido",
    year: 2026,
    area: 76,
    photos: ["LIVERPOOL/L1.png","LIVERPOOL/L2.png"],
    service: "Diseño e implantación del primer corner para la expansión de la franquicia en Reino Unido.",
    description: "Diseño de un espacio comercial capaz de destacar dentro del entorno de la tienda departamental y reforzar la presencia de marca. La propuesta utiliza materiales luminosos, geometrías reconocibles y una distribución orientada a atraer la atención, mejorar la exposición del producto e incentivar la compra.",
  },
  {
    name: "EYEWEAR DF",
    location: "México",
    year: 2025,
    area: 36,
    photos: ["EYEWEAR DF/Quiosco de gafas Miramira en rosa y dorado.png"],
    service: "Diseño e implantación de corner comercial para expansión de franquicia y diversificación de producto.",
    description: "Desarrollo de un nuevo formato de exposición para incorporar la categoría eyewear dentro del punto de venta. La propuesta organiza el producto por familias, mejora su visibilidad y facilita la venta cruzada, apoyando la estrategia de expansión de la marca y el aumento del ticket medio.",
  },
  {
    name: "Hélice DF",
    location: "México",
    year: 2024,
    area: 16,
    photos: ["Hélice DF/Quiosco de gafas Miramira en el centro comercial.png"],
    service: cornerService,
    description: compactDescription,
  },
  {
    name: "Modular",
    location: "México",
    year: 2025,
    area: 12,
    photos: ["Modular/Quiosco de gafas Miramira en rosa elegante.png"],
    service: cornerService,
    description: compactDescription,
  },
  {
    name: "Tienda concepto",
    location: "Rumanía",
    year: 2025,
    area: 38,
    photos: ["Tienda concepto.png"],
    service: expansionService,
    description: categoriesDescription,
  },
  {
    name: "Tienda estrella",
    location: "Praga",
    year: 2026,
    area: 84,
    photos: ["Tienda concepto/Óptica moderna en tonos cálidos.png"],
    service: expansionService,
    description: categoriesDescription,
  },
  {
    name: "Tienda Prague",
    location: "Praga",
    year: 2026,
    area: 92,
    photos: ["PRAGA/1.png","PRAGA/2.png","PRAGA/render_vista4_v1.png"],
    service: expansionService,
    description: "Desarrollo de diseño de tienda replicable para nuevas aperturas, generando una experiencia de compra coherente. La distribución favorece el descubrimiento de producto, la venta cruzada y una mayor permanencia del cliente, apoyando el crecimiento del ticket medio.",
  },
  {
    name: "Tienda uno",
    location: "Puerto Banús",
    year: 2023,
    area: 94,
    photos: ["Tienda uno/1.webp","Tienda uno/2.webp","Tienda uno/3.webp","Tienda uno/4.webp"],
    service: expansionService + " Testeo de nuevos diseños de mobiliario al público, resultado 100% favorable.",
    description: "Búsqueda de extensión y ampliación de cartera de clientes mediante un diseño adaptado al entorno implantado. Diseño de un espacio que integra distintas categorías dentro de una experiencia de compra coherente apoyando el crecimiento del ticket medio.",
  },
  {
    name: "Tienda Chipre",
    location: "Chipre",
    year: 2026,
    area: 74,
    photos: ["Tienda chipre.png"],
    service: expansionService + " Testeo de nuevos materiales, resultado 100% favorable.",
    description: "Búsqueda de extensión y ampliación de cartera de clientes mediante un diseño adaptado al entorno implantado. Diseño de un espacio que integra distintas categorías dentro de una experiencia de compra coherente apoyando el crecimiento del ticket medio. Uso de materiales propios de su entorno.",
  },
]

export const standProjectGroups = [
  { title: "Stands y corners", projects: projects.slice(0, 4) },
  { title: "Expansión de franquicias", projects: projects.slice(4) },
]

export function standPhotoPath(photo: string) {
  return "/servicios%20paginas/STAND/" + photo.split("/").map(encodeURIComponent).join("/")
}
