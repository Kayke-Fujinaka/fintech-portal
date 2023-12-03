/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from 'react';
import { FiEdit2, FiEye, FiEyeOff, FiTrash2 } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';

import DeleteTransactionModal from '../../../components/DeleteTransactionModal';
import TransactionModal from '../../../components/TransactionModal';
import { ITransaction, TransactionType } from '../../../interfaces/transaction';
import { theme } from '../../../styles/theme';
import { getFormattedDate, getMonthsList, isPastMonth, isSameMonth } from '../../../utils/date';
import { capitalizeFirstLetter } from '../../../utils/string';
import { getThemeColor } from '../../../utils/theme';
import { calculateBalance, calculateCategoryAmount } from '../../../utils/transaction';
import { categories } from './constants';
import * as S from './styles';

const Home = () => {
  const currentMonthFormatted = new Date().toLocaleDateString('pt-BR', { month: 'long' });
  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonthFormatted);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState<boolean>(false);
  const [isDeleteTransactionModalOpen, setIsDeleteTransactionModalOpen] = useState<boolean>(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    setBalance(calculateBalance(transactions))
  }, [transactions]);

  const months = getMonthsList()

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedMonth(e.target.value);
  };

  const toggleVisibility = (): void => setIsVisible(!isVisible);

  const handleConfirmTransaction = (newTransactionData: any): void => {
    addNewTransaction({
      ...newTransactionData,
      type: newTransactionData.type || 'investment',
    });
    setIsTransactionModalOpen(false);
  };

  function formatTransaction(transaction: any): ITransaction {
    return {
      ...transaction,
      id: uuidv4(),
      amount: parseFloat(transaction.amount),
    };
  }

  const addNewTransaction = (newTransaction: any): void => {
    setTransactions([...transactions, formatTransaction(newTransaction)]);
  };

  const handleDeleteClick = (id: number): void => {
    setSelectedTransactionId(id);
    setIsDeleteTransactionModalOpen(true);
  };

  const handleDeleteTransaction = (id: number): void => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    setIsDeleteTransactionModalOpen(false);
  };

  const filteredTransactions = transactions.filter(transaction =>
    isSameMonth(transaction.date, selectedMonth)
  );

  const calculateCategoryTotal = (type: TransactionType): number => {
    return calculateCategoryAmount(type, transactions);
  };

  return (
    <S.Container>
      <S.MonthSelector>
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          disabled={isPastMonth({ date: new Date() })}
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
        {categories.map(category => {
          const categoryTotal = calculateCategoryTotal(category.type as TransactionType);

          return (
            <S.CategoryCard key={category.type} color={getThemeColor(category.color as keyof typeof theme.colors)}>
              <h3>{category.label}</h3>
              <p>R$ {categoryTotal.toLocaleString('pt-BR')}</p>
            </S.CategoryCard>
          );
        })}
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
            {filteredTransactions.map(transaction => (
              <S.TransactionItem key={transaction.id}>
                <S.TransactionDetails>
                  <span>
                    {transaction.type === 'expense'
                      ? 'Despesa'
                      : transaction.type === 'income'
                        ? 'Receita'
                        : 'Investimento'}
                  </span>
                  <span>{transaction.description}</span>
                </S.TransactionDetails>

                <S.TransactionsDiv>
                  <S.TransactionDetails>
                    <S.TransactionAmount
                      isExpense={transaction.type === 'expense'}
                    >
                      {transaction.amount.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </S.TransactionAmount>
                    <S.TransactionDate>
                      {getFormattedDate(transaction.date)}
                    </S.TransactionDate>
                  </S.TransactionDetails>
                  <S.TransactionActions>
                    <S.ActionButton>
                      <FiEdit2 />
                    </S.ActionButton>
                    <S.ActionButton
                      onClick={() => handleDeleteClick(transaction.id)}
                    >
                      <FiTrash2 />
                    </S.ActionButton>
                  </S.TransactionActions>
                </S.TransactionsDiv>
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

      <DeleteTransactionModal
        isOpen={isDeleteTransactionModalOpen}
        onRequestClose={() => setIsDeleteTransactionModalOpen(false)}
        onDelete={() => {
          if (selectedTransactionId != null) {
            handleDeleteTransaction(selectedTransactionId);
          }
        }}
      />
    </S.Container>
  );
};

export default Home;
