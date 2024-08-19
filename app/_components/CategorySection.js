import Image from "next/image";
import Link from "next/link";

export default function CategorySection() {
  return (
    <div className="mb-28 select-none px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <h2 className="mb-4 mt-16 text-center text-2xl lg:text-3xl">
        Shopy Categories
      </h2>
      <p className="mb-16 text-center text-stone-500">
        Discover our exclusive collection of premium products
      </p>
      <div className="grid grid-cols-1 gap-5 gap-y-8 lg:grid-cols-3 xl:grid-cols-3">
        <CategoryCard title="Category 2" image="/700x800.png" link="/" />
        <CategoryCard title="Category 2" image="/700x800.png" link="/" />
        <CategoryCard title="Category 2" image="/700x800.png" link="/" />
      </div>
    </div>
  );
}

function CategoryCard({ title, image, link }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative h-[250px] w-full cursor-pointer sm:h-[300px] md:h-[400px] lg:h-[350px] xl:h-[550px]">
        <Image
          src={image}
          alt="category image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-lg">{title}</h3>
      <Link
        href={link}
        className="text-base text-stone-800 underline underline-offset-4"
      >
        View Collection
      </Link>
    </div>
  );
}
