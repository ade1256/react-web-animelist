import { WrapCard } from './CardComponent.style'

type Props = {
  title: string,
  image: string,
  averageScore: number
}

const CardComponent = ({title, image, averageScore} : Props) => {
  return (
    <WrapCard>
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