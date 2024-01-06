import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Category from "./components/Category";
import VehicleList from "./components/VehicleList";
import { getCategory } from "./services/category";
import { getVehicle } from "./services/vehicle";

export default function Home() {
  return (
    <main className="container flex flex-col gap-6 py-5">
      <section className="container rounded-xl border bg-gray-50 px-14 py-5 shadow-lg">
        <CategorySSR />
      </section>
      <section className="flex flex-col gap-5">
        <VehicleListSSR />
      </section>
    </main>
  );
}

async function CategorySSR() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Category />
    </HydrationBoundary>
  );
}

async function VehicleListSSR() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["vehicle"],
    queryFn: getVehicle,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <VehicleList />
    </HydrationBoundary>
  );
}
