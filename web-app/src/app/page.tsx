"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const fetchCryptoPrices = async () => {
  const { data } = await axios.get("http://localhost:3001/api/crypto-prices");

  return data.data;
};

export default function Home() {
  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
  });

  console.log(data);

  const [search, setSearch] = useState("");

  const filteredData = Array.isArray(data)
    ? data.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()),
      )
    : [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Price Tracker</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search cryptocurrency..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 flex-1"
        />
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-4 py-2">
          Refresh
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((coin) => (
            <tr key={coin.id}>
              <td className="border p-2">{coin.name}</td>
              <td className="border p-2">${coin.quote.USD.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
