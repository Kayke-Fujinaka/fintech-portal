import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import BudgetBoundaryModal from '../../../components/BudgetBoundaryModal';
import { getCurrentDateInfo, isPastMonth } from '../../../utils/date';
import { capitalizeFirstLetter } from '../../../utils/string';
import { Category, MonthlyLimit } from './@types';
import * as S from './styles';

const BudgetGoals = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [monthlyLimits, setMonthlyLimits] = useState<MonthlyLimit>({});
  const [categories] = useState<Category[]>([
    { name: 'Alimentação', spent: 0.0 },
    { name: 'Transporte', spent: 0.0 },
    { name: 'Casa', spent: 0.0 },
    { name: 'Cuidados pessoais', spent: 0.0 },
    { name: 'Educação', spent: 0.0 },
    { name: 'Pets', spent: 0.0 },
    { name: 'Roupas', spent: 0.0 },
    { name: 'Viagem', spent: 0.0 },
    { name: 'Mercado', spent: 0.0 },
  ]);

  const { month, year } = getCurrentDateInfo({
    date: currentDate,
    locale: 'pt-BR',
  });

  function changeMonth(monthDelta: number) {
    setCurrentDate(
      prevDate =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() + monthDelta, 1),
    );
  }

  const handlePrevMonth = (): void => changeMonth(-1);
  const handleNextMonth = (): void => changeMonth(1);

  const currentKey = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }`;

  function handleLimitSubmit(newLimit: number): void {
    setMonthlyLimits(prev => ({
      ...prev,
      [currentKey]: { ...prev[currentKey], limit: newLimit },
    }));
    setIsModalOpen(false);
  }

  const totalSpent =
    monthlyLimits[currentKey]?.categories?.reduce(
      (acc, category) => acc + category.spent,
      0,
    ) || 0;

  const limit = monthlyLimits[currentKey]?.limit || null;

  const spentPercentage = limit ? (totalSpent / limit) * 100 : 0;

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
        </button>
      </S.BudgetHeader>

      {limit !== null ? (
        <S.SpentedLimitContainer>
          <S.ExpensesTitle>Despesas</S.ExpensesTitle>
          <S.BudgetInfo>
            R$ {totalSpent.toFixed(2)} de R$ {limit.toFixed(2)}
          </S.BudgetInfo>
          <S.ProgressBarContainer>
            <S.ProgressBar width={spentPercentage} />
          </S.ProgressBarContainer>
          <div>
            {categories.map((category, index) => (
              <S.CategoryItem key={index}>
                {category.name} - R$ {category.spent.toFixed(2)}
              </S.CategoryItem>
            ))}
          </div>
        </S.SpentedLimitContainer>
      ) : (
        <S.BudgetContainer>
          <S.BudgetMessage>Nenhum limite de gasto definido.</S.BudgetMessage>
          <S.Button
            onClick={() => setIsModalOpen(true)}
            disabled={isPastMonth({ date: currentDate })}
          >
            Definir limite de gastos
          </S.Button>
        </S.BudgetContainer>
      )}

      <BudgetBoundaryModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onLimitSubmit={handleLimitSubmit}
      />
    </S.Container>
  );
};

export default BudgetGoals;
