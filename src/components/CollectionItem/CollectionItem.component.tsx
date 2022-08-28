import { WrapCollectionItem } from "./CollectionItem.style"
import NoCollectionImage from '../../assets/images/no_collection.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

type CollectionItemProps = {
  name: string,
  onClick?: () => any,
  coverImage?: any,
  isShowCover?: boolean,
  isShowRemoveBtn?: boolean,
  isShowEditBtn?: boolean,
  onClickRemove?: () => any,
  onClickEdit?: () => any,
  isSelected?: boolean
}

const defaultProps = {
  coverImage: NoCollectionImage,
  isShowCover: true,
  isShowRemoveBtn: false,
  isShowEditBtn: false,
  isSelected: false
}

const CollectionItemComponent = ({ name, onClick, coverImage, isShowCover, isShowRemoveBtn, isShowEditBtn, onClickEdit, onClickRemove, isSelected } : CollectionItemProps) => {
  return (
    <WrapCollectionItem data-testid='collection-item-component'>
      {
        isShowCover && (
          <div className="cover" onClick={onClick}>
            <img src={coverImage} alt={`collection-image-${name}`} />
          </div>
        )
      }
      <div className={`info-collection ${isSelected && 'selected'}`}>
        <div className="name" onClick={onClick}>{name}</div>
        {isShowEditBtn && <div className="editIcon" onClick={onClickEdit}><FontAwesomeIcon icon={solid('edit')} /></div>}
        {isShowRemoveBtn && <div className="removeIcon" onClick={onClickRemove}><FontAwesomeIcon icon={solid('trash')} /></div>}
      </div>
    </WrapCollectionItem>
  )
}

CollectionItemComponent.defaultProps = defaultProps

export default CollectionItemComponent