"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useModal } from "../Context/ModalContext";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const { accountModalOpen } = useModal();

  useEffect(() => {
    if (!accountModalOpen) {
      reset();
    }
  }, [accountModalOpen, reset]);

  const onSubmit = async (data) => {
    console.log(data);
    // try {
    //   const response = await fetch("/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const result = await response.json();
    //   if (response.ok) {
    //     // Handle successful login (e.g., redirect to dashboard)
    //     console.log(result);
    //     reset();
    //   } else {
    //     console.error(result.message || "Login failed");
    //   }
    // } catch (error) {
    //   console.error("An unexpected error occurred");
    // }
  };

  const email = watch("email");
  const password = watch("password");

  return (
    <>
      <form
        className="flex w-max flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5 flex w-full flex-col">
          <div className="relative mb-6">
            <label htmlFor="email" className="text-base font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E.g. yourname@gmail.com "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="h-10 w-full pl-3 text-base text-gray-900 transition-shadow duration-300 ease-in-out focus:border-stone-800 focus:outline-none focus:ring-[1px] focus:ring-stone-800"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative mb-6">
            <label htmlFor="password" className="text-base font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password "
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="h-10 w-full pl-3 text-base text-gray-900 transition-shadow duration-300 ease-in-out focus:border-stone-800 focus:outline-none focus:ring-[1px] focus:ring-stone-800"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !email || !password}
          className={`mb-2 w-full max-w-md bg-stone-700 py-3 text-base text-white transition-shadow duration-300 ease-in-out hover:shadow-md ${
            isSubmitting || !email || !password
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
        >
          SIGN IN
        </button>
      </form>
      <span className="mb-5 mt-2 flex justify-center text-sm font-semibold underline">
        <Link href="/">Forgot password?</Link>
      </span>
    </>
  );
};

export default LoginForm;
