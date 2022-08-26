import React from "react"
import { WrapButton } from "./Button.style"

type ButtonProps = {
  children: React.ReactNode,
  style?: React.CSSProperties,
  theme?: string,
  className?: string
}

const defaultProps = {
  theme: 'primary'
}

const ButtonComponent = (props: ButtonProps) => {

  const _renderButton = ():any => {
    if(props.theme === 'primary') {
      return <div className={`button primary`}>{props.children}</div>
    }
  }

  return (
    <WrapButton className={props.className}>
      {_renderButton()}
    </WrapButton>
  )
}

ButtonComponent.defaultProps = defaultProps

export default ButtonComponent