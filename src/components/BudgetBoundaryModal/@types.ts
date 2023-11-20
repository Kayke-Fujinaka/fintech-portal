export interface IDeleteTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onDelete: () => void;
}

export interface IButtonProps {
  backgroundColor?: string;
  color?: string;
}
