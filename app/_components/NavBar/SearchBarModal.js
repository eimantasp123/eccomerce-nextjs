"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBarPopularQueries = [
  { query: `"Shoes"`, link: "/" },
  { query: `"Suits"`, link: "/" },
  { query: `"Dresses"`, link: "/" },
  { query: `"Jewelry"`, link: "/" },
];

export default function SearchBarModal() {
  const [isQuery, setQuery] = useState("");

  return (
    <div className="mx-12 my-8 flex flex-col items-center gap-8">
      <form className="relative mx-auto w-full max-w-3xl">
        <input
          onChange={(e) =>
            setQuery(e.target.value.length > 3 ? e.target.value : "")
          }
          type="text"
          placeholder="Search for..."
          className="w-full rounded-full border border-gray-300 p-2 pl-12 transition duration-300 ease-in placeholder:text-stone-500 hover:border-gray-600 focus:border-gray-600 focus:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.08)] focus:outline-none"
        />
        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-xl text-stone-500" />
      </form>
      {isQuery ? (
        <div className="mx-auto w-full max-w-3xl">
          <ul className="flex flex-col gap-7">
            <li>
              <a href="#">Search Result 1</a>
            </li>
            <li>
              <a href="#">Search Result 2</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex w-full max-w-3xl flex-col items-center justify-center">
          <h2 className="font-bold md:text-lg">Welcome!</h2>
          <p className="mt-2 text-center text-sm text-gray-600 md:text-base">
            Start typing to search for products
          </p>
          <div className="mt-5 flex items-center justify-center gap-4 text-sm">
            {SearchBarPopularQueries.map((query) => (
              <button
                key={query.query}
                className="flex items-center gap-2 rounded-full border-[1px] border-stone-800 px-2 py-1 transition-shadow duration-300 ease-in hover:shadow-md md:px-3 md:py-2"
              >
                <IoSearch />
                {query.query}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
