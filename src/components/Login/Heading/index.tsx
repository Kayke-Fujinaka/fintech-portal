import { IHeadingProps } from './@types';
import * as S from './styles';

export const Heading = ({ firstParagraph, secondParagraph }: IHeadingProps) => {
  return (
    <S.Heading>
      {firstParagraph} <br /> {secondParagraph}
    </S.Heading>
  );
};
