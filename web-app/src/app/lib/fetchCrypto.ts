import axios from "axios";

export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  image: string;
}

export async function fetchCryptoPrices(): Promise<Crypto[]> {
  const apiKey = "d11c77a5-a3e1-437a-8b31-eb92468068eb";

  if (!apiKey) {
    throw new Error("API key is missing");
  }

  const { data } = await axios.get("http://localhost:3001/api/crypto-prices");
  return data;
}
