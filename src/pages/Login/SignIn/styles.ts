import { Form } from 'formik';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-y: auto;

  @media (orientation: landscape) {
    gap: 1rem;
    padding: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  padding-inline: 32px;
`;

export const StyledForm = styled(Form)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    a {
      text-align: right;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      color: ${theme.colors.alpha[500]};
      transition:
        color 0.3s ease-in-out,
        text-decoration-color 0.3s ease-in-out;

      &:hover {
        text-decoration: underline;
        color: ${theme.colors.primary};
      }
    }
  `}
`;
