import { ErrorMessage, Field } from 'formik';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { IInputProps } from './@types';
import * as S from './styles';

export const Input = ({
  name,
  type = 'text',
  placeholder,
  ...rest
}: IInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = (): void => setShowPassword(!showPassword);

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
