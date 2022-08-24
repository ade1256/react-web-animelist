import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { Card, Loading, Pagination } from '../../components'
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

const AnimeListPage = (props: Props) => {
  const [query, setQuery] = useState<any>({
    page: 1,
    perPage: 10
  })
  const fetchAnimeList = useQuery(ANIME_LIST, {variables: query})

  const handleChangePage = (page: any) => {
    if(page !== '...') {
      setQuery({...query, page: page})
    }
  }

  return (
    <WrapAnimeList>
      <Pagination currentPage={query.page} totalPage={500} handleChangePage={handleChangePage} />
      {fetchAnimeList.loading && (<Loading />)}
      <div className="card-list">
      {
        !fetchAnimeList.loading && fetchAnimeList.data.Page.media.map((item: Anime, index: number) => {
          return (
            <Card
              id={item.id}
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