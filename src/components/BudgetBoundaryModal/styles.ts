import styled, { css } from 'styled-components';

import { IButtonProps } from './@types';

export const ModalBody = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 0.75rem;

    input {
      height: 50px;
      padding-inline: 1rem;
      font-size: ${theme.fontSizes['md']};
      font-weight: ${theme.fontWeights.medium};
      border-radius: 0.5rem;
      border: 1px solid ${theme.colors.alpha[300]};
    }
  `}
`;

export const Button = styled.button<IButtonProps>`
  ${({ theme, backgroundColor, color }) => css`
    padding: 0.5rem 1rem;
    border-radius: 3px;
    border: 1px solid ${backgroundColor || theme.colors.alpha[300]};
    background-color: ${backgroundColor || theme.colors.white};
    color: ${color || theme.colors.secondary};
    font-size: ${theme.fontSizes['md']};
    font-weight: ${theme.fontWeights.medium};
    cursor: pointer;

    &:hover {
      filter: brightness(0.975);
    }
  `}
`;
