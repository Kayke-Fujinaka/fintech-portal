import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
  isLoading?: boolean;
  children: ReactNode;
}

export const Button = ({
  isSubmitting,
  isLoading = false,
  children,
  ...rest
}: IButtonProps) => {
  return (
    <S.StyledButton
      type="submit"
      disabled={isSubmitting || isLoading}
      {...rest}
    >
      {isLoading ? 'Carregando...' : children}
    </S.StyledButton>
  );
};
