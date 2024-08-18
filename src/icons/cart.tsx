import Image from "next/image";
import cart from "#/cart.svg";

interface CartProps {
  className?: string;
}

export default function Cart({ className }: CartProps) {
  return (
    <Image
      src={cart}
      width={24}
      height={24}
      alt="cart"
      className={`${className}`}
    />
  );
}
