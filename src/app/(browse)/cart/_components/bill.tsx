"use client";
import { Button } from "@/components/ui/button";
import { BillContext, CartContext } from "@/lib/context";
import { billCalculator } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

interface BillProps {
  isOrderSuccess: boolean;
  setIsOrderSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Bill({ isOrderSuccess, setIsOrderSuccess }: BillProps) {
  const { cart, setCart } = useContext(CartContext);
  const { bill, setBill } = useContext(BillContext);

  const router = useRouter();

  const handleCheckout = () => {
    setIsOrderSuccess(true);
    setCart([]);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify([]));
    setTimeout(() => {
      router.push("/");
    }, 5000);
  };

  return (
    <section className="w-full sm:w-[500px] max-h-[350px] flex flex-col gap-5 bg-Cultured py-5 px-8 rounded-lg text-sm font-light shadow-sleek">
      <h6 className="font-semibold">
        PRICE DETAILS {`(${cart.length} ITEMS)`}
      </h6>
      <hr />
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 font-normal">
          <span>{`Subtotal MRP`}</span>
          <span>{`Discount on MRP`}</span>
          <span>{`Shipping Fee`}</span>
        </div>
        <div className="flex flex-col gap-2 text-right">
          <span>{bill.subtotal}</span>
          <span>{bill.discountedAmount}</span>
          <span>{bill.shippingAmount}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-20">
        <hr />
        <div className="w-full flex justify-between">
          <span className="font-semibold">Total Amount</span>
          <span>{bill.total}</span>
        </div>
        <Button className="bg-Cadet w-full" onClick={handleCheckout}>
          Proceed to Checkout
        </Button>
      </div>
    </section>
  );
}
