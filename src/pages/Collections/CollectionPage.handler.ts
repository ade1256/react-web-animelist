import { Collection } from "../../types/Anime"
import { isContainChar, isDuplicateCollection, isEmptyChar } from "../../utils/inputValidation"

export const validateCollectionName = (name: string, collections: Array<any>, result: any) => {
  let errorMessage: string = ''
  if(isEmptyChar(name)) {
    errorMessage = 'Cannot be empty!'
  } else if(isDuplicateCollection(name, collections)) {
    errorMessage = 'Collection name already exist!'
  } else if((isContainChar(name))) {
    errorMessage = 'Collection name cannot contain special characters!'
  }

  (errorMessage.length < 1) ? result('valid', errorMessage) : result(null, errorMessage)
}

export const handleClickIcon = (type: string, state: any, setState: any, collection: Collection) => {
  if(type === 'remove') {
    setState({
      ...state,
      selectedCollection: collection,
      isShowModalRemove: true
    })
  } else if(type === 'edit') {
    setState({
      ...state,
      selectedCollection: collection,
      isShowModalEdit: true
    })
  }
}

export const handleCloseModal = (type: string, state: any, setState: any) => {
  if(type === 'remove') {
    setState({...state, isShowModalRemove: false})
  } else if (type === 'edit') {
    setState({...state, isShowModalEdit: false})
  }
}

export const handleConfirmRemove = (state: any, setState: any, updateCollections: any, collectionList: Array<any>[]) => {
  const newArrayExceptId = collectionList.filter((x: any) => x.id !== state.selectedCollection.id)
  updateCollections(newArrayExceptId)
  handleCloseModal('remove', state, setState)
}