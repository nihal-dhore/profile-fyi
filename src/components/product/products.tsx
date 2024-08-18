"use client";
import { products } from "@/data/products";
import Product from "@/components/product/product";

export default function Products() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4 mt-[75px] md:mt-[94px] mb-8 mx-5 md:mx-10">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
