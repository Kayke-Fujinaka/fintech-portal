import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  placeholder: string;
}
