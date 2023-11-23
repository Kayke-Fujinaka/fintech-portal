/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TransactionModal from '../../../components/TransactionModal';

const Dashboard = () => {
  const [isTransactionModalOpen, setTransactionModalOpen] =
    useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('@token');
    navigate('/login');
  };

  const handleTransactionConfirm = (transactionData: any) => {
    console.log(transactionData);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Sair</button>

      <br />
      <br />
      <br />

      <button onClick={() => setTransactionModalOpen(true)}>
        Realizar Transação
      </button>

      <TransactionModal
        isOpen={isTransactionModalOpen}
        onRequestClose={() => setTransactionModalOpen(false)}
        onConfirm={handleTransactionConfirm}
      />
    </div>
  );
};

export default Dashboard;
