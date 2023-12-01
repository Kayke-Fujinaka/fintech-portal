import styled, { css } from 'styled-components';

interface TransactionAmount {
  isExpense: boolean;
}

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: calc(100vh - 5.5rem);
    background-color: ${theme.colors.white};
    overflow: hidden;
  `}
`;

export const MonthSelector = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    margin-top: 2.5rem;
    padding: 0.5rem 1rem;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.alpha[300]};
    border-radius: 1.25rem;
    cursor: pointer;

    select {
      font-size: ${theme.fontSizes.md};
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }
  `}
`;

export const BalanceContainer = styled.div`
  position: relative;
  text-align: center;
  margin: 1rem 1rem 0 1rem;

  @media (min-width: 768px) {
    margin: 1.25rem;
  }
`;

export const BalanceHeader = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.alpha[500]};
  `}
`;

export const BalanceAmount = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes['2xl']};
    font-weight: ${theme.fontWeights.bold};
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: ${theme.fontSizes['4xl']};
    }
  `}
`;

export const BalanceAmountHidden = styled(BalanceAmount)`
  ${({ theme }) => css`
    color: ${theme.colors.alpha[400]};
  `}
`;

export const VisibilityToggle = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    cursor: pointer;

    svg {
      font-size: ${theme.fontSizes['md']};
    }

    @media (min-width: 768px) {
      svg {
        font-size: ${theme.fontSizes['xl']};
      }
    }
  `}
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CategoryCard = styled.div`
  ${({ theme, color }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 2.25rem;
    background-color: ${color || theme.colors.primary};
    border-radius: 0.5rem;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.sm};
    box-shadow: 0 2px 4px ${theme.colors.alpha[300]};

    h3 {
      margin-bottom: 0.5rem;
    }

    p {
      font-size: ${theme.fontSizes.md};
      font-weight: ${theme.fontWeights.bold};
    }

    &:nth-child(3) {
      @media (max-width: 767px) {
        grid-column: span 2;
      }
    }

    @media (min-width: 768px) {
      padding: 1rem;
      font-size: ${theme.fontSizes.md};

      p {
        font-size: ${theme.fontSizes.xl};
      }
    }
  `}
`;

export const AddTransactionButton = styled.button`
  ${({ theme }) => css`
    width: 245.38px;
    padding: 0.75rem;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.bold};
    margin: 1rem 0;

    &:hover {
      filter: brightness(1.1);
    }

    @media (min-width: 768px) {
      width: 444.56px;
      font-size: ${theme.fontSizes.md};
    }

    @media (min-width: 1100px) {
      width: 474.27px;
    }
  `}
`;

export const TransactionListContainer = styled.div`
  margin: 1rem 0;
  max-height: 300px;
  width: 245.38px;

  @media (min-width: 768px) {
    width: 444.56px;
  }

  @media (min-width: 1100px) {
    width: 474.27px;
  }
`;

export const TransactionHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: ${theme.fontSizes.sm};

    @media (min-width: 768px) {
      font-size: ${theme.fontSizes.md};
    }
  `}
`;

export const ViewAllButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.alpha[100]};
    padding: 0.25rem;
    font-size: ${theme.fontSizes.sm};

    &:hover {
      filter: brightness(0.95);
    }

    &:active {
      filter: brightness(0.9);
    }

    @media (min-width: 768px) {
      font-size: ${theme.fontSizes.md};
    }
  `}
`;

export const TransactionList = styled.ul`
  max-height: 300px;
  overflow-y: auto;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const TransactionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

export const TransactionDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span:first-child {
      font-weight: ${theme.fontWeights.semibold};
      color: ${theme.colors.alpha[500]};
    }

    span:last-child {
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.alpha[500]};
    }

    @media (min-width: 768px) {
      span {
        font-size: ${theme.fontSizes.md};
      }
    }
  `}
`;

export const TransactionsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const TransactionAmount = styled.div<TransactionAmount>`
  ${({ theme, isExpense }) => css`
    font-weight: ${theme.fontWeights.bold};
    color: ${isExpense ? theme.colors.danger : theme.colors.income};
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 0.25rem;

    @media (min-width: 768px) {
      font-size: ${theme.fontSizes.md};
    }
  `}
`;

export const TransactionDate = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.alpha[500]};
  `}
`;

export const TransactionActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActionButton = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    cursor: pointer;

    &:first-child {
      margin-bottom: 0.25rem;
    }

    svg {
      font-size: ${theme.fontSizes.md};
      color: ${theme.colors.alpha[500]};
    }
  `}
`;
