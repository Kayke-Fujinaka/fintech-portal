import ReactModal from 'react-modal';
import styled, { css } from 'styled-components';

interface ModalFooterProps {
  isCentered?: boolean;
}

export const StyledModal = styled(ReactModal)`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -50%);
    background: ${theme.colors.white};
    overflow: auto;
    border-radius: 4px;
    outline: none;
    padding: 1.25rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    width: 80%;
    max-width: 500px;
  `}
`;

export const ModalHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    h2 {
      font-size: ${theme.fontSizes['2xl']};
      font-weight: ${theme.fontWeights.semibold};
      color: ${theme.colors.secondary};
    }
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: ${theme.fontSizes['2xl']};
  `}
`;

export const ModalBody = styled.div`
  text-align: center;
  padding: 1rem 1.25rem;
`;

export const ModalFooter = styled.div<ModalFooterProps>`
  ${({ isCentered }) => css`
    display: flex;
    justify-content: ${isCentered ? 'center' : 'space-between'};
    align-items: center;
    margin-top: 1rem;
    padding: 1rem 1.25rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  `}
`;
