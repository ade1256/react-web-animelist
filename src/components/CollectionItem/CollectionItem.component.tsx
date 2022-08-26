import { WrapCollectionItem } from "./CollectionItem.style"

type CollectionItemProps = {
  id: number,
  name: string
}

const CollectionItemComponent = ({ id, name } : CollectionItemProps) => {
  return (
    <WrapCollectionItem>
      <div className="name">{name}</div>
    </WrapCollectionItem>
  )
}

export default CollectionItemComponent