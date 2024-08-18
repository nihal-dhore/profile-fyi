"use client";

import { CartProduct } from "@/lib/types";
import { formatRupees } from "@/lib/utils";
import ItemImage from "./item-image";
import ItemDetails from "./item-details";

export default function CartItem({
  id,
  name,
  price,
  description,
  image,
  discount,
  quantity,
}: CartProduct) {
  const actualPrice = formatRupees((price * quantity) / 100);
  const discountedPrice = discount
    ? formatRupees(
        (price * quantity - (price * quantity * discount) / 100) / 100,
      )
    : undefined;
  return (
    <div className="group flex relative items-center gap-10 sm:gap-5 lg:gap-10 bg-Cultured rounded-lg py-5 px-5 hover:cursor-pointer shadow-sleek">
      <ItemImage image={image} />
      <ItemDetails
        id={id}
        name={name}
        description={description}
        actualPrice={actualPrice}
        discountedPrice={discountedPrice}
        quantity={quantity}
        discount={discount}
      />
    </div>
  );
}
