import React from "react"
import { WrapButton } from "./Button.style"

type ButtonProps = {
  children: React.ReactNode,
  style?: React.CSSProperties,
  theme?: string,
  className?: string,
  onClick?: () => any,
  isDisabled?: boolean
}

const defaultProps = {
  theme: 'primary'
}

const ButtonComponent = (props: ButtonProps) => {

  const _renderButton = ():any => {
    if(props.theme === 'primary') {
      return <div className={`button primary`}>{props.children}</div>
    } else if(props.theme === 'secondary') {
      return <div className={`button secondary`}>{props.children}</div>
    } 
    else {
      return <div className={`button default`}>{props.children}</div>
    }
  }

  return (
    <WrapButton data-testid="button-component" className={props.className} onClick={props.onClick} style={props.style} disabled={props.isDisabled}>
      {_renderButton()}
    </WrapButton>
  )
}

ButtonComponent.defaultProps = defaultProps

export default ButtonComponent