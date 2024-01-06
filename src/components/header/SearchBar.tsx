"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

function SearchBar() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const vehicle = formData.get("vehicle")?.toString() ?? "";
    router.push(`/search?vehicle=${vehicle}`);
  }

  return (
    <form className="relative w-fit text-gray-600" onSubmit={handleSubmit}>
      <input
        className="h-10 rounded-xl border-2 border-gray-300 bg-white px-5 pr-10 text-sm focus:outline-none"
        name="vehicle"
        placeholder="Search"
        type="search"
      />
      <button className="absolute right-0 top-0 mr-4 mt-3" type="submit">
        <Search className="h-4 w-4 text-gray-600" />
      </button>
    </form>
  );
}
export default SearchBar;
