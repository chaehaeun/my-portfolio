import { useCallback, useState } from 'react'

const useModal = (initialState = { showModal: false, content: '' }) => {
  const [modalState, setModalState] = useState(initialState)

  const openModal = useCallback((content: string) => {
    setModalState({ showModal: true, content })
  }, [])

  const closeModal = useCallback(() => {
    setModalState({ showModal: false, content: '' })
  }, [])

  return { ...modalState, openModal, closeModal }
}

export default useModal
