"use client"

import { useState } from "react"
import Image from "next/image"

interface ProjectGalleryProps {
  name: string
  photos: string[]
}

export function ProjectGallery({ name, photos }: ProjectGalleryProps) {
  const [activePhoto, setActivePhoto] = useState(0)

  return (
    <div className={photos.length > 1 ? "grid gap-1 bg-[#2b101d] sm:grid-cols-[minmax(0,1fr)_3.5rem]" : "bg-[#2b101d]"}>
      <div className="relative aspect-[16/9] min-w-0 bg-[#221019]">
        <Image
          src={photos[activePhoto]}
          alt={`${name} · Vista ${activePhoto + 1}`}
          fill
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 80vw, 42vw"
          className="object-contain"
        />
      </div>
      <div role="group" aria-label={`Fotos de ${name}`} hidden={photos.length === 1} className={photos.length > 1 ? "flex gap-1 sm:flex-col" : undefined}>
        {photos.map((photo, index) => (
          <button
            key={photo}
            type="button"
            aria-label={`Mostrar vista ${index + 1} de ${name}`}
            aria-pressed={index === activePhoto}
            onClick={() => setActivePhoto(index)}
            className="relative min-h-10 flex-1 overflow-hidden opacity-65 transition-opacity hover:opacity-100 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9bd8ef] aria-pressed:opacity-100 aria-pressed:after:absolute aria-pressed:after:inset-0 aria-pressed:after:border-2 aria-pressed:after:border-[#f0e7bd] aria-pressed:after:content-['']"
          >
            <Image src={photo} alt="" fill sizes="(max-width: 639px) 30vw, 64px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
