import { ITransactionData, TransactionType } from '../@types';

export interface ITransactionFieldsProps {
  transactionType: TransactionType;
  transactionData: ITransactionData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
