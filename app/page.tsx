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

const flowers = [
  { label: "Stargazer", image: "/cat-flowers/stargazer.png" },
  { label: "Carnation", image: "/cat-flowers/carnation.png" },
  { label: "Rose", image: "/cat-flowers/rose.png" },
  { label: "Hydrangea", image: "/cat-flowers/hydrangea.png" },
  { label: "Sunflower", image: "/cat-flowers/sunflower.png" },
  { label: "Rose Lilies", image: "/cat-flowers/rose-lilies.png" },
];

export default function HomePage() {
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
        <div className="flex justify-center items-center">
          <p className="font-sarina text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-rose-300 mt-18">
            Pollen of Love
          </p>
        </div>

        {/* Flower Category Section */}
        <div>
          <Carousel
            setApi={setApi}
            className="mt-15 w-full select-none touch-pan-y"
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
      <div className="min-h-screen bg-rose-200">
        <p className="w-full flex justify-end">Mini Bouquet Section</p>
      </div>
    </main>
  );
}
