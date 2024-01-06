"use client";

import { useSearchParams } from "next/navigation";
import VehicleCard from "@/components/cards/VehicleCard";
import Spinner from "@/components/Spinner";
import { useToast } from "@/components/ui/use-toast";
import { getVehicle } from "@/services/vehicle";
import { useBookStore } from "@/store/book";
import { useQuery } from "@tanstack/react-query";

function VehicleList() {
  const searchParams = useSearchParams();
  let category = searchParams.get("category");
  const { add: handleAddtoBook } = useBookStore();
  const { toast } = useToast();

  const { data } = useQuery({
    queryKey: ["vehicle"],
    queryFn: getVehicle,
  });

  if (searchParams.get("category") === null) {
    category = "1";
  }

  if (!data)
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );

  const vehicles = data.filter(vehicle => vehicle.category_id === Number(category));

  return (
    <>
      <h1 className="text-3xl font-semibold">Our Services</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {vehicles[0].car_type.map((vehicle, index) => (
          <VehicleCard
            addToBook={() => {
              handleAddtoBook(vehicle);
              toast({
                title: "Vehicle added to book",
                className: "bg-blue-500 border-blue-500 text-white",
              });
            }}
            imageURL={vehicle.imageURL}
            item={vehicle}
            key={index}
            vehicle={vehicle.vehicle}
          />
        ))}
      </div>
    </>
  );
}
export default VehicleList;
