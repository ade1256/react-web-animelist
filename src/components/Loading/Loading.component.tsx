import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { WrapLoading } from "./Loading.style"

const LoadingComponent = () => {
  return (
    <WrapLoading data-testid="loading-component">
      <FontAwesomeIcon icon={solid('spinner')} spin/>
      <span>loading ...</span>
    </WrapLoading>
  )
}

export default LoadingComponent