export interface IDateInfoRequest {
  date: Date,
  locale?: string
}

export interface IDateInfoResponse {
  day: number;
  month: string;
  year: number;
}