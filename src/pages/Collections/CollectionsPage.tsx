import { useState } from "react"
import { Button, CollectionItem, Modal, TextField } from "../../components"
import { useAnimeContext } from "../../contexts/Anime.context"
import { isEmpty } from "../../utils/arrayCheck"
import { WrapCollectionsPage } from "./CollectionsPage.style"
import { AnimeCollection, Collection } from '../../types/Anime'
import { validateCollectionName } from "./CollectionPage.handler"

const CollectionsPage = () => {
  const { collections, animeCollections, addCollection } = useAnimeContext()
  const [state, setState] = useState({
    name: '',
    isError: true,
    isShowModal: false,
    isDisabled: true,
    errorMessage: 'Name cannot empty!'
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
            return <CollectionItem key={index} id={collection.id} name={collection.name} />
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
    </WrapCollectionsPage>
  )
}

export default CollectionsPage