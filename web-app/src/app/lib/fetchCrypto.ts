import axios from "axios";

export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  quote: { USD: { price: number } };
}

export async function fetchCryptoPrices(): Promise<Crypto[]> {
  const { data } = await axios.get("http://localhost:3001/api/crypto-prices");
  return data.data;
}
