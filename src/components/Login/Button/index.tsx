import { IButtonProps } from './@types';
import * as S from './styles';

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
