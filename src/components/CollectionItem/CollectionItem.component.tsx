import { WrapCollectionItem } from "./CollectionItem.style"
import NoCollectionImage from '../../assets/images/no_collection.png'

type CollectionItemProps = {
  id: number,
  name: string,
  onClick?: () => any,
  coverImage?: any,
  isShowCover?: boolean
}

const defaultProps = {
  coverImage: NoCollectionImage,
  isShowCover: true
}

const CollectionItemComponent = ({ id, name, onClick, coverImage, isShowCover } : CollectionItemProps) => {
  return (
    <WrapCollectionItem onClick={onClick}>
      {
        isShowCover && (
          <div className="cover">
            <img src={coverImage} />
          </div>
        )
      }
      <div className="name">{name}</div>
    </WrapCollectionItem>
  )
}

CollectionItemComponent.defaultProps = defaultProps

export default CollectionItemComponent