"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../services/category";

function Category() {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  return (
    <Carousel className="h-auto w-full max-w-7xl">
      <CarouselContent className="-ml-1">
        {data?.map((category, index) => (
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3" key={index}>
            <Link
              className="group flex w-full flex-col items-center justify-center gap-4 border bg-white p-4"
              href={`/?category=${category.id}`}
            >
              <Image
                alt={category.name}
                className="h-32 w-32 transition duration-500 group-hover:scale-110"
                height="128"
                src={category.imageURL.replace(": ", ":")}
                width="128"
              />
              <span className="text-xl font-semibold">{category.name}</span>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-blue-600 hover:text-blue-700" />
      <CarouselNext className="text-blue-600 hover:text-blue-700" />
    </Carousel>
  );
}
export default Category;
