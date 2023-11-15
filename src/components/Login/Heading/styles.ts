import styled, { css } from 'styled-components';

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.colors.secondary};
    margin-bottom: 3rem;
    width: 100%;
    text-align: left;
  `}
`;
