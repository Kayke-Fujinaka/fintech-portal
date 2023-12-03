import { IDate, IDateInfoRequest, IDateInfoResponse } from '../interfaces/date';

export function getCurrentDateInfo({
  date,
  locale = 'default',
}: IDateInfoRequest): IDateInfoResponse {
  const day = date.getDate();
  const month = date.toLocaleString(locale, { month: 'long' });
  const year = date.getFullYear();

  return { day, month, year };
}

export const isPastMonth = ({ date }: IDate): boolean => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  return (
    date.getFullYear() < currentYear ||
    (date.getFullYear() === currentYear && date.getMonth() < currentMonth)
  );
};

export function isSameMonth(dateStr: string, month: string): boolean {
  const transactionDate = new Date(dateStr);
  const transactionMonth = transactionDate.toLocaleDateString('pt-BR', { month: 'long' });
  return transactionMonth === month;
}

export function getFormattedDate(dateInput: string): string {
  const date = new Date(dateInput);
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return month + '/' + day + '/' + year;
}

export const getMonthsList = (locale = 'pt-BR'): string[] => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 12 }, (_, i) =>
    new Date(currentYear, i).toLocaleDateString(locale, { month: 'long' })
  );
};

