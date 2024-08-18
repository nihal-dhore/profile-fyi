"use client";
import { Button } from "@/components/ui/button";
import Cart from "@/icons/cart";
import { useContext } from "react";
import { CartContext } from "@/lib/context";
import { CartProduct, Product } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

interface CartButtonProps {
  product: Product;
}

export default function CartButton({ product }: CartButtonProps) {
  const { cart, setCart } = useContext(CartContext);
  const { toast } = useToast();
  const router = useRouter();

  function handleCartClick() {
    // check if product is already in cart
    const productInCart = cart.findIndex((p) => p.id === product.id);

    //if product is in the cart, increment quantity

    try {
      if (productInCart !== -1) {
        const newCart = [...cart];
        newCart[productInCart].quantity += 1;
        cartChange(newCart);
        // if product is not in the cart, add it to the cart
      } else {
        const newCart = [...cart, { ...product, quantity: 1 }];
        cartChange(newCart);
      }
    } catch (error) {
      toast({
        description: "Something went wrong",
        className: "bg-red-400 text-white border-red-400",
      });
    }

    function cartChange(newCart: CartProduct[]) {
      setCart(newCart);
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(newCart));
      toast({
        description: `${product.name} added to cart`,
        className: "bg-Cadet text-white border-Cadet",
        action: (
          <ToastAction
            onClick={() => router.push("/cart")}
            altText="View Cart"
            className="transition-all transform duration-200 ease-in-out hover:bg-Cadet/80 hover:text-white hover:scale-105"
          >
            View Cart
          </ToastAction>
        ),
      });
    }
  }

  // console.log(cart);

  return (
    <div className="absolute right-5 top-5">
      <Button
        variant={"outline"}
        className="peer opacity-0 group-hover:opacity-100 transition-all transform duration-300 ease-in-out rounded-xl bg-Isabelline hover:bg-Isabelline hover:scale-110 border-Cadet flex items-center px-3"
        onClick={handleCartClick}
      >
        <Cart className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-base md:text-lg text-Cadet"> +</span>
      </Button>
      <span className="absolute -left-14 -translate-x-1/2 -top-0.5 mt-2 w-max bg-Cadet text-white text-xs rounded px-2 py-1 opacity-0 md:peer-hover:opacity-90 transition-opacity duration-300">
        Add to cart
      </span>
    </div>
  );
}
