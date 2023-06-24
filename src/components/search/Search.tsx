// src/components/search/Search.tsx

import React, { useState } from "react";

interface SearchProps {
  onSearch: (name: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4 mt-4 flex">
      <input
        type="text"
        placeholder="Search location name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="mr-0 rounded-l-lg border-b border-l border-t border-gray-200 bg-white p-4 text-gray-800"
      />
      <button
        type="submit"
        className="rounded-r-lg border-b border-r border-t border-blue-500 bg-blue-500 p-4 px-8 font-bold uppercase text-white"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
