import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Back, Button, Card } from "../../components"
import { useAnimeContext } from "../../contexts/Anime.context"
import { AnimeCollection } from "../../types/Anime"
import { isEmpty } from "../../utils/arrayCheck"
import { handleClickRemove, handleCloseModal, handleConfirmRemove, handleOnClickRename } from "./CollectionDetailPage.handler"
import { WrapCollectionDetailPage } from "./CollectionDetailPage.style"
import ModalConfirmation from "./modules/ModalConfirmation"
import ModalRenameCollection from "./modules/ModalRenameCollection"

const CollectionDetailPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const collectionId = params.id
  const { animeCollections, collections, removeAnimeFromCollection, updateCollections } = useAnimeContext()
  const [state, setState] = useState({
    selectedAnime: {
      id: 0,
      title: {english: '', native: ''},
      coverImage: { large: ''},
      averageScore: 0
    },
    selectedCollectionId: 0,
    showModalRemove: false,
    showModalRename: false
  })

  const animeListById = animeCollections.filter((collections: any) => collections.collectionId == collectionId)
  const collectionName = collections.filter((collection: any) => collection.id == collectionId)
  
  const onConfirmRename = (value: any) => {
    const cloneCollections = collections

    cloneCollections[state.selectedCollectionId] = {
      ...cloneCollections[state.selectedCollectionId],
      name: value.name
    }
    updateCollections(cloneCollections)
    handleCloseModal('rename', state, setState)
  }

  return (
    <WrapCollectionDetailPage>
      <Back handleClick={() => { navigate(-1) }} />
      <div className="head">
        <div className="title">
          <h2>{!isEmpty(collectionName) && collectionName[0].name}</h2>
        </div>
        <div className="action">
          <Button onClick={() => handleOnClickRename(collectionId, state, setState)}>Rename</Button>
        </div>
      </div>
      <div className="card-list">
        {
          !isEmpty(animeListById) && animeListById.map((item: AnimeCollection, index: number) => {
            return (
              <Card
                id={item.id}
                key={index}
                title={item.title.english != null ? item.title.english : item.title.native}
                image={item.coverImage.large}
                averageScore={item.averageScore}
                isShowRemoveButton
                onRemove={() => handleClickRemove(item, state, setState)}
              />
            )
          })
        }
      </div>
      {state.showModalRemove && (
        <ModalConfirmation
          onCloseModal={() => handleCloseModal('delete', state, setState)}
          onConfirm={() => handleConfirmRemove(state, setState, removeAnimeFromCollection, animeCollections)}
          collectionName={collectionName[0].name}
          anime={state.selectedAnime}
        />
      )}
      {state.showModalRename && (
        <ModalRenameCollection
          onCloseModal={() => handleCloseModal('rename', state, setState)}
          onConfirm={onConfirmRename}
        />
      )}
    </WrapCollectionDetailPage>
  )
}

export default CollectionDetailPage