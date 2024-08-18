import { createContext, Dispatch, SetStateAction } from "react";
import { BillState, BillType, CartState } from "@/lib/types";

export const CartContext = createContext<CartState>({
  cart: [],
  setCart: () => { }
});

export const BillContext = createContext<BillState>({
  bill: {
    subtotal: "",
    discountedAmount: "",
    shippingAmount: "",
    total: ""
  },
  setBill: () => { }
});