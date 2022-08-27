import { AnimeCollection, AnimeCollectionList } from "../../types/Anime"

export const handleClickRemove = (item: any, state: any, setState: any) => {
  setState({
    ...state,
    showModalRemove: true,
    selectedAnime: item
  })
}

export const handleCloseModal = (type: string, state: any, setState: any) => {
  if(type === 'delete') {
    setState({...state, showModalRemove: false})
  } else {
    setState({...state, showModalRename: false})
  }
}

export const handleConfirmRemove = (state: any, setState: any, removeAnimeFromCollection: any, collectionList: Array<any>[]) => {
  const newArrayExceptId = collectionList.filter((x: any) => x.id !== state.selectedAnime.id)
  removeAnimeFromCollection(newArrayExceptId)
  handleCloseModal('delete', state, setState)
}

export const handleOnClickRename = (id: any, state: any, setState: any) => {
  setState({
    ...state,
    showModalRename: true,
    selectedCollectionId: id
  })
}