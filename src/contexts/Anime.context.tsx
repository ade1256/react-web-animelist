import React, { useContext, useEffect, useState } from "react";
import { AnimeCollection, AnimeCollectionList, Collection, CollectionList } from "../types/Anime";

export const AnimeContext = React.createContext<any>(null);
export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeContextProvider = ({ children }: any) => {
  const [collections, setCollections] = useState<CollectionList>([])
  const [animeCollections, setAnimeCollections] = useState<AnimeCollectionList>([])

  const addCollection = (state: Collection) => {
    let myCollection = collections
    myCollection.push({
      id: myCollection.length,
      name: state.name
    })
    localStorage.setItem("collections", JSON.stringify(myCollection))
    setCollections(myCollection)
  }

  const addAnimeCollection = (data: AnimeCollection) => {
    let myCollection = animeCollections
    myCollection.push(data)
    localStorage.setItem("anime_collections", JSON.stringify(myCollection))
    setAnimeCollections(myCollection)
  }

  const removeAnimeFromCollection = (data: AnimeCollectionList) => {
    localStorage.setItem("anime_collections", JSON.stringify(data))
    setAnimeCollections(data)
  }

  useEffect(() => {
    // Initiate state from localstorage list of collection anime
    const fetchingLocalstorage = (name: string) => {
      const getLocalStorage = localStorage.getItem(name)
      if (getLocalStorage === null) {
        localStorage.setItem(name, JSON.stringify([]))
      } else {
        if (name === "anime_collections") {
          setAnimeCollections(JSON.parse(getLocalStorage))
        }
        if (name === "collections") {
          setCollections(JSON.parse(getLocalStorage))
        }
      }
    }
    fetchingLocalstorage("anime_collections")
    fetchingLocalstorage("collections")
  }, [])

  return (
    <AnimeContext.Provider
      value={{
        collections,
        addCollection,
        animeCollections,
        addAnimeCollection,
        removeAnimeFromCollection
      }}
    >
      {children}
    </AnimeContext.Provider>
  )
}