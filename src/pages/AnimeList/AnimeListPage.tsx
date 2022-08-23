import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Card, Loading } from '../../components'
import { useAnimeContext } from '../../contexts/Anime.context'
import { ANIME_LIST } from '../../queries/anime'
import { WrapAnimeList } from './AnimeListPage.style'
type Props = {}

type Anime = {
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

const mockData = [
  {
    title: "Trigun",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6-Zzun7PHNNgPt.jpg"
  }
]

const AnimeListPage = (props: Props) => {
  const [query, setQuery] = useState<any>({
    page: 1,
    perPage: 10
  })
  const fetchAnimeList = useQuery(ANIME_LIST, {variables: query})
  const { animeList } = useAnimeContext()
  console.log(fetchAnimeList)

  return (
    <WrapAnimeList>
      {fetchAnimeList.loading && (<Loading />)}
      <div className="card-list">
      {
        !fetchAnimeList.loading && fetchAnimeList.data.Page.media.map((item: Anime, index: number) => {
          return (
            <Card
              key={index}
              title={item.title.english != null ? item.title.english : item.title.native}
              image={item.coverImage.large}
              averageScore={item.averageScore}
            />
          )
        })
      }
      </div>
    </WrapAnimeList>
  )
}

export default AnimeListPage