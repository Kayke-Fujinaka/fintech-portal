import styled, { css } from 'styled-components';

import { Button } from '../../../components/Login/Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 1.25rem;
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.colors.secondary};
    margin-bottom: 1rem;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: 1.25rem;
    color: ${theme.colors.secondary};
    margin-bottom: 1rem;
  `}
`;

export const StyledButton = styled(Button)`
  width: 100%;
  max-width: 300px;
`;
