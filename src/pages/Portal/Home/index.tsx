import { ChangeEvent, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import TransactionModal from '../../../components/TransactionModal';
import { theme } from '../../../styles/theme';
import { isPastMonth } from '../../../utils/date';
import { capitalizeFirstLetter } from '../../../utils/string';
import * as S from './styles';

const getRandomDate = () => {
  const today = new Date();
  const daysAgo = Math.floor(Math.random() * 30);
  const randomDate = new Date(today.setDate(today.getDate() - daysAgo));
  return randomDate.toLocaleDateString('pt-BR');
};

interface Transaction {
  id: number;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: string;
  description: string;
}

const getRandomTransaction = (id: number): Transaction => {
  const types: Transaction['type'][] = ['income', 'expense'];
  const categories = ['Alimentação', 'Transporte', 'Lazer', 'Saúde', 'Salário'];
  const descriptions = [
    'Jantar com amigos',
    'Passagem de ônibus',
    'Cinema',
    'Consulta médica',
    'Pagamento mensal',
  ];

  return {
    id,
    type: types[Math.floor(Math.random() * types.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    amount: parseFloat((Math.random() * 1000).toFixed(2)),
    date: getRandomDate(),
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
  };
};

const Home = () => {
  const [isTransactionModalOpen, setIsTransactionModalOpen] =
    useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [balance] = useState<number>(3500);

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  const months = Array.from({ length: currentMonth + 1 }, (_, i) =>
    new Date(currentYear, i).toLocaleDateString('pt-BR', { month: 'long' }),
  );

  const [selectedMonth, setSelectedMonth] = useState(months[currentMonth]);

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedMonth(e.target.value);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleConfirmTransaction = () => {
    setIsTransactionModalOpen(false);
  };

  const transactions: Transaction[] = Array.from({ length: 20 }, (_, i) =>
    getRandomTransaction(i + 1),
  );

  return (
    <S.Container>
      <S.MonthSelector>
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          disabled={isPastMonth({ date: now })}
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {capitalizeFirstLetter(month)}
            </option>
          ))}
        </select>
      </S.MonthSelector>

      <S.BalanceContainer>
        <S.BalanceHeader>Saldo geral</S.BalanceHeader>
        {isVisible ? (
          <S.BalanceAmount>
            R$ {balance.toLocaleString('pt-BR')}
          </S.BalanceAmount>
        ) : (
          <S.BalanceAmountHidden>R$ *******</S.BalanceAmountHidden>
        )}
        <S.VisibilityToggle onClick={toggleVisibility}>
          {isVisible ? <FiEyeOff /> : <FiEye />}
        </S.VisibilityToggle>
      </S.BalanceContainer>

      <S.CategoryContainer>
        <S.CategoryCard color={theme.colors.income}>
          <h3>Receita</h3>
          <p>R$ 5000</p>
        </S.CategoryCard>
        <S.CategoryCard color={theme.colors.danger}>
          <h3>Despesas</h3>
          <p>R$ 1200</p>
        </S.CategoryCard>
        <S.CategoryCard color={theme.colors.investment}>
          <h3>Investimentos</h3>
          <p>R$ 300</p>
        </S.CategoryCard>
      </S.CategoryContainer>

      <S.AddTransactionButton onClick={() => setIsTransactionModalOpen(true)}>
        Adicionar Transação
      </S.AddTransactionButton>

      <S.TransactionListContainer>
        <div>
          <S.TransactionHeader>
            <h3>Transações recentes</h3>
            <S.ViewAllButton>Ver todos</S.ViewAllButton>
          </S.TransactionHeader>
          <S.TransactionList>
            {transactions.map(transaction => (
              <S.TransactionItem key={transaction.id}>
                <S.TransactionDetails>
                  <span>{transaction.category}</span>
                  <span>{transaction.amount}</span>
                </S.TransactionDetails>
                <S.TransactionActions>
                  <S.EditButton>✏️</S.EditButton>
                  <S.DeleteButton>🗑️</S.DeleteButton>
                </S.TransactionActions>
              </S.TransactionItem>
            ))}
          </S.TransactionList>
        </div>
      </S.TransactionListContainer>

      <TransactionModal
        isOpen={isTransactionModalOpen}
        onRequestClose={() => setIsTransactionModalOpen(false)}
        onConfirm={handleConfirmTransaction}
      />
    </S.Container>
  );
};

export default Home;
