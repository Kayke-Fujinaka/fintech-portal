export interface IDate {
  date: Date;
}

export interface IDateInfoRequest extends IDate {
  locale?: string;
}

export interface IDateInfoResponse {
  day: number;
  month: string;
  year: number;
}
