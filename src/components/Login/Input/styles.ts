import styled, { css } from 'styled-components';

export const InputGroup = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;

    input {
      height: 56px;
      width: 100%;
      padding-inline: 15px;
      border: 1px solid ${theme.colors.alpha[300]};
      border-radius: 8px;
      background: ${theme.colors.alpha[50]};
      font-size: 1rem;
      font-weight: 500;
      color: ${theme.colors.grey[450]};
    }

    .error-message {
      color: ${theme.colors.danger};
    }
  `}
`;
