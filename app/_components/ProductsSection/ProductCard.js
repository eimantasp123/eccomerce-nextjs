"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const exampleProduct = {
  image: "/640x800.png", // Default image
  title: "Sample Product",
  category: "Category Name",
  price: 100.0,
  salePrice: 0, // Optional, include only if the product is on sale
  images: ["/640x800.png", "/640x800.png", "/640x800.png"],
  variants: [
    { color: "Red", colorCode: "#000", image: "/640x800.png" },
    { color: "Blue", colorCode: "#409AFF ", image: "/640x800.png" },
    { size: "S", image: "/640x800.png " },
    { size: "L", image: "/640x800.png" },
  ],
};

const ProductCard = ({ product = exampleProduct, toggleWishlist }) => {
  // const [selectedVariant, setSelectedVariant] = useState(
  //   product.variants ? product.variants[0] : null,
  // );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  useEffect(() => {
    let interval;
    if (hovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % product.images.length);
      }, 2000);
    } else {
      setCurrentIndex(0);
    }
    return () => clearInterval(interval);
  }, [hovered, product?.images?.length]);

  return (
    <div className="group relative w-full cursor-pointer bg-white">
      <div
        className="relative h-[250px] w-full overflow-hidden sm:h-[300px] md:h-[400px] lg:h-[350px] xl:h-[450px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {exampleProduct?.images?.map((img, index) => (
            <div key={index} className="relative w-full flex-shrink-0">
              <Image
                src={img}
                alt={`${product?.title} ${index + 1}`}
                fill
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute right-3 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl text-stone-800 opacity-0 transition-all duration-300 group-hover:top-3 group-hover:opacity-100"
          onClick={() => toggleWishlist(product?.id)}
        >
          {isInWishlist ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
        <button className="absolute bottom-0 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-base text-stone-800 opacity-0 transition-all duration-300 group-hover:bottom-6 group-hover:opacity-100">
          <AiOutlineShoppingCart />
        </button>
        {hovered && product?.images?.length > 0 && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-1">
            {product?.images.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-16 rounded-full ${
                  currentIndex === index ? "bg-black" : "bg-gray-50"
                }`}
              ></div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product?.title}</h3>
        <p className="mt-2 text-base text-gray-700">
          {product?.discountPercentages ? (
            <>
              <span className="text-red-500">
                ${product?.discountPercentage}
              </span>
              <span className="ml-2 text-sm text-gray-400 line-through">
                ${product?.price}
              </span>
            </>
          ) : (
            <span className="text-base text-stone-600">${product?.price}</span>
          )}
        </p>
        <div className="mt-4 flex justify-between">
          {/* {product.variants &&
            product.variants.some((variant) => variant.color) && (
              <div className="flex items-center">
                {product.variants
                  .filter((variant) => variant.color)
                  .map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => handleVariantChange(variant)}
                      className={`mr-3 h-3 w-3 rounded-full transition-all duration-300 ease-in ${
                        selectedVariant === variant
                          ? "ring-2 ring-stone-600 ring-offset-2"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: variant.colorCode }}
                    ></button>
                  ))}
              </div>
            )} */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
