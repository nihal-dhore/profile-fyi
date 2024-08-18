"use client";

import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/");
      }}
      className="cursor-pointer"
    >
      ShopMate
    </div>
  );
}
