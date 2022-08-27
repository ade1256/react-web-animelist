import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Back, Button, Card } from "../../components"
import { useAnimeContext } from "../../contexts/Anime.context"
import { AnimeCollection } from "../../types/Anime"
import { isEmpty } from "../../utils/arrayCheck"
import { handleClickRemove, handleCloseModal, handleConfirmRemove } from "./CollectionDetailPage.handler"
import { WrapCollectionDetailPage } from "./CollectionDetailPage.style"
import ModalConfirmation from "./modules/ModalConfirmation"

const CollectionDetailPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const collectionId = params.id
  const { animeCollections, collections, removeAnimeFromCollection } = useAnimeContext()
  const [state, setState] = useState({
    selectedAnimeId: 0,
    showModalRemove: false,
    showModalRename: false
  })

  const animeListById = animeCollections.filter((collections: any) => collections.collectionId == collectionId)
  const collectionName = collections.filter((collection: any) => collection.id == collectionId)

  return (
    <WrapCollectionDetailPage>
      <Back handleClick={() => { navigate(-1) }} />
      <div className="head">
        <div className="title">
          <h2>{!isEmpty(collectionName) && collectionName[0].name}</h2>
        </div>
        <div className="action">
          <Button>Rename</Button>
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
                onRemove={() => handleClickRemove(item.id, state, setState)}
              />
            )
          })
        }
      </div>
      {state.showModalRemove && (
        <ModalConfirmation
          title="Are you sure remove from this collection ?"
          onCloseModal={() => handleCloseModal('delete', state, setState)}
          onConfirm={() => handleConfirmRemove(state, setState, removeAnimeFromCollection, animeCollections)}
        />
      )}
    </WrapCollectionDetailPage>
  )
}

export default CollectionDetailPage