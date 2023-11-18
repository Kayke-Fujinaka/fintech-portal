import styled, { css } from 'styled-components';

import { IButtonProps } from './@types';

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
