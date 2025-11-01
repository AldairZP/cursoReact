import { GifList } from "./gifs/components/GifList";
import { PreviewsSearches } from "./gifs/components/PreviewsSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre el Gif Perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Buscar Gif" onQuery={handleSearch} />

      {/* PreviousSearches */}
      <PreviewsSearches
        searches={previousTerms}
        onLabelClick={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
