"use client";
interface ProductDetailsProps {
  name: string;
  description: string;
  actualPrice: string;
  discountedPrice?: string;
}

export default function ProductDetails({
  name,
  description,
  actualPrice,
  discountedPrice,
}: ProductDetailsProps) {
  return (
    <div className="w-full bottom-0 px-5 pb-5 md:px-10 md:pb-10 bg-Cultured flex flex-col justify-center">
      <div className="text-xs md:text-sm">{name}</div>
      <div className="flex items-center justify-between gap-5">
        <div className="text-xs md:text-sm text-gray-500 truncate">
          {description}
        </div>
        {discountedPrice ? (
          <div className="text-xs relative">
            <span className="line-through text-gray-500 decoration-red-500">
              {actualPrice}
            </span>
            <span className="absolute -top-5 right-1/2 translate-x-1/2 md:text-sm text-Cadet">
              {discountedPrice}
            </span>
          </div>
        ) : (
          <div className="text-xs">{actualPrice}</div>
        )}
      </div>
    </div>
  );
}
