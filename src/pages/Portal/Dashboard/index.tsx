/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BudgetBoundaryModal from '../../../components/BudgetBoundaryModal';

const Dashboard = () => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('@token');
    navigate('/login');
  };

  const handleLimitSubmit = (newLimit: any) => {
    console.log(newLimit);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Sair</button>

      <br />
      <br />
      <br />

      <button onClick={() => setDeleteModalOpen(true)}>
        Adicionar meta orçamental
      </button>

      <BudgetBoundaryModal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setDeleteModalOpen(false)}
        onLimitSubmit={handleLimitSubmit}
      />
    </div>
  );
};

export default Dashboard;
