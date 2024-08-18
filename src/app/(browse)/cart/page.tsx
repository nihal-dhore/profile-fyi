"use client";

import { useContext, useEffect, useState } from "react";
import Bill from "./_components/bill";
import CartItems from "./_components/item/cart-items";
import { billCalculator } from "@/lib/utils";
import { BillContext, CartContext } from "@/lib/context";
import { BillType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const [bill, setBill] = useState<BillType>(billCalculator(cart));
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const newBill = billCalculator(cart);
    setBill(newBill);
  }, [cart]);

  if (cart.length === 0 && !isOrderSuccess) {
    return (
      <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
        <h1 className="text-Cadet text-xl">Your cart is empty</h1>
        <Button
          className="bg-Cadet text-white"
          onClick={() => router.push("/")}
        >
          Home Page
        </Button>
      </div>
    );
  }

  if (isOrderSuccess) {
    return (
      <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
        <h1 className="text-Cadet text-xl">Your order has been placed 🎉</h1>
        <Button
          className="bg-Cadet text-white"
          onClick={() => router.push("/")}
        >
          Home Page
        </Button>
      </div>
    );
  }

  return (
    <BillContext.Provider value={{ bill, setBill }}>
      <section className="flex justify-center mb-8 mt-[75px] md:mt-[94px] mx-5 md:mx-10">
        <div className="w-full max-w-6xl flex flex-col sm:flex-row gap-8">
          <CartItems />
          <Bill
            isOrderSuccess={isOrderSuccess}
            setIsOrderSuccess={setIsOrderSuccess}
          />
        </div>
      </section>
    </BillContext.Provider>
  );
}
