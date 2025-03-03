import React from "react";
import TextField from "@mui/material/TextField";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search cryptocurrency..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 flex-1 rounded"
    />
  );
};

export default SearchBar;
