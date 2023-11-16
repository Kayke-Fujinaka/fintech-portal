import { useNavigate } from 'react-router-dom';

import * as S from './styles';

const GenericError = () => {
  const navigate = useNavigate();

  const isAuthenticated = sessionStorage.getItem('@token');

  const handleBack = () => {
    navigate(isAuthenticated ? '/' : '/login');
  };

  return (
    <S.Container>
      <div>
        <S.Heading>Erro Inesperado</S.Heading>
        <S.Text>
          Ocorreu um erro inesperado. Por favor, tente novamente ou entre em
          contato com o suporte.
        </S.Text>
        <S.StyledButton onClick={handleBack}>Voltar</S.StyledButton>
      </div>
    </S.Container>
  );
};

export default GenericError;
