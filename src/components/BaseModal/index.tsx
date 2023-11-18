import ReactModal from 'react-modal';

import { IBaseModalProps } from './@types';
import * as S from './styles';

ReactModal.setAppElement('#root');

const BaseModal = ({
  isOpen,
  onRequestClose,
  title,
  children,
  footerContent,
}: IBaseModalProps) => {
  return (
    <S.StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      overlayClassName="Overlay"
    >
      <S.ModalHeader>
        <h2>{title}</h2>
        <S.CloseButton onClick={onRequestClose}>X</S.CloseButton>
      </S.ModalHeader>
      <S.ModalBody>{children}</S.ModalBody>
      <S.ModalFooter>{footerContent}</S.ModalFooter>
    </S.StyledModal>
  );
};

export default BaseModal;
