import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import TextPost from './TextPost';
import './TextModal.css'

function TextPostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className= "text__post--button" onClick={() => setShowModal(true)}>
        <span className="post__button--photo">
          <div className="text__logo">
            Aa

          </div>
        </span>
          Text
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <TextPost setShowModal= {setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default TextPostModal;
