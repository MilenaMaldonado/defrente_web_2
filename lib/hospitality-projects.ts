const roomService = "Diseño de áreas de descanso y estancia para sector hotelero."
const roomDescription =
  "Diseño de una habitación orientada a mejorar el confort, la funcionalidad y la experiencia del huésped. La propuesta integra mobiliario de líneas suaves, materiales cálidos y una distribución equilibrada para crear un ambiente acogedor, contemporáneo y coherente con la identidad del hotel."

export const hospitalityProjects = [
  {
    name: "Hotel Santo Domingo",
    location: "Madrid, España",
    year: 2023,
    area: 285,
    photos: ["hotel-santo-domingo/1.png", "hotel-santo-domingo/2.png", "hotel-santo-domingo/3.webp", "hotel-santo-domingo/4.webp"],
    service: "Diseño de lobby y áreas de recepción para hotel.",
    description: "Diseño de un lobby orientado a mejorar la experiencia de llegada y reforzar la identidad del hotel. La propuesta integra vegetación como elemento protagonista para aportar frescura, confort y una conexión más natural dentro del entorno urbano de Madrid.",
  },
  {
    name: "Hotel Santo Domingo · Habitación tipo A",
    location: "Madrid, España",
    year: 2023,
    area: 25,
    photos: ["habitacion-tipo-a/1.png"],
    service: roomService,
    description: roomDescription,
  },
  {
    name: "Hotel Santo Domingo · Habitación tipo B",
    location: "Madrid, España",
    year: 2023,
    area: 30,
    photos: ["habitacion-tipo-b/1.png"],
    service: roomService,
    description: roomDescription,
  },
  {
    name: "Torre Hermosilla",
    location: "Madrid, España",
    year: 2023,
    area: 82,
    photos: ["torre-hermosilla/1.webp", "torre-hermosilla/2.webp", "torre-hermosilla/3.webp", "torre-hermosilla/4.webp"],
    service: "Diseño hotelero para Airbnb.",
    description: "Convertimos una vivienda en un alojamiento turístico con estándar hotelero. Una zona de día abierta, materiales cálidos y luz natural crean una estancia cómoda y fácil de mantener.",
  },
  {
    name: "Lobby distribuidor · Airbnb",
    location: "Madrid, España",
    year: 2024,
    area: 20,
    photos: ["lobby-airbnb/1.png"],
    service: "Diseño de lobby distribuidor y espacio de transición para alojamiento turístico.",
    description: "Diseño de un espacio de llegada y distribución que mejora la experiencia del huésped desde el primer contacto. La propuesta integra vegetación, iluminación cálida y una composición ligera para aportar identidad, frescura y una transición más agradable hacia las distintas áreas del alojamiento.",
  },
  {
    name: "Cafetería Ovejitas Negras",
    location: "Quito",
    year: 2025,
    area: 152,
    photos: ["cafeteria-ovejitas-negras/1.webp", "cafeteria-ovejitas-negras/2.webp"],
    service: "Diseño de cafetería y espacios de networking empresarial.",
    description: "Diseño de un concepto híbrido que integra cafetería, áreas de networking y espacios de encuentro para jóvenes emprendedores. La propuesta busca favorecer la conexión entre usuarios, el intercambio de ideas y la creación de nuevas oportunidades, incorporando zonas flexibles para reuniones, colaboración y desarrollo de iniciativas empresariales.",
  },
]

export function hospitalityPhotoPath(photo: string) {
  return "/servicios%20paginas/HOSPITALY/" + photo.split("/").map(encodeURIComponent).join("/")
}
