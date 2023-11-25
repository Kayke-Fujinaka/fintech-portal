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
