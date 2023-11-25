import { IDateInfoRequest, IDateInfoResponse } from '../interfaces/date';

export function getCurrentDateInfo({
  date,
  locale = 'default',
}: IDateInfoRequest): IDateInfoResponse {
  const day = date.getDate();
  const month = date.toLocaleString(locale, { month: 'long' });
  const year = date.getFullYear();

  return { day, month, year };
}
