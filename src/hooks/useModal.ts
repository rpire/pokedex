import { useState } from 'react';

type Hook = {
  modalVisibility: string;
  curtainVisibility: string;
  openModal: () => void;
  closeModal: () => void;
}

const useModal = (initState = 'invisible'): Hook => {
  const [modalVisibility, setModalVisibility] = useState(initState);
  const [curtainVisibility, setCurtainVisibility] = useState(initState);

  const openModal = (): void => {
    setCurtainVisibility('curtain-transition');
    setModalVisibility('modal-transition');

    setTimeout(() => {
      setCurtainVisibility('');
      setModalVisibility('');
    }, 0);
  };

  const closeModal = (): void => {
    setModalVisibility('modal-transition');
    setCurtainVisibility('curtain-transition');

    setTimeout(() => {
      setModalVisibility('invisible');
      setCurtainVisibility('invisible');
    }, 500);
  };

  return {
    modalVisibility, curtainVisibility, openModal, closeModal,
  };
};

export default useModal;
