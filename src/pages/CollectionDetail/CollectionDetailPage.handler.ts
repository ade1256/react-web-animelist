import { AnimeCollection, AnimeCollectionList } from "../../types/Anime"

export const handleClickRemove = (id: number, state: any, setState: any) => {
  setState({
    ...state,
    showModalRemove: true,
    selectedAnimeId: id
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
  const newArrayExceptId = collectionList.filter((x: any) => x.id !== state.selectedAnimeId)
  removeAnimeFromCollection(newArrayExceptId)
  handleCloseModal('delete', state, setState)
}