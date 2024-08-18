"use client";
import Image from "next/image";
import Trash from "#/trash-can.svg";
import { useContext } from "react";
import { BillContext, CartContext } from "@/lib/context";
import { CartProduct } from "@/lib/types";
import { billCalculator } from "@/lib/utils";

interface ItemQuantityProps {
  id: number;
  quantity: number;
}

export default function ItemQuantity({ id, quantity }: ItemQuantityProps) {
  const { cart, setCart } = useContext(CartContext);
  const { setBill } = useContext(BillContext);

  const handleIncreaseQuantity = () => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    cartChange(newCart);
  };

  const handleDecreaseQuantity = () => {
    const newCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    cartChange(newCart);
  };

  const handleRemove = () => {
    const newCart = cart.filter((item) => item.id !== id);
    cartChange(newCart);
  };

  const cartChange = (newCart: CartProduct[]) => {
    setCart(newCart);
    const newBill = billCalculator(newCart);
    setBill(newBill);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="flex items-center text-xs md:text-sm gap-3 my-1">
      <span>Qty</span>
      <div className="flex items-center border rounded-lg">
        <button
          title="decrease"
          className={`px-2 py-0.5 border-r hover:bg-Isabelline ${
            quantity === 1 ? "cursor-not-allowed" : ""
          }`}
          onClick={handleDecreaseQuantity}
        >{`-`}</button>
        <div className="px-3 py-0.5 cursor-not-allowed">{quantity}</div>
        <button
          title="increase"
          className="px-2 py-0.5 border-l hover:bg-Isabelline"
          onClick={handleIncreaseQuantity}
        >{`+`}</button>
      </div>
      <button
        title="remove"
        className="hover:bg-Isabelline p-1 rounded-md"
        onClick={handleRemove}
      >
        <Image
          src={Trash}
          alt="trash"
          className="w-4 h-4 opacity-0 group-hover:opacity-100 transform duration-300 ease-in-out"
        />
      </button>
    </div>
  );
}
