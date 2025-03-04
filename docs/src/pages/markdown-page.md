# Crypto Price Tracker Documentation

## Overview

The Crypto Price Tracker is a web application built with Next.js that allows users to view live cryptocurrency prices. The application fetches data from a public API and provides a user-friendly dashboard to track the prices of various cryptocurrencies.

## 🚀 Project Setup

The project is organized into two main directories: `web-app` for the Next.js application and `docs` for the Docusaurus documentation

1. Clone the repository.
2. Install dependencies:
   - For Next.js:
     ```
     cd web-app
     npm install
     npm run dev
     ```
   - For Docusaurus:
     ```
     cd docs
     npm install
     npm run start
     ```

## 🔌 API Integration

We use **CoinMarketCap API** with API key to fetch live prices of the first 5 cryptocurrencies by market cap:

- Bitcoin
- Ethereum
- Ripple
- BNB
- Tether

Data is fetched using Axios and handled via **React Query** to manage cache, loading, and errors.

## 📦 State Management

We chose **React Query** because:

- It auto-caches API responses.
- Provides background refetching.
- Handles loading and error states.
- Simplifies manual refresh logic.

## 🛠️ Challenges & Solutions

| Challenge             | Solution                                                                       |
| --------------------- | ------------------------------------------------------------------------------ |
| CORS issues           | Configure the server to include the appropriate CORS headers in its responses. |
| Re-renders on search  | Optimized with local state and minimal filter logic.                           |
| Right use of API key  | Made sure to not put the API in the code, but access it from env file.         |
| Mobile responsiveness | Used simple Tailwind-like utility classes.                                     |
