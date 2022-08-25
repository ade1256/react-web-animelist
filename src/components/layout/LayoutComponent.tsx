import MenuBottom from '../MenuBottom'
import { WrapperLayout } from './LayoutComponent.style'

type Props = {
  children: React.ReactNode
}

const LayoutComponent = (props: Props) => {
  return (
    <WrapperLayout>
      <div className='content'>
        <div className='content-body'>
          {props.children}
        </div>
        <MenuBottom />
      </div>
    </WrapperLayout>
  )
}

export default LayoutComponent