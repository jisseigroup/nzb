import Image from "next/image";
import { getGalleryImages } from "@/data/gallery";

export function GalleryMasonry() {
  const images = getGalleryImages();

  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {images.map((img, i) => (
        <figure
          key={`${img.src}-${i}`}
          className="mb-5 break-inside-avoid overflow-hidden rounded-sm border border-brand/10 bg-cream shadow-[0_16px_40px_-20px_rgba(15,107,61,0.2)]"
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-auto w-full object-cover transition duration-700 hover:scale-[1.02]"
          />
        </figure>
      ))}
    </div>
  );
}
