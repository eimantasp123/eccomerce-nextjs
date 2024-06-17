import { IoCloseOutline } from "react-icons/io5";

export default function Wishlist() {
  return (
    <div className="flex h-full w-full flex-col">
      <h2 className="mb-6 text-lg">
        Wishlist <span>({`2 items`})</span>
      </h2>
      <div className="custom-scrollbar mb-10 flex flex-col gap-6 py-10">
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
      </div>

      <button className="my-6 mt-auto w-full bg-stone-800 py-3 text-base text-stone-50">
        View Wishlist
      </button>
    </div>
  );
}

function WishlistCard() {
  return (
    <>
      <div className="mx-2 flex h-[90px] gap-6">
        <div className="flex items-center gap-2">
          <img
            src="/hero-2.jpg"
            alt="Product"
            className="h-full max-w-20 object-cover"
          />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-regular text-base">Product Name with</h3>
          <p className="text-sm text-gray-600">Shoes</p>
          <button className="mt-4 flex items-center justify-center rounded-full bg-stone-800 px-3 py-1 text-sm text-stone-50">
            Add to cart
          </button>
        </div>
        <div className="ml-auto flex flex-col justify-between">
          <span className="ml-2 cursor-pointer text-xl text-gray-700 hover:text-gray-800">
            <IoCloseOutline />
          </span>
          <span className="text-base">$89</span>
        </div>
      </div>
      <div className="border-b-[1px]"></div>
    </>
  );
}
