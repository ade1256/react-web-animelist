import { ChangeEvent, HTMLInputTypeAttribute } from "react"
import { StyledTextField, WrapTextField } from "./TextField.style"

type TextFieldProps = {
  placeholder?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  type: HTMLInputTypeAttribute,
  isError?: boolean,
  isDisabled: boolean,
  errorMessage?: string,
  value?: string
}

const TextFieldComponent = ({ type, onChange, placeholder, isDisabled, isError, errorMessage, value }: TextFieldProps) => {
  return (
    <WrapTextField>
      <StyledTextField type={type} placeholder={placeholder} onChange={onChange} disabled={isDisabled} value={value} />
      {
        isError && (
          <div className="error">
            <p>{errorMessage}</p>
          </div>
        )
      }
    </WrapTextField>
  )
}

const defaultProps = {
  isDisabled: false,
  isError: false
}

TextFieldComponent.defaultProps = defaultProps

export default TextFieldComponent