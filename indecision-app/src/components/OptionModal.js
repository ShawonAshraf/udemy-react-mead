import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      ariaHideApp={false}
      onRequestClose={props.clear}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.clear}>Okay!</button>
    </Modal>
  )
};

export default OptionModal;
