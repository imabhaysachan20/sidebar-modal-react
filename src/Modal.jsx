import React from 'react'
import {FaXbox} from "react-icons/fa"
import { useGlobalContext } from '../context'
const Modal = () => {
const {closeModal,isModalOpen} = useGlobalContext();
  return (
    <div className={isModalOpen?'modal-container show-modal':'modal-container'}>
      <div className="modal-content">
        <h2>Model Content</h2>
        <button className='close-modal' onClick={closeModal}><FaXbox/></button>
        
      </div>
    </div>
  )
}

export default Modal
