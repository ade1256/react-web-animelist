import { WrapAdultIcon } from "./AdultIcon.style"

const AdultIconComponent = () => {
  return (
    <WrapAdultIcon data-testid="adult-icon">
      <div className="icon">18+</div>
      <span>Adult content</span>
    </WrapAdultIcon>
  )
}

export default AdultIconComponent