import Image, { StaticImageData } from "next/image";

interface ItemImageProps {
  image: StaticImageData;
}

export default function ItemImage({ image }: ItemImageProps) {
  return (
    <div className="max-w-24 md:max-w-36 flex items-center sm:p-2 overflow-hidden">
      <Image src={image} alt="name" className="object-contain" />
    </div>
  );
}
