import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting: boolean;
  isLoading: boolean;
  text: string;
}

export const Button = ({
  isSubmitting,
  isLoading,
  text,
  ...rest
}: IButtonProps) => {
  return (
    <S.StyledButton
      type="submit"
      disabled={isSubmitting || isLoading}
      {...rest}
    >
      {isLoading ? 'Carregando...' : text}
    </S.StyledButton>
  );
};
