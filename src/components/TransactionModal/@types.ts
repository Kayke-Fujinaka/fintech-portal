/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITransactionData {
  description: string;
  date: string;
  amount: string;
  category?: string;
  type?: string;
  bank?: string;
  maturity?: string;
}

export interface ITransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: (data: any) => void;
}

export interface IButtonProps {
  backgroundColor?: string;
  isActive?: boolean;
}

export type TransactionType = 'income' | 'investment' | 'expense';

export interface ITransactionTypeData {
  type: TransactionType;
  label: string;
  backgroundColor: string;
}
