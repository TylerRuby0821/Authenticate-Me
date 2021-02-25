import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PhotoPost from './PhotoPost';

function PhotoPostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <span className="post__button--photo">
            📷
        </span>
          Photo
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PhotoPost setShowModal= {setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default PhotoPostModal;
