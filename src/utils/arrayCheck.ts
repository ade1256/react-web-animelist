export const isEmpty = (array: Array<any>[]) => {
  if(array.length < 1 || typeof array === 'undefined') {
    return true
  }

  return false
}