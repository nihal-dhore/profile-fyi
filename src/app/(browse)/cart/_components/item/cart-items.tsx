"use client";
import { useContext } from "react";
import CartItem from "./cart-item";
import { CartContext } from "@/lib/context";

export default function CartItems() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <></>;
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
}
