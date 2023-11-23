import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('@token');
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Dashboard;
