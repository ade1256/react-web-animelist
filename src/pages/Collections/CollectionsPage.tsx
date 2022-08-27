import { useState } from "react"
import { Button, CollectionItem, Modal, TextField } from "../../components"
import { useAnimeContext } from "../../contexts/Anime.context"
import { isEmpty } from "../../utils/arrayCheck"
import { WrapCollectionsPage } from "./CollectionsPage.style"
import { AnimeCollection, Collection } from '../../types/Anime'
import { handleClickIcon, handleCloseModal, handleConfirmRemove, validateCollectionName } from "./CollectionPage.handler"
import { useNavigate } from "react-router-dom"
import ModalRemoveConfirmation from "./modules/ModalDeleteConfirmation"
import ModalRenameCollection from "./modules/ModalRenameCollection"

const CollectionsPage = () => {
  const navigate = useNavigate()
  const { collections, animeCollections, addCollection, updateCollections, removeAnimeFromCollection } = useAnimeContext()
  const [state, setState] = useState({
    name: '',
    isError: true,
    isShowModal: false,
    isDisabled: true,
    errorMessage: 'Name cannot empty!',
    selectedCollection: {
      id: 0,
      name: ''
    },
    isShowModalRemove: false,
    isShowModalEdit: false
  })
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

  const handleToggleModal = () => setState({ ...state, isShowModal: !state.isShowModal })
  const handleClickAdd = () => {
    addCollection(state)
    handleToggleModal()
  }

  const getFirstImageByCollectionId = (id: number) => {
    const findCollection = animeCollections.filter((anime: AnimeCollection) => anime.collectionId === id)
    if (!isEmpty(findCollection)) {
      return findCollection[0].coverImage.large
    }
  }
  const handleClick = (id: number) => {
    navigate(`/collection/${id}`)
  }

  const onConfirmRename = (value: any) => {
    const cloneCollections = collections

    cloneCollections[state.selectedCollection.id] = {
      ...cloneCollections[state.selectedCollection.id],
      name: value.name
    }
    updateCollections(cloneCollections)
    handleCloseModal('edit', state, setState)
  }

  return (
    <WrapCollectionsPage>
      <div className="head">
        <div className="title">
          <h2>My Collections</h2>
        </div>
        <div className="action">
          <Button onClick={handleToggleModal}>Add</Button>
        </div>
      </div>
      <div className="content-collection">
        {
          !isEmpty(collections) && collections.map((collection: Collection, index: number) => {
            return <CollectionItem key={index}
              id={collection.id}
              name={collection.name}
              coverImage={getFirstImageByCollectionId(collection.id)}
              onClick={() => handleClick(collection.id)}
              isShowRemoveBtn
              isShowEditBtn
              onClickRemove={() => handleClickIcon('remove', state, setState, collection)}
              onClickEdit={() => handleClickIcon('edit', state, setState, collection)}
            />
          })
        }
      </div>
      {
        state.isShowModal && (
          <Modal title="Add Collection" onClose={handleToggleModal}>
            <TextField type="text" onChange={handleChange} isError={state.isError} errorMessage={state.errorMessage} />
            <Button style={{ width: '-webkit-fill-available', marginTop: 8 }} onClick={handleClickAdd} isDisabled={state.isDisabled}>Add</Button>
          </Modal>
        )
      }
      {
        state.isShowModalRemove && (
          <ModalRemoveConfirmation
            onCloseModal={() => handleCloseModal('remove', state, setState)}
            onConfirm={() => handleConfirmRemove(state, setState, updateCollections, collections, removeAnimeFromCollection, animeCollections)}
            selectedCollection={state.selectedCollection}
          />
        )
      }
      {
        state.isShowModalEdit && (
          <ModalRenameCollection
            onCloseModal={() => handleCloseModal('edit', state, setState)}
            onConfirm={onConfirmRename}
          />
        )
      }
    </WrapCollectionsPage>
  )
}

export default CollectionsPage