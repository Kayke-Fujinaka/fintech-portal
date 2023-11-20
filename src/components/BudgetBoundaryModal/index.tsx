import { useState } from 'react';

import { theme } from '../../styles/theme';
import BaseModal from '../BaseModal';
import * as S from './styles';

export interface IBudgetBoundaryModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onLimitSubmit: (limit: number) => void;
}

const BudgetBoundaryModal = ({
  isOpen,
  onRequestClose,
  onLimitSubmit,
}: IBudgetBoundaryModalProps) => {
  const [limit, setLimit] = useState<string>('');

  const handleLimitSubmit = () => {
    const limitValue = parseFloat(limit);
    if (!isNaN(limitValue)) {
      onLimitSubmit(limitValue);
      onRequestClose();
    } else {
      alert('Por favor, insira um número válido.');
    }
  };

  const footerContent = (
    <>
      <S.Button onClick={onRequestClose}>Cancelar</S.Button>
      <S.Button
        onClick={handleLimitSubmit}
        backgroundColor={theme.colors.secondary}
        color={theme.colors.white}
      >
        Definir Limite
      </S.Button>
    </>
  );

  return (
    <BaseModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title="Limite de Gasto"
      footerContent={footerContent}
    >
      <S.ModalBody>
        <label htmlFor="spending-limit">Despesas</label>
        <input
          id="spending-limit"
          type="number"
          value={limit}
          placeholder="Valor"
          onChange={e => setLimit(e.target.value)}
        />
      </S.ModalBody>
    </BaseModal>
  );
};

export default BudgetBoundaryModal;
