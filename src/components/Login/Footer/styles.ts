import styled, { css } from 'styled-components';

export const Footer = styled.div`
  ${({ theme }) => css`
    margin-bottom: 2rem;

    p {
      font-size: 1rem;
      color: ${theme.colors.secondary};
      font-weight: 500;

      a {
        text-decoration: none;
        color: ${theme.colors.primary};
        font-weight: 700;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `}
`;
