"use client";

import { ProductType } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ProductInteraction = ({
  product,
  selectedColor,
  selectedSize,
}: {
  product: ProductType;
  selectedColor: "string";
  selectedSize: "string";
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log(`this is searchParams ${searchParams}`);

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(type, value);

    console.log("Updated search params:", params.toString());

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="">
      {/*SIZE */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              className={`cursor-pointer border-1 p-[2px] ${
                selectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
              key={size}
              onClick={() => handleTypeChange("size", size)}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size.toLocaleUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*COLOR */}

      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer border-1 p-[2px] ${
                selectedColor === color ? "border-gray-300" : "border-white"
              }`}
              key={color}
              onClick={() => handleTypeChange("color", color)}
            >
              <div className={`w-6 h-6 `} style={{ backgroundColor: color }} />
            </div>
          ))}
        </div>
      </div>
      {/*QUANTITY */}

      <div></div>
    </div>
  );
};

export default ProductInteraction;
