import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { WrapBack } from "./Back.style"

type BackProps = {
  handleClick: () => any
}

const BackComponent = (props: BackProps) => {
  return (
    <WrapBack onClick={props.handleClick}>
      <div className="btn">
        <FontAwesomeIcon icon={solid('arrow-left')} />
        <span>Back</span>
      </div>
    </WrapBack>
  )
}

export default BackComponent