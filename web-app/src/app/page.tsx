"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchCryptoPrices } from "./lib/fetchCrypto";
import Loader from "./components/Loader";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const { data, refetch, isLoading, isError, isFetching } = useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
  });

  const [search, setSearch] = useState("");
  const filteredData = Array.isArray(data)
    ? data.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase()),
      )
    : [];

  async function handleRefetch() {
    try {
      await refetch();
    } catch (error) {
      console.error("An error occurred during refetch:", error);
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">Crypto Price Tracker</h1>
      <div className="flex gap-3 mb-4">
        <SearchBar search={search} setSearch={setSearch} />
        <Button onClick={() => handleRefetch()} />
      </div>

      <div className="flex justify-center">
        {isError ? <div>Error loading data</div> : null}
        {isLoading || isFetching ? (
          <div className="mt-5">
            <Loader />
          </div>
        ) : (
          <ul className="w-full border">
            <li className="flex items-center justify-between border p-2">
              <h3 className="w-2/5 md:w-3/5">Name</h3>
              <h3 className="w-3/10 md:w-1/5">Symbol</h3>
              <h3 className="w-3/10 md:w-1/5">Price (USD)</h3>
            </li>
            {filteredData.map((coin) => (
              <li
                key={coin.id}
                className="flex items-center justify-between border p-2">
                <span className="w-2/5 md:w-3/5">{coin.name}</span>
                <span className="w-3/10 md:w-1/5">{coin.symbol}</span>
                <span className="w-3/10 md:w-1/5">
                  ${coin.quote.USD.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
