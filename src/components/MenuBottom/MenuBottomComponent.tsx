import { WrapMenuBottom } from "./MenuBottom.style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const MenuBottomComponent = () => {
  return (
    <WrapMenuBottom>
      <div className="menu">
        <div className="icon">
          <FontAwesomeIcon icon={solid('home')} />
        </div>
        <span>Home</span>
      </div>
      <div className="menu">
        <div className="icon">
          <FontAwesomeIcon icon={solid('star')} />
        </div>
        <span>My Collection</span>
      </div>
    </WrapMenuBottom>
  )
}

export default MenuBottomComponent