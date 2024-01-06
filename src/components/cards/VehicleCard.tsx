import Link from "next/link";
import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { convertToKebabCase } from "@/lib/toKebabCase";

type VehicleCardProps = {
  vehicle: string;
  imageURL: string;
};

function VehicleCard({ vehicle, imageURL }: VehicleCardProps) {
  return (
    <div className="group relative m-auto h-48 w-full rounded-sm border">
      <Link href={`/vehicle/${convertToKebabCase(vehicle)}`}>
        <div
          className="mt-2.5 h-2/3 w-full bg-contain bg-center bg-no-repeat duration-300"
          style={{
            backgroundImage: `url('${imageURL}')`,
          }}
        />
      </Link>
      <div className="absolute top-[50%] hidden w-full bg-gray-100 bg-opacity-[0.7] group-hover:grid group-hover:grid-cols-2">
        <Button className="rounded-none bg-yellow-500 bg-opacity-[0.8] hover:bg-yellow-500 hover:bg-opacity-[1]">
          <Icon name="shopping-cart" size={20} strokeWidth={2.5} />
        </Button>
        <Button className="rounded-none bg-red-500 bg-opacity-[0.8] hover:bg-red-500 hover:bg-opacity-[1]">
          <Icon name="heart" size={20} strokeWidth={2.5} />
        </Button>
      </div>
      <div className="flex justify-center p-5">
        <Link href={`/vehicle/${convertToKebabCase(vehicle)}`}>
          <h3 className="font-medium tracking-tight text-blue-600 hover:text-blue-800">{vehicle}</h3>
        </Link>
      </div>
    </div>
  );
}
export default VehicleCard;
