"use client";
import React, { useEffect, useState } from "react";
import { SlideCard } from "./SlideCard";
import { servicesSliderData } from "./servicesSliderData";

type DataType = {
  title: string;
  text: string;
  imageHref: string;
};

export const AboutSlider = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [currentSlide, setcurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [duration, setDuration] = useState<0 | 500>(500);

  useEffect(() => {
    setData([...servicesSliderData, servicesSliderData[0]]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(500);
      if (!isAnimating) {
        setcurrentSlide((prevIndex) => (prevIndex + 1) % data.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [data.length, isAnimating]);

  useEffect(() => {
    if (currentSlide == data.length - 1) {
      setTimeout(() => {
        setDuration(0);
        setcurrentSlide(0);
      }, 500);
    }
  }, [currentSlide, data.length]);

  const bullitHandler = (idx: number) => {
    setcurrentSlide(idx);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section
      id="SERVICES_SLIDER"
      className="w-full flex flex-col items-center gap-6 mt-4 px-12"
    >
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-6 transition-all ease-in-out"
          style={{
            transitionDuration: `${duration}ms`,
            transform: `translateX(calc(${currentSlide} * -100% - ${currentSlide} * 24px))`,
          }}
        >
          {data.map((item, idx) => (
            <SlideCard
              key={idx}
              title={item.title}
              text={item.text}
              imageHref={item.imageHref}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {data.slice(0, data.length - 1).map((_, idx) => (
          <div
            key={idx}
            className={`h-3 rounded-full cursor-pointer transition-all duration-500 ease-linear
                ${
                  currentSlide % (data.length - 1) == idx
                    ? "bg-primary w-6"
                    : "bg-gray-400 w-3"
                }
                `}
            onClick={() => bullitHandler(idx)}
          ></div>
        ))}
      </div>
    </section>
  );
};
