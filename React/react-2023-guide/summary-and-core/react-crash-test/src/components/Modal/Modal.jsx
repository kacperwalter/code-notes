import { useState } from 'react'

import styles from './Modal.module.css'

const Modal = ({ children, onBackdropClick, isVisible }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onBackdropClick} />
      <dialog open={isVisible} className={styles.modal}>
        {children}
      </dialog>
    </>
  )
}

export default Modal