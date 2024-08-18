"use client";
import Logo from "@/components/appbar/logo";
import Cart from "@/icons/cart";
import { CartContext } from "@/lib/context";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Appbar() {
  const { cart } = useContext(CartContext);
  const noOfItems = cart.length > 9 ? "9+" : cart.length.toString();
  const router = useRouter();
  return (
    <section className="fixed w-full bg-Isabelline z-50 pt-5 px-5 md:pt-10 md:px-10 py-4 top-0">
      <nav className="flex items-center justify-between px-5 lg:px-7 h-11 bg-white/90 rounded-lg">
        <Logo />

        <div className="relative top-[3px] transition-all transform duration-300 ease-in-out hover:scale-110">
          <button title="cart" onClick={() => router.push("/cart")}>
            <Cart />
          </button>

          {cart.length > 0 && (
            <span className="absolute left-1/2 z-10 bg-blue-700 text-white  text-[8px] px-1 rounded-full">
              {noOfItems}
            </span>
          )}
        </div>
      </nav>
    </section>
  );
}
