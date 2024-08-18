import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
  discount?: number;
};

// cart will include the product and there respective quantity
export interface CartProduct extends Product {
  quantity: number;
};

export interface CartState {
  cart: CartProduct[];
  setCart: Dispatch<SetStateAction<CartProduct[]>>;
}

export interface BillType {
  total: string;
  subtotal: string;
  discountedAmount: string;
  shippingAmount: string;
}

export interface BillState {
  bill: BillType;
  setBill: Dispatch<SetStateAction<BillType>>;
}