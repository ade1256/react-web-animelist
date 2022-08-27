import { WrapCollectionItem } from "./CollectionItem.style"
import NoCollectionImage from '../../assets/images/no_collection.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

type CollectionItemProps = {
  id: number,
  name: string,
  onClick?: () => any,
  coverImage?: any,
  isShowCover?: boolean,
  isShowRemoveBtn?: boolean
}

const defaultProps = {
  coverImage: NoCollectionImage,
  isShowCover: true,
  isShowRemoveBtn: false
}

const CollectionItemComponent = ({ id, name, onClick, coverImage, isShowCover, isShowRemoveBtn } : CollectionItemProps) => {
  return (
    <WrapCollectionItem>
      {
        isShowCover && (
          <div className="cover" onClick={onClick}>
            <img src={coverImage} />
          </div>
        )
      }
      <div className="info-collection">
        <div className="name" onClick={onClick}>{name}</div>
        {isShowRemoveBtn && <div className="removeIcon"><FontAwesomeIcon icon={solid('edit')} /></div>}
      </div>
    </WrapCollectionItem>
  )
}

CollectionItemComponent.defaultProps = defaultProps

export default CollectionItemComponent