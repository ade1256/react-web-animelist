import { useQuery } from "@apollo/client"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AdultIcon, Back, Button, CollectionItem, Loading, Modal } from "../../components"
import { useAnimeContext } from "../../contexts/Anime.context"
import { ANIME_DETAIL } from "../../queries/anime"
import { AnimeDetail, Collection } from "../../types/Anime"
import { isEmpty } from "../../utils/arrayCheck"
import { WrapDetailAnimePage } from "./DetailAnimePage.style"

const DetailAnimePage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [state, setState] = useState({
    isShowModal: false
  })
  const { collections, animeCollections, addAnimeCollection, removeAnimeFromCollection } = useAnimeContext()
  const { loading, data } = useQuery(ANIME_DETAIL, { variables: { id: params.id } })
  const dataAnime: AnimeDetail = data?.Media

  const handleToggleModal = () => setState({ ...state, isShowModal: !state.isShowModal })

  const isAnimeSaved = animeCollections.filter((x: any) => x?.id === dataAnime?.id).length === 1

  const handleSelectCollection = (id: number) => {
    addAnimeCollection({
      collectionId: id,
      ...dataAnime
    })
    handleToggleModal()
  }

  const handleRemoveCollection = () => {
    const removeFromList = animeCollections.filter((x: any) => x?.id !== dataAnime?.id)
    removeAnimeFromCollection(removeFromList)
  }
  return (
    <WrapDetailAnimePage>
      <Back handleClick={() => { navigate(-1) }} />
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
            <div className="additional-information">
              <div className="time">
                <FontAwesomeIcon icon={solid('clock')} />
                <span>{dataAnime.duration} minutes</span>
              </div>
              {dataAnime.isAdult && <AdultIcon />}
            </div>
            <div className="description" dangerouslySetInnerHTML={{ __html: dataAnime.description }} />
            {
              isAnimeSaved ? (
                <Button className="m-20" theme="secondary" onClick={handleRemoveCollection}><FontAwesomeIcon icon={solid('remove')} /> Remove from collection</Button>
              ) : (
                <Button className="m-20" onClick={handleToggleModal}><FontAwesomeIcon icon={solid('plus')} /> Collection</Button>
              )
            }
          </div>
        )
      }
      {
        state.isShowModal && (
          <Modal title="Add to my collection..." onClose={handleToggleModal}>
            <div className="content-collection">
              {
                !isEmpty(collections) && collections.map((collection: Collection, index: number) => {
                  return <CollectionItem key={index} id={collection.id} name={collection.name} onClick={() => handleSelectCollection(collection.id)} />
                })
              }
            </div>
          </Modal>
        )
      }
    </WrapDetailAnimePage>
  )
}

export default DetailAnimePage