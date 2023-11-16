import { ErrorMessage, Field } from 'formik';
import { InputHTMLAttributes, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

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
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <S.InputGroup>
      <Field
        name={name}
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        {...rest}
      />
      {type === 'password' && (
        <S.PasswordToggle onClick={toggleShowPassword}>
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </S.PasswordToggle>
      )}
      <ErrorMessage name={name} className="error-message" component="div" />
    </S.InputGroup>
  );
};
