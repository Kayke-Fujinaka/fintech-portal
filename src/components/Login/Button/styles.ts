import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  ${({ theme }) => css`
    height: 56px;
    margin-top: 2.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${theme.colors.white};
    border: none;
    border-radius: 8px;
    background: ${theme.colors.secondary};
    transition:
      background-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;
    cursor: pointer;

    &:hover {
      filter: brightness(1.15);
    }

    &:disabled {
      cursor: not-allowed;
    }
  `}
`;
