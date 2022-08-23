import React, { useContext, useState } from "react";

export const AnimeContext = React.createContext<any>(null);
export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeContextProvider = ({ children } : any) => {
  const [animeList, setAnimeList] = useState<any>([])
  return (
    <AnimeContext.Provider
      value={{
        animeList
      }}
    >
      {children}
    </AnimeContext.Provider>
  )
}