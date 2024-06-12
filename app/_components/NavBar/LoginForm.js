"use client";

import Link from "next/link";
import { useState } from "react";

function FloatingLabelInput({ type, name, placeholder, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        className="w-full text-sm focus:outline-none focus:ring-0"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
      />
      <label
        className={`pointer-events-none absolute left-0 top-0 text-sm text-stone-600 transition-all duration-300 ${
          isFocused || hasValue ? "top-[-15px] text-xs text-stone-800" : ""
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
}

function LoginForm({ onClose }) {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-5 flex flex-col border-[1px] border-stone-400 px-6 py-6">
          <FloatingLabelInput
            type="text"
            name="userName"
            placeholder="Username"
            onChange={handleChange}
          />
          <div className="my-5 border-b-[1px] border-stone-400"></div>
          <FloatingLabelInput
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <span className="mb-5 text-center text-[16px]">
          <Link href="/">Forgot password?</Link>
        </span>
        <button className="mb-2 w-full bg-stone-700 py-3 text-base text-white transition-shadow duration-300 ease-in-out hover:shadow-md">
          SIGN IN
        </button>
      </form>
      <Link
        href="/register"
        onClick={onClose}
        className="flex items-center justify-center border-[1px] border-stone-400 bg-transparent py-3 text-base text-stone-800 transition-shadow duration-300 ease-in-out hover:shadow-md"
      >
        CREATE ACCOUNT
      </Link>
    </>
  );
}

export default LoginForm;
