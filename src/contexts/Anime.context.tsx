import React, { useContext, useEffect, useState } from "react";
import { AnimeCollection, AnimeCollectionList, Collection, CollectionList } from "../types/Anime";

export const AnimeContext = React.createContext<any>(null);
export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeContextProvider = ({ children }: any) => {
  const [isRefetch, setIsRefetch] = useState(true)
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
    setIsRefetch(true)
  }

  const updateCollections = (data: CollectionList) => {
    localStorage.setItem("collections", JSON.stringify(data))
    setCollections(data)
    setIsRefetch(true)
  }

  const addAnimeCollection = (data: AnimeCollection) => {
    let myCollection = animeCollections
    myCollection.push(data)
    localStorage.setItem("anime_collections", JSON.stringify(myCollection))
    setAnimeCollections(myCollection)
    setIsRefetch(true)
  }

  const removeAnimeFromCollection = (data: AnimeCollectionList) => {
    localStorage.setItem("anime_collections", JSON.stringify(data))
    setAnimeCollections(data)
    setIsRefetch(true)
  }

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
    setIsRefetch(false)
  }

  useEffect(() => {
    // Initiate state from localstorage list of collection anime
    fetchingLocalstorage("anime_collections")
    fetchingLocalstorage("collections")
  }, [])

  useEffect(() => {
    if(isRefetch) {
      fetchingLocalstorage("anime_collections")
      fetchingLocalstorage("collections")
    }
  }, [isRefetch])

  return (
    <AnimeContext.Provider
      value={{
        collections,
        addCollection,
        updateCollections,
        animeCollections,
        addAnimeCollection,
        removeAnimeFromCollection
      }}
    >
      {children}
    </AnimeContext.Provider>
  )
}