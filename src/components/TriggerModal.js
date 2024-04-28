import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import UsernameModal from "./UsernameModal"; // Ensure correct import path

const ChangeUsernameTrigger = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={handleOpenModal}>Change Username</Button>
      {showModal && (
        <UsernameModal show={showModal} onHide={handleCloseModal} />
      )}
    </>
  );
};

export default ChangeUsernameTrigger;
