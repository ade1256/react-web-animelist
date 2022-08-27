import { useState } from "react"
import { Button, Modal, TextField } from "../../../components"
import { useAnimeContext } from "../../../contexts/Anime.context"
import { validateCollectionName } from "../../Collections/CollectionPage.handler"

type ModalProps = {
  onCloseModal: () => any,
  onConfirm: any
}

const styleButtonGroup = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: 16
}

const ModalRenameCollection = ({ onCloseModal, onConfirm }: ModalProps) => {
  const { collections } = useAnimeContext()
  const [state, setState] = useState({
    name: '',
    isError: true,
    isDisabled: true,
    errorMessage: 'Name cannot empty!'
  })

  const handleChange = (e: any) => {
    const value = e.target.value
    validateCollectionName(value, collections, (data: any, err: any) => {
      if (data === 'valid') {
        setState({
          ...state,
          name: value,
          isError: false,
          isDisabled: false
        })
      } else {
        setState({
          ...state,
          name: value,
          isError: true,
          isDisabled: true,
          errorMessage: err
        })
      }
    })
  }

  return (
    <Modal title="Rename collection name" onClose={onCloseModal}>
      <TextField type="text" onChange={handleChange} isError={state.isError} errorMessage={state.errorMessage} />
      <div style={styleButtonGroup}>
        <Button theme="no-bg" style={{ marginRight: 8 }} onClick={onCloseModal}>Cancel</Button>
        <Button onClick={() => onConfirm(state)} isDisabled={state.isDisabled}>Submit</Button>
      </div>
    </Modal>
  )
}

export default ModalRenameCollection