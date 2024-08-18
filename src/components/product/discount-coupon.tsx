"use client";
interface DiscountCouponProps {
  discount?: number;
}

export default function DiscountCoupon({ discount }: DiscountCouponProps) {
  return (
    <>
      {discount && (
        <div className="absolute left-5 top-5 text-xs md:text-sm xl:text-base bg-Cadet/80 text-white py-1.5 md:py-1 px-3 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0 before:border-l-[8px] before:border-l-transparent before:border-r-[8px] before:border-r-transparent before:border-t-[8px] before:border-t-Cadet/80">
          {`-${discount}%`}
        </div>
      )}
    </>
  );
}
