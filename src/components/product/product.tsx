"use client";
import { Product } from "@/lib/types";
import { formatRupees } from "@/lib/utils";
import CartButton from "@/components/product/cart-button";
import DiscountCoupon from "@/components/product/discount-coupon";
import ProductDetails from "@/components/product/product-details";
import ProductImage from "@/components/product/product-image";

export default function ProductComponent({
  id,
  name,
  description,
  price,
  image,
  discount,
}: Product) {
  const actualPrice = formatRupees(price / 100);
  const discountedPrice = discount
    ? formatRupees((price - (price * discount) / 100) / 100)
    : undefined;

  return (
    <div className="relative group flex flex-col justify-between items-center max-h-[390px] lg:max-h-[425px] bg-Cultured rounded-3xl overflow-hidden shadow-sleek">
      <DiscountCoupon discount={discount} />
      <ProductImage image={image} />
      <CartButton
        product={{
          id,
          name,
          price,
          description,
          image,
          discount,
        }}
      />
      <ProductDetails
        name={name}
        description={description}
        actualPrice={actualPrice}
        discountedPrice={discountedPrice}
      />
    </div>
  );
}
