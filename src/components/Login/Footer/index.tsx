import * as S from './styles';

interface IFooterProps {
  text: string;
  redirectPath: string;
  actionText: string;
}

export const Footer = ({ text, redirectPath, actionText }: IFooterProps) => {
  return (
    <S.Footer>
      <p>
        {text} <a href={redirectPath}>{actionText}</a>
      </p>
    </S.Footer>
  );
};
