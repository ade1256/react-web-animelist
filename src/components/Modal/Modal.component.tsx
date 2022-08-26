import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { WrapModal } from "./Modal.style"

type ModalProps = {
  title: string,
  onClose: () => any,
  children: React.ReactNode
}

const ModalComponent = ({ onClose, title, children } : ModalProps) => {
  return (
    <WrapModal>
      <div className="modal">
        <div className="content-title">
          <h4>{title}</h4>
          <FontAwesomeIcon className="close" icon={solid('close')} onClick={onClose} />
        </div>
        <div className="content-body">
          {children}
        </div>
      </div>
    </WrapModal>
  )
}

export default ModalComponent