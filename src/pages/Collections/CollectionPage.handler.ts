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