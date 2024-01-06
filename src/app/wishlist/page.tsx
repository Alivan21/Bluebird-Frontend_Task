"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { convertToKebabCase } from "@/lib/toKebabCase";
import { useWishlistStore } from "@/store/wishlist";
import { ArrowLeft } from "lucide-react";

function WishList() {
  const router = useRouter();
  const { wishlist, remove, clear: handleClearBook } = useWishlistStore();

  return (
    <section className="container rounded-lg p-6 shadow-lg">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Button className="rounded-xl bg-blue-500 px-2 text-white hover:bg-blue-700" onClick={() => router.back()}>
            <ArrowLeft className="h-8 w-8 text-white" />
          </Button>
          <h1 className="text-2xl font-bold text-blue-600">Wishlist</h1>
        </div>
        {wishlist?.length === 0 ? (
          <div className="flex h-48 items-center justify-center">
            <h1 className="text-xl font-semibold text-blue-600">No Wishlist</h1>
          </div>
        ) : (
          wishlist?.map((item, index) => (
            <div className="mb-3 flex flex-wrap items-center justify-end space-x-4" key={index}>
              <Link href={`/vehicle/${convertToKebabCase(item.vehicle)}`}>
                <Image
                  alt="Vehicle Image"
                  className="h-24 w-36 rounded-sm bg-blue-200 object-contain"
                  height="100"
                  src={item.imageURL}
                  style={{
                    aspectRatio: "150/100",
                  }}
                  width="150"
                />
              </Link>
              <div className="flex-1">
                <div className="mb-1 text-lg font-semibold text-blue-900">{item.vehicle}</div>
                <div className="text-sm text-blue-700">{item.price}</div>
              </div>
              <Button className="rounded bg-red-500 text-white hover:bg-red-700" onClick={() => remove(item.vehicle)}>
                Delete
              </Button>
            </div>
          ))
        )}
        <div className="flex items-end justify-end gap-3">
          <Button
            className="w-1/4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
            disabled={wishlist.length === 0}
            onClick={handleClearBook}
          >
            Delete All
          </Button>
        </div>
      </div>
    </section>
  );
}
export default WishList;
