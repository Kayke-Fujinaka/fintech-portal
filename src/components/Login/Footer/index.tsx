import { IFooterProps } from './@types';
import * as S from './styles';

export const Footer = ({ text, redirectPath, actionText }: IFooterProps) => {
  return (
    <S.Footer>
      <p>
        {text} <a href={redirectPath}>{actionText}</a>
      </p>
    </S.Footer>
  );
};
