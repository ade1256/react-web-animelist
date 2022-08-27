import { Button, Modal } from "../../../components"
import { Anime } from "../../../types/Anime"

type ModalProps = {
  onCloseModal: () => any,
  onConfirm: () => any,
  collectionName: string,
  anime: Anime
}

const styleButtonGroup = {
  display: 'flex',
  justifyContent: 'flex-end'
}

const ModalConfirmation = ({ onCloseModal, onConfirm, collectionName, anime}: ModalProps) => {
  return (
    <Modal title="Delete confirmation" onClose={onCloseModal}>
      <p>Are you sure to remove <b>{anime.title.english ? anime.title.english : anime.title.native}</b> from <b>{collectionName}</b> collection ?</p>
      <div style={styleButtonGroup}>
        <Button theme="no-bg" style={{ marginRight: 8 }} onClick={onCloseModal}>Cancel</Button>
        <Button onClick={onConfirm}>Yes, sure</Button>
      </div>
    </Modal>
  )
}

export default ModalConfirmation