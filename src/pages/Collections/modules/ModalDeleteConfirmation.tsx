import { Button, Modal } from "../../../components"
import { Collection } from "../../../types/Anime"

type ModalProps = {
  onCloseModal: () => any,
  onConfirm: () => any,
  selectedCollection: Collection
}

const styleButtonGroup = {
  display: 'flex',
  justifyContent: 'flex-end'
}

const ModalRemoveConfirmation = ({ onCloseModal, onConfirm, selectedCollection}: ModalProps) => {
  return (
    <Modal title="Delete confirmation" onClose={onCloseModal}>
      <p>Are you sure to remove <b>{selectedCollection.name}</b> collection ?</p>
      <div style={styleButtonGroup}>
        <Button theme="no-bg" style={{ marginRight: 8 }} onClick={onCloseModal}>Cancel</Button>
        <Button onClick={onConfirm}>Yes, sure</Button>
      </div>
    </Modal>
  )
}

export default ModalRemoveConfirmation