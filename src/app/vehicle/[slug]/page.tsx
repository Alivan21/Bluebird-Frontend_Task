"use client";

import Image from "next/image";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { fromKebabCase } from "@/lib/fromKebabcase";
import { getVehicleBySlug } from "@/services/vehicle";
import { useQuery } from "@tanstack/react-query";
import { Heart, Share } from "lucide-react";

function Vehicle({ params }: { params: { slug: string } }) {
  const slug = fromKebabCase(params.slug);
  const { toast } = useToast();

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied to clipboard",
        className: "bg-green-500 border-green-500 text-white",
      });
    } catch (error) {
      // nopp
    }
  }

  const { data, isLoading } = useQuery({
    queryKey: ["vehicle", slug],
    queryFn: () => getVehicleBySlug(slug),
  });

  if (!data || isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <main className="container flex flex-col gap-6 py-5">
      <section className="container mx-auto rounded-lg p-6 shadow-lg">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className=" flex-1">
            <Image
              alt="Product Image"
              className="h-auto w-full rounded-lg bg-gray-200 object-contain"
              height="300"
              priority
              src={data.imageURL}
              style={{
                aspectRatio: "300/300",
              }}
              width="300"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <h1 className="text-2xl font-bold text-blue-600">{data.vehicle}</h1>
            <ul className="mx-5 mt-2 list-disc">
              {data.description.map((desc, index) => (
                <li key={index}>
                  <span className="text-gray-700">{desc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <span className="text-lg font-semibold text-gray-900">Price: </span>
              <span className="text-lg text-blue-600">{data.price}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-row-reverse flex-nowrap gap-4 lg:flex-row">
          <div className="flex flex-1 gap-4">
            <Button className="w-1/2 bg-blue-500 text-white hover:bg-blue-700" onClick={copyToClipboard} type="button">
              <Share size={20} strokeWidth={2.5} />
            </Button>
            <Button className="w-1/2 bg-red-500 text-white hover:bg-red-700">
              <Heart size={20} strokeWidth={2.5} />
            </Button>
          </div>
          <div className="flex-1">
            <Button className="w-full bg-blue-500 text-white hover:bg-blue-700 lg:mt-auto">Book</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Vehicle;