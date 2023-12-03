import { ITransaction, TransactionType } from "../interfaces/transaction";

export const isTransactionType = (type: string): type is TransactionType => {
  return ['income', 'expense', 'investment'].includes(type);
};

export const calculateCategoryAmount = (type: TransactionType, transactions: ITransaction[]): number => {
  return transactions
    .filter(transaction => transaction.type === type)
    .reduce((sum, transaction) => sum + transaction.amount, 0);
};

export const calculateBalance = (transactions: ITransaction[]): number => {
  const balanceActions = {
    income: (amount: number) => amount,
    expense: (amount: number) => -amount,
    investment: (amount: number) => amount,
  };

  return transactions.reduce((balance, transaction) => {
    const action = balanceActions[transaction.type];
    return action ? balance + action(transaction.amount) : balance;
  }, 0);
};