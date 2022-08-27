import { useQuery } from "@apollo/client"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AdultIcon, Back, Button, CollectionItem, Loading, Modal, TextField } from "../../components"
import { useAnimeContext } from "../../contexts/Anime.context"
import { ANIME_DETAIL } from "../../queries/anime"
import { AnimeDetail, Collection } from "../../types/Anime"
import { isEmpty } from "../../utils/arrayCheck"
import { validateCollectionName } from "../Collections/CollectionPage.handler"
import { WrapDetailAnimePage } from "./DetailAnimePage.style"

const DetailAnimePage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [state, setState] = useState({
    name: '',
    isError: true,
    isShowModal: false,
    isDisabled: true,
    errorMessage: 'Name cannot empty!'
  })
  const { collections, animeCollections, addAnimeCollection, removeAnimeFromCollection, addCollection } = useAnimeContext()
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

  const handleChange = (e: any) => {
    const value = e.target.value
    validateCollectionName(value, collections, (data: any, err: any) => {
      if (data === 'valid') {
        setState({
          ...state,
          name: value,
          isError: false,
          isDisabled: false
        })
      } else {
        setState({
          ...state,
          name: value,
          isError: true,
          isDisabled: true,
          errorMessage: err
        })
      }
    })
  }

  const handleClickAdd = () => {
    addCollection(state)
    setState({
      ...state,
      name: ''
    })
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
                  return <CollectionItem key={index} id={collection.id} name={collection.name} onClick={() => handleSelectCollection(collection.id)} isShowCover={false} />
                })
              }
            </div>
            <div className="mt-16">
            <TextField type="text" onChange={handleChange} isError={state.isError} errorMessage={state.errorMessage} value={state.name} />
            <Button style={{ width: '-webkit-fill-available', marginTop: 8 }} onClick={handleClickAdd} isDisabled={state.isDisabled}>Add</Button>
            </div>
          </Modal>
        )
      }
    </WrapDetailAnimePage>
  )
}

export default DetailAnimePage