import { useNavigate } from 'react-router-dom';

import * as S from './styles';

const NotFound = () => {
  const navigate = useNavigate();

  const isAuthenticated = sessionStorage.getItem('@token');

  const handleBack = (): void => {
    navigate(isAuthenticated ? '/' : '/login');
  };

  return (
    <S.Container>
      <div>
        <S.Heading>Página Não Encontrada</S.Heading>
        <S.Text>
          Desculpe, a página que você está procurando não existe ou foi
          removida.
        </S.Text>
        <S.StyledButton onClick={handleBack}>Voltar</S.StyledButton>
      </div>
    </S.Container>
  );
};

export default NotFound;
