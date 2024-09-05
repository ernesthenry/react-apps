import { useState } from 'react';
import Modal from './Modal';

const ModalComposition = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        <p>You can pass any React elements as children.</p>
      </Modal>
    </div>
  );
};

export default ModalComposition;
