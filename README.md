# Crypto Price Tracker

## Overview

The Crypto Price Tracker is a web application built with Next.js that allows users to view live cryptocurrency prices. The application fetches data from a public API and provides a user-friendly dashboard to track the prices of various cryptocurrencies.

## Project Structure

The project is organized into two main directories: `web-app` for the Next.js application and `docs` for the Docusaurus documentation.

### web-app

- **public/**: Contains static assets such as images and icons.
- **src/**: Contains the source code for the application.
  - **components/**: React components used throughout the application.
  - **utils/**: Utility functions for API calls.
  - **state/**: State management logic using React Query.
  - **page.tsx**: Main page of the application.
- **next.config.ts**: Next.js configuration file.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file.

### docs

- **docs/**: Contains documentation files.
  - **markdown-page.md**: Guide on how to set up and run the web application and documentation about the application usecases and technologies used.
- **docusaurus.config.js**: Configuration file for Docusaurus.
- **package.json**: Configuration file for npm in the Docusaurus project.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd crypto-price-tracker
   ```

2. Install dependencies for the web application:

   ```
   cd web-app
   npm install
   ```

3. Install dependencies for the documentation:
   ```
   cd ../docs
   npm install
   ```

### Running the Applications

- To run the web application:

  ```
  cd web-app
  npm run dev
  ```

  The application will be available at `http://localhost:3000`.

- To run the documentation:
  ```
  cd docs
  npm run start
  ```
  The documentation will be available at `http://localhost:3001`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
