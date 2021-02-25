import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ChatPost from './ChatPost';

function ChatPostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
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
