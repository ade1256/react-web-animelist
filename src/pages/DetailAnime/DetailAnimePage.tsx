import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { Back, Loading } from "../../components"
import { ANIME_DETAIL } from "../../queries/anime"
import { AnimeDetail } from "../../types/Anime"
import { WrapDetailAnimePage } from "./DetailAnimePage.style"

type PageProps = {}

const DetailAnimePage = (props: PageProps) => {
  const params = useParams()
  const { loading, data } = useQuery(ANIME_DETAIL, { variables: { id: params.id } })
  const dataAnime: AnimeDetail = data?.Media
  return (
    <WrapDetailAnimePage>
      <Back />
      {loading && <Loading />}
      {
        !loading && (
          <div className="content-head">
            <div className="cover">
              <img src={dataAnime.coverImage.large} />
            </div>
            <div className="detail-title">
              <h2>{dataAnime.title.english ? dataAnime.title.english : dataAnime.title.native}</h2>
              <div className="genres">
                {
                  data.Media.genres.map((genre: string, index: number) => {
                    return <span key={index}>{genre}</span>
                  })
                }
              </div>
              <div className="counting">
                <div className="item">
                  <span>Score</span>
                  <span>{dataAnime.averageScore}</span>
                </div>
                <div className="item">
                  <span>Season Year</span>
                  <span>{dataAnime.seasonYear}</span>
                </div>
                <div className="item">
                  <span>Episodes</span>
                  <span>{dataAnime.episodes}</span>
                </div>
              </div>
              <div className="description" dangerouslySetInnerHTML={{__html: dataAnime.description}} />
            </div>
          </div>
        )
      }
    </WrapDetailAnimePage>
  )
}

export default DetailAnimePage