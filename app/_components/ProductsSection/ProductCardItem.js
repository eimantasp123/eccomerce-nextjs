"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductCardItem = ({ product }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <div className="mb-4 w-full">
      <div className="flex justify-center">
        <ProductCard
          product={product}
          // isInWishlist={wishlist.includes(product.id)}
          toggleWishlist={toggleWishlist}
        />
      </div>
    </div>
  );
};

export default ProductCardItem;
