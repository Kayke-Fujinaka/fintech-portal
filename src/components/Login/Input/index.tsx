import { ErrorMessage, Field } from 'formik';

import { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  placeholder: string;
}

export const Input = ({
  name,
  type = 'text',
  placeholder,
  ...rest
}: IInputProps) => {
  return (
    <S.InputGroup>
      <Field name={name} type={type} placeholder={placeholder} {...rest} />
      <ErrorMessage name={name} className="error-message" component="div" />
    </S.InputGroup>
  );
};
