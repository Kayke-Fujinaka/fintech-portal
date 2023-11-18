import { theme } from '../../styles/theme';
import BaseModal from '../BaseModal';
import { IDeleteTransactionModalProps } from './@types';
import * as S from './styles';

const DeleteTransactionModal = ({
  isOpen,
  onRequestClose,
  onDelete,
}: IDeleteTransactionModalProps) => {
  const footerContent = (
    <>
      <S.Button onClick={onRequestClose}>Cancelar</S.Button>
      <S.Button
        onClick={onDelete}
        backgroundColor={theme.colors.danger}
        color={theme.colors.white}
      >
        Deletar
      </S.Button>
    </>
  );

  return (
    <BaseModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title="Excluir"
      footerContent={footerContent}
    >
      <p>Deseja deletar esta transação? A ação não pode ser revertida?</p>
    </BaseModal>
  );
};

export default DeleteTransactionModal;
