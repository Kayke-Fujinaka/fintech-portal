import { ReactNode } from 'react';

export interface IBaseModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  children: ReactNode;
  footerContent?: ReactNode;
  isFooterCentered?: boolean;
}
