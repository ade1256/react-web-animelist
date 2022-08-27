import { useQuery } from "@apollo/client"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
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
  const [selectedCollection, setSelectedCollection] = useState<any[]>([])
  const [savedToCollections, setSavedToCollections] = useState<any[]>([])
  const { collections, animeCollections, addAnimeCollection, removeAnimeFromCollection, addCollection } = useAnimeContext()
  const { loading, data } = useQuery(ANIME_DETAIL, { variables: { id: params.id } })
  const dataAnime: AnimeDetail = data?.Media

  const handleToggleModal = () => setState({ ...state, isShowModal: !state.isShowModal })

  const isAnimeSaved = animeCollections.filter((x: any) => x?.id === dataAnime?.id).length > 1

  const handleSelectCollection = async (id: number) => {
    const isSelected = selectedCollection.includes(id)
    if (isSelected) {
      setSelectedCollection((prev) => prev.filter(x => x !== id))
    } else {
      setSelectedCollection((prev) => [...prev, id])
    }
  }

  const handleSaveCollections = () => {
    selectedCollection.map((collectionId: number) => {
      addAnimeCollection({
        collectionId,
        ...dataAnime
      })
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

  useEffect(() => {
    const getCollectionsAlreadySaved = () => {
      let savedCollections: any = []
      const dataAllSaved = animeCollections.filter((x: any) => x?.id === dataAnime?.id)
      dataAllSaved.map((data: any) => {
        savedCollections.push(collections.find((x: any) => x.id === data.collectionId))
      })
  
      setSavedToCollections(savedCollections)
    }
    getCollectionsAlreadySaved()
  }, [dataAnime, collections])

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
            {isAnimeSaved && <p style={{ marginTop: 8, fontSize: 14, fontWeight: 600 }}>Saved to collections :</p> }
            <div className="collections-list">
              {
                isAnimeSaved && savedToCollections.map((collection: any, index: number) => {
                  return <CollectionItem key={index} id={collection.id} name={collection.name} onClick={() => navigate(`/collection/${collection.id}`)} isShowCover={false} />
                })
              }
            </div>
            {
              isAnimeSaved ? (
                <Button className="m-20" theme="secondary" onClick={handleRemoveCollection}><FontAwesomeIcon icon={solid('remove')} /> Remove from  all collections</Button>
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
            <p>Select to collections</p>
            <div className="content-collection">
              {
                !isEmpty(collections) && collections.map((collection: Collection, index: number) => {
                  return <CollectionItem key={index} id={collection.id} name={collection.name} onClick={() => handleSelectCollection(collection.id)} isShowCover={false} isSelected={selectedCollection.includes(collection.id)} />
                })
              }
            </div>
            <p>Add new collection name</p>
            <div className="mt-8 group-flex">
              <TextField type="text" onChange={handleChange} isError={state.isError} errorMessage={state.errorMessage} value={state.name} />
              <Button style={{ marginLeft: 8 }} onClick={handleClickAdd} isDisabled={state.isDisabled} theme="default">Add</Button>
            </div>
            <div className="mt-16" style={{ width: '100%' }}>
              <Button onClick={handleSaveCollections} isDisabled={isEmpty(selectedCollection)}>Save</Button>
            </div>
          </Modal>
        )
      }
    </WrapDetailAnimePage>
  )
}

export default DetailAnimePage