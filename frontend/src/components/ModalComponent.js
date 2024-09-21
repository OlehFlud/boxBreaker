import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, onClose, details, afterOpenModal }) => {
  return (
    <Modal styles={{content: {height: '200px !important', width: '350px'}}} isOpen={isOpen} ariaHideApp={false}  onAfterOpen={afterOpenModal}>
      <h3 className="pt-3">Lootbox Details</h3>
      <h5 className="pt-5 ">{details}</h5>
    </Modal>
  );
};

export default ModalComponent;
