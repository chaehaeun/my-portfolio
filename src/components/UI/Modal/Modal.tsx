import React from 'react'
import ReactDOM from 'react-dom'

interface BackdropProps {
  onClose: () => void
}

interface ModalOverlayProps {
  children: React.ReactNode
  onClose: () => void
}

interface ModalProps extends BackdropProps, ModalOverlayProps {}

const Backdrop = ({ onClose }: BackdropProps) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-screen bg-modalBackDrop"
      onClick={onClose}
    ></div>
  )
}

const ModalOverlay = ({ children, onClose }: ModalOverlayProps) => {
  return (
    <div className="fixed -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black z-[60] top-1/2 left-1/2 w-80 shadow-wrap text-dayContent">
      <div className="w-full py-6 text-center">
        <p>{children}</p>
      </div>
      <button
        className="w-full py-4 text-white transition-colors duration-200 ease-in border-t-2 border-black bg-dayPoint hover:bg-dayPointHover focus:bg-dayPointHover dark:bg-nightPoint dark:hover:bg-nightPointHover dark:focus:bg-nightPointHover dark:text-dayContent"
        onClick={onClose}
        type="button"
      >
        확인
      </button>
    </div>
  )
}

// 모달을 렌더링하기 위한 포털 요소
const portalElement: HTMLElement | null = document.getElementById('overlays')

const Modal = ({ onClose, children }: ModalProps) => {
  if (portalElement) {
    return (
      <>
        {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
        {ReactDOM.createPortal(
          <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
          portalElement,
        )}
      </>
    )
  }

  return null
}

export default Modal
