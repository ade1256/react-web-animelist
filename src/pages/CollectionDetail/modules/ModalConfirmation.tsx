import { Button, Modal } from "../../../components"

type ModalProps = {
  onCloseModal: () => any,
  onConfirm: () => any
}

const styleButtonGroup = {
  display: 'flex',
  justifyContent: 'flex-end'
}

const ModalConfirmation = ({ onCloseModal, onConfirm }: ModalProps) => {
  return (
    <Modal title="Are you sure remove from this collection ?" onClose={onCloseModal}>
      <div style={styleButtonGroup}>
        <Button theme="no-bg" style={{ marginRight: 8 }} onClick={onCloseModal}>Cancel</Button>
        <Button onClick={onConfirm}>Yes, sure</Button>
      </div>
    </Modal>
  )
}

export default ModalConfirmation