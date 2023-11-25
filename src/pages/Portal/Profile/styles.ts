import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 83px);
  margin-inline: auto;
  padding: 1.25rem;

  @media (min-width: 768px) {
    height: calc(100vh - 83px);
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ImagePlaceholder = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 150px;
    margin-bottom: 1rem;
    background: ${theme.colors.alpha[300]};
    border-radius: 50%;
  `}
`;

export const EditPictureText = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: ${theme.colors.secondary};
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-right: 0.5rem;
    }
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

export const InputGroup = styled.div`
  ${({ theme }) => css`
    margin-bottom: 1rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid ${theme.colors.alpha[300]};
      border-radius: 4px;
    }
  `}
`;

export const ChangePasswordLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    text-align: left;
    margin-bottom: 1rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    margin-top: 2.5rem;
    padding: 1rem;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `}
`;
