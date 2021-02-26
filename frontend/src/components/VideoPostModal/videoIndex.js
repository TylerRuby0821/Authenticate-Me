import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import VideoPost from './VideoPost';
import './VideoModal.css'

function VideoPostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="video__post--button"onClick={() => setShowModal(true)}>
        <span className="post__button--photo">
          <div className="video__logo">
            📹

          </div>
        </span>
          Video
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <VideoPost setShowModal= {setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default VideoPostModal;
