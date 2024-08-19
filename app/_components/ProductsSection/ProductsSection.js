import ProductCardItem from "./ProductCardItem";

export default async function ProductsSection() {
  const response = await fetch("https://dummyjson.com/products/search?q=phone");
  const data = await response.json();
  const filteredProducts = data.products.filter(
    (product) => product.price > 500,
  );

  return (
    <div className="mb-14 mt-20 select-none px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <h2 className="mb-4 mt-32 text-center text-2xl lg:text-3xl">
        Exclusive Collection
      </h2>
      <p className="mb-16 text-center text-stone-500">
        Discover our exclusive collection of premium products
      </p>
      <div className="grid grid-cols-2 gap-5 gap-y-8 lg:grid-cols-4 xl:grid-cols-4">
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
      </div>
    </div>
  );
}
