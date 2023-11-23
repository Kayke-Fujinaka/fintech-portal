import { ChangeEvent, useState } from 'react';

import { theme } from '../../styles/theme';
import BaseModal from '../BaseModal';
import {
  ITransactionData,
  ITransactionModalProps,
  ITransactionTypeData,
  TransactionType,
} from './@types';
import TransactionFields from './TransactionFields';
import { transactionTypes } from './constants';
import * as S from './styles';

const TransactionModal = ({
  isOpen,
  onRequestClose,
  onConfirm,
}: ITransactionModalProps) => {
  const [transactionType, setTransactionType] =
    useState<TransactionType>('income');
  const [transactionData, setTransactionData] = useState<ITransactionData>({
    description: '',
    date: '',
    amount: '',
    category: '',
    type: '',
    bank: '',
    maturity: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    console.log(name, value);
    setTransactionData(prevData => ({ ...prevData, [name]: value }));
  };

  const isFormValid = (): boolean => {
    const commonFieldsFilled =
      transactionData.amount.trim() !== '' &&
      transactionData.date.trim() !== '';

    switch (transactionType) {
      case 'income':
        return commonFieldsFilled && transactionData.description.trim() !== '';
      case 'investment':
        return (
          commonFieldsFilled &&
          transactionData.bank?.trim() !== '' &&
          transactionData.type?.trim() !== '' &&
          transactionData.maturity?.trim() !== ''
        );
      case 'expense':
        return (
          commonFieldsFilled &&
          transactionData.description.trim() !== '' &&
          transactionData.category?.trim() !== ''
        );
      default:
        return false;
    }
  };

  const handleSubmit = (): void => {
    onConfirm(transactionData);
    onRequestClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title="Nova Transação"
      footerContent={
        <S.Button
          onClick={handleSubmit}
          backgroundColor={theme.colors.income}
          isActive={true}
          disabled={!isFormValid()}
        >
          Confirmar
        </S.Button>
      }
      isFooterCentered={true}
    >
      <S.ModalBody>
        <TransactionFields
          transactionType={transactionType}
          transactionData={transactionData}
          handleChange={handleChange}
        />

        {transactionTypes.map(
          ({ type, label, backgroundColor }: ITransactionTypeData) => (
            <S.Button
              key={type}
              onClick={() => setTransactionType(type)}
              backgroundColor={backgroundColor}
              isActive={transactionType === type}
            >
              {label}
            </S.Button>
          ),
        )}
      </S.ModalBody>
    </BaseModal>
  );
};

export default TransactionModal;
