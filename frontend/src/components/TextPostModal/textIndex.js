import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import TextPost from './TextPost';

function TextPostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
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
