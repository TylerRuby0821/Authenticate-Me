import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import QuotePost from './QuotePost';

function QuotePostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <span className="post__button--photo">
          <div className='Quotes'>
            ""
          </div>
        </span>
          Quote
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <QuotePost setShowModal= {setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default QuotePostModal;
