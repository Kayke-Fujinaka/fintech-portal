import { useState } from 'react';
import { FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogout = (): void => {
    sessionStorage.removeItem('@token');
    navigate('/login');
  };

  const toggleMenu = (): void => setIsOpen(!isOpen);

  return (
    <S.HeaderContainer isOpen={isOpen}>
      <S.Logo>
        <h1>Fintech</h1>
      </S.Logo>

      <FiMenu className="menu" size={24} onClick={toggleMenu} />
      <FiX className="close" size={24} onClick={toggleMenu} />

      <S.Nav isOpen={isOpen}>
        <S.NavList>
          <S.NavItem>
            <S.NavLink href="/">Início</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="/meu-perfil">Meu Perfil</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="/limite-gasto">Metas Orçamentais</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.LogoutButton onClick={handleLogout}>
              <FiLogOut size={20} />
            </S.LogoutButton>
          </S.NavItem>
        </S.NavList>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
