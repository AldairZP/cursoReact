import { useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  // Debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query.toLowerCase().trim());
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query.toLowerCase().trim());
    setQuery("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
