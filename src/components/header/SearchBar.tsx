import { Search } from "lucide-react";

function SearchBar() {
  return (
    <form className="relative w-fit text-gray-600">
      <input
        className="h-10 rounded-xl border-2 border-gray-300 bg-white px-5 pr-10 text-sm focus:outline-none"
        name="search"
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
