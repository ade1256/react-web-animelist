import { WrapMenuBottom } from "./MenuBottom.style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useNavigate } from "react-router-dom"

const MenuBottomComponent = () => {
  const navigate = useNavigate()
  return (
    <WrapMenuBottom>
      <div className="menu" onClick={() => navigate('/')}>
        <div className="icon">
          <FontAwesomeIcon icon={solid('home')} />
        </div>
        <span>Home</span>
      </div>
      <div className="menu" onClick={() => navigate('/collections')}>
        <div className="icon">
          <FontAwesomeIcon icon={solid('star')} />
        </div>
        <span>My Favorite</span>
      </div>
    </WrapMenuBottom>
  )
}

export default MenuBottomComponent