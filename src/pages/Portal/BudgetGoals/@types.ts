export interface Category {
  name: string;
  spent: number;
}

export interface MonthlyLimit {
  [key: string]: {
    limit: number | null;
    categories: Category[];
  };
}
