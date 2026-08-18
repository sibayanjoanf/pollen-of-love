"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

const flowers = [
  { label: "Stargazer", image: "/cat-flowers/stargazer.png" },
  { label: "Carnation", image: "/cat-flowers/carnation.png" },
  { label: "Rose", image: "/cat-flowers/rose.png" },
  { label: "Hydrangea", image: "/cat-flowers/hydrangea.png" },
  { label: "Sunflower", image: "/cat-flowers/sunflower.png" },
  { label: "Rose Lilies", image: "/cat-flowers/rose-lilies.png" },
];

const mainFlowers = [
  { label: "Sunflower" },
  { label: "Gerbera" },
  { label: "Carnation" },
  { label: "Hydrangea" },
  { label: "Tulips" },
  { label: "China Rose" },
];

const fillers = [
  { label: "Aster" },
  { label: "Peruvian Lilies" },
  { label: "Baby's Breath" },
  { label: "Purple Statice" },
  { label: "Chamomile" },
];

export default function HomePage({}) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <main>
      <div className="bg-[url('/bg-hero.png')] bg-cover bg-center">
        {/* Header Section */}
        <div className="flex justify-center items-center pt-23">
          <p className="font-sarina text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-rose-300 mt-18">
            Pollen of Love
          </p>
        </div>

        {/* Flower Category Section */}
        <div>
          <Carousel
            setApi={setApi}
            className="mt-15 w-full select-none touch-pan-y"
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{ loop: true, align: "center" }}
          >
            <CarouselContent className="py-8">
              {flowers.map((link, index) => {
                const isActive = index === selectedIndex;
                return (
                  <CarouselItem
                    key={link.label}
                    className="flex justify-center basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <Card
                      className={`bg-transparent ring-0 transition-all duration-300 ease-out ${isActive ? "-translate-y-8" : "translate-y-0 opacity-70 scale-80"}`}
                    >
                      <CardContent className="flex flex-col justify-center items-center">
                        <img
                          src={link.image}
                          className="h-90"
                          draggable={false}
                        />
                        <p className="bg-rose-300 text-white p-3 mt-5 text-[16px] font-semibold rounded-sm">
                          {link.label}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-transparent border-none md:hidden lg:flex xl:hidden text-stone-900 hover:bg-rose-200/40 transition-all duration-300 ease-out cursor-pointer" />
            <CarouselNext className="bg-transparent border-none md:hidden lg:flex xl:hidden text-stone-900 hover:bg-rose-200/40 transition-all duration-300 ease-out cursor-pointer" />
          </Carousel>
        </div>
      </div>

      {/* Mini Bouquet Section */}
      <div className="flex min-h-screen bg-[url('/mini-bouquet/bg-mini-bouquet.png')] bg-cover bg-center">
        <div className="w-full flex flex-col items-center mt-40 text-white font-semibold">
          {/* Header */}
          <p className="text-5xl mb-3 uppercase">Mini Bouquet</p>
          <p className="text-lg">
            Pick & Match: Choose your main flower, then add your filler bloom
          </p>

          {/* Steps */}
          <div className="w-full flex px-60 py-20 gap-10 h-5/7">
            {/* Main flower */}
            <div className="w-full flex flex-col items-center justify-center bg-rose-200/40 rounded-2xl">
              <div className="relative -mt-20 mb-5">
                <img src="/mini-bouquet/flower-step.png" className="w-20" />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-rose-300">
                  1
                </p>
              </div>
              {mainFlowers.map((link) => {
                return (
                  <div key={link.label} className="text-xl">
                    <p className="mt-2">{link.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Fillers */}
            <div className="w-full flex flex-col items-center justify-center bg-rose-200/40 rounded-2xl">
              <div className="relative -mt-30 mb-5">
                <img src="/mini-bouquet/flower-step.png" className="w-20" />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-rose-300">
                  2
                </p>
              </div>
              {fillers.map((link) => {
                return (
                  <div key={link.label} className="text-xl">
                    <p className="mt-2">{link.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
