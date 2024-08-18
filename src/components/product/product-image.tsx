"use client";
import Image, { StaticImageData } from "next/image";

interface ProductImageProps {
  image: StaticImageData;
}

export default function ProductImage({ image }: ProductImageProps) {
  return (
    <div className="w-full bg-Cultured flex justify-center px-5 sm:px-8 md:px-10 lg:px-auto py-20 xl:py-28 overflow-hidden">
      <Image src={image} alt="name" className="object-contain" />
    </div>
  );
}
