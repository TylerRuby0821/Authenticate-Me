import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LinkPost from './LinkPost';
import './LinkModal.css'

function LinkPostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="link__post--button" onClick={() => setShowModal(true)}>
        <span className="post__button--photo">
            🔗
        </span>
          Link
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LinkPost setShowModal= {setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default LinkPostModal;
