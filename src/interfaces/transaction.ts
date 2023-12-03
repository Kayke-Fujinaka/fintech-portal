export enum TransactionType {
  Income = 'income',
  Expense = 'expense',
  Investment = 'investment',
}

export interface ITransaction {
  id: number;
  type: TransactionType;
  category: string;
  amount: number;
  date: string;
  description: string;
}