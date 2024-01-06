"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { convertToKebabCase } from "@/lib/toKebabCase";
import { useBookStore } from "@/store/book";
import { ArrowLeft } from "lucide-react";

function MyBook() {
  const router = useRouter();
  const { book, remove, clear: handleClearBook } = useBookStore();

  const totalPrice = useMemo(() => {
    return book.reduce((total, item) => {
      const numberString = item.price?.match(/\d+/g)?.join("") ?? "";
      const price = parseFloat(numberString);
      const quantity = item.count ?? 0;
      const totalPrice = total + price * quantity;
      return totalPrice;
    }, 0);
  }, [book]);

  const formattedTotalPrice = totalPrice.toLocaleString("id-ID", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <section className="container rounded-lg p-6 shadow-lg">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Button className="rounded-xl bg-blue-500 px-2 text-white hover:bg-blue-700" onClick={() => router.back()}>
            <ArrowLeft className="h-8 w-8 text-white" />
          </Button>
          <h1 className="text-2xl font-bold text-blue-600">My Book</h1>
        </div>
        {book?.length === 0 ? (
          <div className="flex h-48 items-center justify-center">
            <h1 className="text-xl font-semibold text-blue-600">No Book</h1>
          </div>
        ) : (
          book?.map((item, index) => (
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
                <div className="text-sm text-blue-700">{item.count}x</div>
              </div>
              <Button className="rounded bg-red-500 text-white hover:bg-red-700" onClick={() => remove(item.vehicle)}>
                Delete
              </Button>
            </div>
          ))
        )}
        <div className="mt-6 flex items-center justify-between border-t-2 border-blue-300 pt-3">
          <div className="text-lg font-semibold text-blue-900">Total Price</div>
          <div className="text-lg text-blue-900">IDR {formattedTotalPrice}</div>
        </div>
        <div className="flex gap-3">
          <Button
            className="w-full rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
            disabled={book.length === 0}
            onClick={handleClearBook}
          >
            Delete All
          </Button>
          <Button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700" disabled>
            Checkout
          </Button>
        </div>
      </div>
    </section>
  );
}
export default MyBook;
