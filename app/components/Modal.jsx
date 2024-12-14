import { ReactNode } from 'react'

const Modal = ({ openModal, children }) => {
  return (
    <div
      className={`${
        openModal
          ? 'flex top-0 left-0 fixed h-full z-20 w-full bg-[#000] bg-opacity-75'
          : null
      }`}
    >
      {children}
    </div>
  )
}

export default Modal
