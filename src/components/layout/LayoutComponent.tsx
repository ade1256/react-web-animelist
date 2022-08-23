import MenuBottom from '../MenuBottom'
import { WrapperLayout } from './LayoutComponent.style'

type Props = {
  children: React.ReactNode
}

const LayoutComponent = (props: Props) => {
  return (
    <WrapperLayout>
      <div className='content'>
        {props.children}
        <MenuBottom />
      </div>
    </WrapperLayout>
  )
}

export default LayoutComponent