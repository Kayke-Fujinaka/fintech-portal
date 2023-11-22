import { theme } from '../../styles/theme';
import { ITransactionTypeData } from './@types';

export const transactionTypes: ITransactionTypeData[] = [
  { type: 'income', label: 'Receita', backgroundColor: theme.colors.income },
  {
    type: 'investment',
    label: 'Investimento',
    backgroundColor: theme.colors.investment,
  },
  { type: 'expense', label: 'Despesa', backgroundColor: theme.colors.danger },
];
