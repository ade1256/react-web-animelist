import { WrapCollectionItem } from "./CollectionItem.style"

type CollectionItemProps = {
  id: number,
  name: string,
  onClick?: () => any
}

const CollectionItemComponent = ({ id, name, onClick } : CollectionItemProps) => {
  return (
    <WrapCollectionItem onClick={onClick}>
      <div className="name">{name}</div>
    </WrapCollectionItem>
  )
}

export default CollectionItemComponent