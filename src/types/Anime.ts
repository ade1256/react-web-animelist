export interface Anime {
  id: number,
  title: {
    english: string;
    native: string;
  },
  coverImage: {
    large: string
  },
  averageScore: number
}

export interface AnimeDetail extends Anime {
  duration: number,
  genres: string[],
  description: string,
  seasonYear: number,
  episodes: number,
  isAdult: boolean
}

export interface AnimeCollection extends Anime {
  collectionId: number
}

export interface Collection {
  id: number,
  name: string
}

export type AnimeCollectionList = AnimeCollection[]
export type CollectionList = Collection[]