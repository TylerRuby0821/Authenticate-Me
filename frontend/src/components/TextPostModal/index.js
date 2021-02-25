import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import TextPost from './TextPost';

function TextPostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <span className="post__button--photo">
            Aa
        </span>
          Text
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <TextPost />
        </Modal>
      )}
    </>
  );
}

export default TextPostModal;
