"use client"

import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce'; // Assuming you have a useDebounce hook

type SearchProps = {
  handleSearch: (term: string) => void

}

const Search: React.FC<SearchProps> = ({ handleSearch }) =>  {
  const [query, setQuery] = useState("")
  const debouncedSearch = useDebounce(query, 500); // 500ms debounce delay

  // Call onSearch whenever debouncedSearch changes
  useEffect(() => {
    handleSearch(debouncedSearch);
    console.log('Debounced search term:', debouncedSearch);

  }, [debouncedSearch]);

  return (
    <div className="search-container"> 
      <input
        className={`searchbar`} 
        type="text"
        placeholder="Search for Pokémon"
        value={query}
        onChange={(e: any) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;