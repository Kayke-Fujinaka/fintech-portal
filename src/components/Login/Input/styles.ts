import styled, { css } from 'styled-components';

export const InputGroup = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    margin-bottom: 20px;

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
      position: absolute;
      bottom: -20px; // Posicionar abaixo do input
      left: 0;
      width: 100%;
      text-align: left;
      color: ${theme.colors.danger};
    }
  `}
`;

export const PasswordToggle = styled.span`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  svg {
    height: 1em;
    width: 1em;
  }
`;
