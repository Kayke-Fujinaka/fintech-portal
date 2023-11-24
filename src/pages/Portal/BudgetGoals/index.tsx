import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import BudgetBoundaryModal from '../../../components/BudgetBoundaryModal';
import { getCurrentDateInfo } from '../../../utils/date';
import { capitalizeFirstLetter } from '../../../utils/string';
import * as S from './styles';

const BudgetGoals = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const changeMonth = (monthDelta: number): void => {
    setCurrentDate(prevDate => {
      const newDate = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() + monthDelta,
        1,
      );
      return newDate;
    });
  };

  const handlePrevMonth = () => changeMonth(-1);
  const handleNextMonth = () => changeMonth(1);

  const handleLimitSubmit = (): void => {
    setIsModalOpen(false);
  };

  const { month, year } = getCurrentDateInfo({
    date: currentDate,
    locale: 'pt-BR',
  });

  return (
    <S.Container>
      <S.Header>Limite de Gastos</S.Header>
      <S.BudgetHeader>
        <button onClick={handlePrevMonth}>
          <FiChevronLeft size={20} />
        </button>
        <span>{`${capitalizeFirstLetter(month)} ${year}`}</span>
        <button onClick={handleNextMonth}>
          <FiChevronRight size={20} />
        </button>{' '}
      </S.BudgetHeader>
      <S.BudgetContainer>
        <S.BudgetMessage>Nenhum limite de gasto definido.</S.BudgetMessage>
        <S.Button onClick={() => setIsModalOpen(true)}>
          Definir limite de gastos
        </S.Button>
      </S.BudgetContainer>

      <BudgetBoundaryModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onLimitSubmit={handleLimitSubmit}
      />
    </S.Container>
  );
};

export default BudgetGoals;
