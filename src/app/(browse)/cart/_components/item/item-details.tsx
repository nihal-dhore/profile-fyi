"use client";

import ItemQuantity from "./item-quantity";

interface ItemDetailsProps {
  id: number;
  name: string;
  description: string;
  actualPrice: string;
  discountedPrice?: string;
  quantity: number;
  discount?: number;
}

export default function ItemDetails({
  id,
  name,
  description,
  actualPrice,
  discountedPrice,
  quantity,
  discount,
}: ItemDetailsProps) {
  return (
    <div className="min-w-0 flex flex-col gap-1.5 justify-center">
      <div className="text-sm md:text-base font-medium">{name}</div>
      <div className="text-xs text-gray-500 truncate min-w-0">
        {description}
      </div>

      <ItemQuantity id={id} quantity={quantity} />

      {discountedPrice ? (
        <div className="text-xs flex items-center gap-2">
          <span className="text-xs md:text-sm">{discountedPrice}</span>
          <span className="line-through decoration-gray-500 text-gray-500">
            {actualPrice}
          </span>
          <span className="text-red-500 text-xs md:text-sm">-{discount}%</span>
        </div>
      ) : (
        <span className="text-xs md:text-sm">{actualPrice}</span>
      )}
    </div>
  );
}
