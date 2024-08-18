import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CartProduct } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRupees(amount: number) {

  let formattedAmount = amount.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return formattedAmount;
}

export function billCalculator(cart: CartProduct[]) {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const discountedAmount = cart.reduce((acc, item) => (
    item.discount ?
      (acc + ((item.price - (item.price * item.quantity) - (item.price * item.quantity * item.discount)) / 100)) : acc
  ), 0);
  const shippingAmount: number = 150;

  const total = ((subtotal + discountedAmount) / 100) + shippingAmount;

  const bill = {
    total: formatRupees(total),
    subtotal: formatRupees(subtotal / 100),
    discountedAmount: formatRupees(discountedAmount / 100),
    shippingAmount: formatRupees(shippingAmount),
  };

  return bill;
}