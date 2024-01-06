"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Spinner from "@/components/Spinner";
import { convertToKebabCase } from "@/lib/toKebabCase";
import { getVehicleBySlug } from "@/services/vehicle";
import { useQuery } from "@tanstack/react-query";

function Search() {
  const searchParams = useSearchParams();
  const vehicle = searchParams.get("vehicle") ?? "";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["vehicle", vehicle],
    queryFn: () => getVehicleBySlug(vehicle),
  });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  } else if (isError || !data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-xl font-semibold text-blue-600">No Vehicle Found</h1>
      </div>
    );
  }

  return (
    <section className="container mx-auto rounded-lg p-6 shadow-lg">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <Link href={`/vehicle/${convertToKebabCase(data.vehicle)}`}>
            <Image
              alt="Product Image"
              className="h-auto w-full rounded-lg bg-gray-200 object-contain"
              height="300"
              priority
              src={data?.imageURL}
              style={{
                aspectRatio: "300/300",
              }}
              width="300"
            />
          </Link>
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
    </section>
  );
}
export default Search;
