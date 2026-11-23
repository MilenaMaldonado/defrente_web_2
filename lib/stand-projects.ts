const cornerService = "Consultoría estratégica retail, diseño e implantación de corner para expansión de franquicia."
const expansionService = "Consultoría estratégica retail, diseño y ejecución de tienda para expansión de franquicia."

const projects = [
  {
    name: "Corner Liverpool",
    location: "Reino Unido",
    year: 2026,
    area: 76,
    photos: ["LIVERPOOL/L1.png","LIVERPOOL/L2.png"],
    service: "Diseño e implantación del primer corner para la expansión de la franquicia en Reino Unido.",
    description: "Un corner con materiales luminosos y una distribución que destaca el producto dentro de la tienda departamental.",
  },
  {
    name: "EYEWEAR DF",
    location: "México",
    year: 2025,
    area: 36,
    photos: ["EYEWEAR DF/Quiosco de gafas Miramira en rosa y dorado.png"],
    service: "Diseño e implantación de corner comercial para expansión de franquicia y diversificación de producto.",
    description: "Un formato de exhibición que incorpora gafas, organiza el producto por familias y facilita la venta cruzada.",
  },
  {
    name: "Hélice DF",
    location: "México",
    year: 2024,
    area: 16,
    photos: ["Hélice DF/Quiosco de gafas Miramira en el centro comercial.png"],
    service: cornerService,
    description: "Un formato compacto que aprovecha el espacio, mejora la visibilidad del producto y agiliza el recorrido.",
  },
  {
    name: "Modular",
    location: "México",
    year: 2025,
    area: 12,
    photos: ["Modular/Quiosco de gafas Miramira en rosa elegante.png"],
    service: cornerService,
    description: "Un corner compacto diseñado para aprovechar cada metro cuadrado y facilitar la compra.",
  },
  {
    name: "Tienda concepto",
    location: "Rumanía",
    year: 2025,
    area: 38,
    photos: ["Tienda concepto.png"],
    service: expansionService,
    description: "Integra distintas categorías y favorece el descubrimiento del producto y la venta cruzada.",
  },
  {
    name: "Tienda estrella",
    location: "Praga",
    year: 2026,
    area: 84,
    photos: ["Tienda concepto/Óptica moderna en tonos cálidos.png"],
    service: expansionService,
    description: "Reúne distintas categorías en un recorrido que invita a descubrir el producto y permanecer en la tienda.",
  },
  {
    name: "Tienda Prague",
    location: "Praga",
    year: 2026,
    area: 92,
    photos: ["PRAGA/1.png","PRAGA/2.png","PRAGA/render_vista4_v1.png"],
    service: expansionService,
    description: "Un diseño de tienda replicable, pensado para mantener una experiencia coherente en nuevas aperturas.",
  },
  {
    name: "Tienda uno",
    location: "Puerto Banús",
    year: 2023,
    area: 94,
    photos: ["Tienda uno/1.webp","Tienda uno/2.webp","Tienda uno/3.webp","Tienda uno/4.webp"],
    service: expansionService,
    description: "Un concepto adaptado al entorno para ampliar la cartera de clientes y probar nuevos diseños de mobiliario.",
  },
  {
    name: "Tienda Chipre",
    location: "Chipre",
    year: 2026,
    area: 74,
    photos: ["Tienda chipre.png"],
    service: expansionService,
    description: "Una tienda que reúne distintas categorías y prueba nuevos materiales propios del entorno.",
  },
]

export const standProjectGroups = [
  { title: "Stands y corners", projects: projects.slice(0, 4) },
  { title: "Expansión de franquicias", projects: projects.slice(4) },
]

export function standPhotoPath(photo: string) {
  return "/servicios%20paginas/STAND/" + photo.split("/").map(encodeURIComponent).join("/")
}
