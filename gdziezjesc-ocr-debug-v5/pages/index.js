
import { useState } from "react";
import SearchBar from "../SearchBar";
import RestaurantList from "../RestaurantList";
import { fetchResults } from "../search";

export default function HomePage() {
  const [results, setResults] = useState([]);

  const handleSearch = async (dish, city) => {
    console.log("Wyszukiwanie:", dish, city);
    const data = await fetchResults(dish, city);
    setResults(data);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gdzie zjeść?</h1>
      <SearchBar onSearch={handleSearch} />
      <RestaurantList results={results} />
    </div>
  );
}
