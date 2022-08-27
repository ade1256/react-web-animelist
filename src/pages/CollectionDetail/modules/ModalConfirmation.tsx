import { Button, Modal } from "../../../components"

type ModalProps = {
  title: string,
  onCloseModal: () => any,
  onConfirm: () => any
}

const styleButtonGroup = {
  display: 'flex',
  justifyContent: 'flex-end'
}

const ModalConfirmation = ({ title, onCloseModal, onConfirm} : ModalProps) => {
  return (
    <Modal title={title} onClose={onCloseModal}>
      <div style={styleButtonGroup}>
      <Button theme="no-bg" style={{marginRight: 8}} onClick={onCloseModal}>Cancel</Button>
      <Button onClick={onConfirm}>Yes, sure</Button>
      </div>
    </Modal>
  )
}

export default ModalConfirmation