"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const heroSlider = [
  {
    imageSrc: "/1920x1080.png",
    label: "Hero 1",
    title: "SUMMER IS HERE",
    subtitle: "NEW COLLECTION",
    position: "",
  },
  {
    imageSrc: "/1920x1080.png",
    label: "Hero 2",
    title: "ELEVATE YOUR STYLE",
    subtitle: "NEW COLLECTION",
    position: "",
  },
  {
    imageSrc: "/1920x1080.png",
    label: "Hero 3",
    title: "MODERN ELEGANCE",
    subtitle: "NEW COLLECTION",
    position: "",
  },
];

const NextArrow = React.memo(({ onClick, currentSlide, totalSlides }) => (
  <div className="absolute bottom-5 right-5 z-10 flex items-center gap-3 sm:bottom-10 sm:right-10">
    <div className="text-md font-light text-stone-100 lg:text-lg">
      {currentSlide + 1} / {totalSlides}
    </div>
    <button
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-full text-white"
    >
      <IoArrowForward className="text-xl lg:text-2xl" />
    </button>
  </div>
));
NextArrow.displayName = "NextArrow";

const PrevArrow = React.memo(({ onClick, currentSlide }) => (
  <div className="absolute bottom-5 right-[105px] z-10 flex cursor-pointer items-center gap-2 sm:bottom-10 sm:right-[135px]">
    <button
      onClick={onClick}
      className={`${
        currentSlide === 0 ? "text-stone-300" : ""
      } flex h-8 w-8 items-center justify-center rounded-full text-white`}
      disabled={currentSlide === 0}
    >
      <IoArrowBack className="text-xl lg:text-2xl" />
    </button>
  </div>
));
PrevArrow.displayName = "PrevArrow";

// Memoizing the slide component to prevent unnecessary re-renders
const Slide = React.memo(
  ({ imageSrc, alt, title, subtitle, position = "" }) => (
    <div className="relative h-[600px] w-full sm:h-[650px]">
      <Image
        src={imageSrc}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition={position}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute bottom-0 mb-40 flex flex-col items-start p-8 text-white sm:mb-10 sm:p-28">
        <h4 className="mb-1 text-sm font-light tracking-wide text-stone-200 sm:mb-2">
          {subtitle}
        </h4>
        <h1 className="mb-8 text-3xl font-semibold tracking-wide sm:text-4xl">
          {title}
        </h1>
        <button className="border border-stone-50 bg-transparent px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-stone-50 hover:text-stone-900 sm:px-6 sm:py-3">
          SHOP NOW
        </button>
      </div>
    </div>
  ),
);
Slide.displayName = "Slide";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = heroSlider.length;

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: (
      <NextArrow currentSlide={currentSlide} totalSlides={totalSlides} />
    ),
    prevArrow: <PrevArrow currentSlide={currentSlide} />,
  };

  return (
    <Slider {...settings} className="inset-0">
      {heroSlider.map((el) => (
        <Slide
          key={el.label}
          imageSrc={el.imageSrc}
          alt={el.label}
          title={el.title}
          subtitle={el.subtitle}
          position={el.position}
        />
      ))}
    </Slider>
  );
};

export default HeroSlider;
