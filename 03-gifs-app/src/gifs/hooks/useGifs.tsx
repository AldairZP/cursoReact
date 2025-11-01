import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-query.action";

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);
  // const [gifsCache] = useState<Record<string, Gif[]>>({});

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    const newQuery = query.trim().toLowerCase();

    if (!newQuery || previousTerms.includes(newQuery)) return;
    setPreviousTerms((values) => [newQuery, ...values].slice(0, 8));

    const gifs = await getGifsByQuery(newQuery);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
  };

  return {
    // Properties
    gifs,
    previousTerms,

    // Methods
    handleSearch,
    handleTermClicked,
  };
};
