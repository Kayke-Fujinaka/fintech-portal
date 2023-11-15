import * as S from './styles';

interface IHeadingProps {
  firstParagraph: string;
  secondParagraph: string;
}

export const Heading = ({ firstParagraph, secondParagraph }: IHeadingProps) => {
  return (
    <S.Heading>
      {firstParagraph} <br /> {secondParagraph}
    </S.Heading>
  );
};
