import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { WrapCard } from './CardComponent.style'

type Props = {
  id: number,
  title: string,
  image: string,
  averageScore: number,
  isShowRemoveButton?: boolean,
  onRemove?: () => any
}

const defaultProps = {
  isShowRemoveButton: false
}

const CardComponent = ({id, title, image, averageScore, isShowRemoveButton, onRemove} : Props) => {
  const navigate = useNavigate()
  return (
    <WrapCard data-testid={'card-component'}>
      <div className={`score ${averageScore < 80 ? 'orange' : 'green'}`}>
          <span>{averageScore}</span>
        </div>
        {
          isShowRemoveButton && (
            <div className='remove' onClick={onRemove}>
              <FontAwesomeIcon icon={solid('trash')} />
            </div>
          )
        }
      <div className="image" onClick={() => navigate(`/detail/${id}`)}>
        <img src={image} alt={`image-of-${title}`} />
      </div>
      <span onClick={() => navigate(`/detail/${id}`)}>{title}</span>
    </WrapCard>
  )
}

CardComponent.defaultProps = defaultProps

export default CardComponent