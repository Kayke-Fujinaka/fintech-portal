import styled, { css } from 'styled-components';

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
  margin: 1.25rem;
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
    font-size: ${theme.fontSizes['4xl']};
    font-weight: ${theme.fontWeights.bold};
    margin-bottom: 1rem;
  `}
`;

export const BalanceAmountHidden = styled(BalanceAmount)`
  ${({ theme }) => css`
    color: ${theme.colors.alpha[400]};
  `}
`;

export const VisibilityToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1.25rem;
  }
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
    padding: 1rem;
    background-color: ${color || theme.colors.primary};
    border-radius: 0.5rem;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.md};
    box-shadow: 0 2px 4px ${theme.colors.alpha[300]};

    h3 {
      margin-bottom: 0.5rem;
    }

    p {
      font-size: ${theme.fontSizes.xl};
      font-weight: ${theme.fontWeights.bold};
    }

    &:nth-child(3) {
      @media (max-width: 767px) {
        grid-column: span 2;
      }
    }
  `}
`;

export const AddTransactionButton = styled.button`
  ${({ theme }) => css`
    width: 209.13px;
    padding: 1rem;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.bold};
    margin: 1rem 0;

    &:hover {
      filter: brightness(1.1);
    }

    @media (min-width: 768px) {
      width: 444.56px;
    }

    @media (min-width: 1100px) {
      width: 474.27px;
    }
  `}
`;

export const TransactionListContainer = styled.div`
  margin: 1rem 0;
  padding: 0 1rem;
  max-height: 300px;
  width: 209.13px;

  @media (min-width: 768px) {
    width: 444.56px;
  }

  @media (min-width: 1100px) {
    width: 474.27px;
  }
`;

export const TransactionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ViewAllButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.alpha[100]};
    padding: 0.25rem;

    &:hover {
      filter: brightness(0.95);
    }

    &:active {
      filter: brightness(0.9);
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
`;

export const TransactionDetails = styled.div``;

export const TransactionActions = styled.div``;

export const EditButton = styled.button``;

export const DeleteButton = styled.button``;
