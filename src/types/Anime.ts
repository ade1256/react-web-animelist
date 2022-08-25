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