export const isContainChar = (word: string) => {
  const regex = /^[a-zA-Z0-9]*$/
  return !regex.test(word)
}

export const isDuplicateCollection = (name: string, arr: Array<any>) => {
  const findName = arr.filter(x => x.name === name)
  return findName.length > 0
}

export const isEmptyChar = (name: string) => {
  return name.length < 1
}