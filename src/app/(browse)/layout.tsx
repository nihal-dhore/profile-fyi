"use client";
import Appbar from "@/components/appbar/appbar";

import { CartContext } from "@/lib/context";
import { CartProduct, Product } from "@/lib/types";
import { useEffect, useState } from "react";

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    const currentCart: CartProduct[] = JSON.parse(
      localStorage.getItem("cart") || "[]",
    );
    setCart(currentCart);
  }, []);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Appbar />
      {children}
    </CartContext.Provider>
  );
}
