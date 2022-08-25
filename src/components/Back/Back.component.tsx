import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { WrapBack } from "./Back.style"

const NavbarComponent = () => {
  return (
    <WrapBack>
      <div className="btn">
        <FontAwesomeIcon icon={solid('arrow-left')} />
        <span>Back</span>
      </div>
    </WrapBack>
  )
}

export default NavbarComponent