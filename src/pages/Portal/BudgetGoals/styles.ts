import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 5.5rem);
    background-color: ${theme.colors.white};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 2.5rem;
    font-size: ${theme.fontSizes['2xl']};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.secondary};
  `}
`;

export const BudgetHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    font-size: ${theme.fontSizes['md']};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.alpha[500]};
    cursor: pointer;

    span {
      min-width: 150px;
      display: inline-block;
      text-align: center;
      transition: min-width 0.3s ease;
    }

    button {
      background-color: transparent;
    }
  `}
`;

export const BudgetContainer = styled.div`
  padding: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BudgetMessage = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.fontSizes['md']};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.alpha[500]};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 75%;
    padding: 1rem;
    margin-top: 1rem;
    border: none;
    border-radius: 4px;
    font-size: ${theme.fontSizes['md']};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.white};
    background-color: ${theme.colors.income};
    cursor: pointer;

    &:hover {
      filter: brightness(1.05);
    }

    &:active {
      filter: brightness(0.95);
    }
  `}
`;
