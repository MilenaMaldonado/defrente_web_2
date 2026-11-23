const roomService = "Diseño de áreas de descanso y estancia para sector hotelero."
const roomDescription =
  "Una habitación pensada para el confort y la funcionalidad. El mobiliario de líneas suaves, los materiales cálidos y una distribución equilibrada crean un ambiente acogedor y coherente con la identidad del hotel."

export const hospitalityProjects = [
  {
    name: "Hotel Santo Domingo",
    location: "Madrid, España",
    year: 2023,
    area: 285,
    photos: ["hotel-santo-domingo/1.png", "hotel-santo-domingo/2.png", "hotel-santo-domingo/3.webp", "hotel-santo-domingo/4.webp"],
    service: "Diseño de lobby y áreas de recepción para hotel.",
    description: "Diseñamos un lobby que mejora la llegada del huésped y refuerza la identidad del hotel. La vegetación es la protagonista y aporta frescura, confort y una conexión natural en pleno centro de Madrid.",
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
    description: "Un espacio de llegada que mejora la experiencia del huésped desde el primer contacto. La vegetación, la iluminación cálida y una composición ligera dan identidad y suavizan la transición hacia el resto del alojamiento.",
  },
]

export function hospitalityPhotoPath(photo: string) {
  return "/servicios%20paginas/HOSPITALY/" + photo.split("/").map(encodeURIComponent).join("/")
}
