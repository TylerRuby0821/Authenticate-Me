import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AudioPost from './AudioPost';

function AudioPostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <span className="post__button--photo">
          <div className="audio__logo">
            🔊

          </div>
        </span>
          Audio
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AudioPost setShowModal= {setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default AudioPostModal;
