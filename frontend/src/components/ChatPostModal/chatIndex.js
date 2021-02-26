import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ChatPost from './ChatPost';
import './ChatModal.css'

function ChatPostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="chat__post--button" onClick={() => setShowModal(true)}>
        <span className="post__button--photo">
          <div className="chat__logo">
            💬
          </div>
        </span>
          Chat
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ChatPost setShowModal= {setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default ChatPostModal;
