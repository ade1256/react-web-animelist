import { useNavigate } from 'react-router-dom'
import { WrapCard } from './CardComponent.style'

type Props = {
  id: number,
  title: string,
  image: string,
  averageScore: number
}

const CardComponent = ({id, title, image, averageScore} : Props) => {
  const navigate = useNavigate()
  return (
    <WrapCard onClick={() => navigate(`/detail/${id}`)}>
      <div className="image">
        <div className={`score ${averageScore < 80 ? 'orange' : 'green'}`}>
          <span>{averageScore}</span>
        </div>
        <img src={image} />
      </div>
      <span>{title}</span>
    </WrapCard>
  )
}

export default CardComponent