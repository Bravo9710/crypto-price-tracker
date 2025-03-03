import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());

app.get("/api/crypto-prices", async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          // Replace with your own API key
          // The API key shoud be stored in a secure way, such as in a .env file
          "X-CMC_PRO_API_KEY": `${process.env.API_KEY}`,
        },
        params: {
          limit: 5,
        },
      },
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
