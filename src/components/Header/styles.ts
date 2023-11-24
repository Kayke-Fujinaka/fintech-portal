import styled, { css } from 'styled-components';

import { IHeaderProps } from './@types';

export const HeaderContainer = styled.header<IHeaderProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${theme.colors.primary};

    .menu {
      display: ${isOpen ? 'none' : 'block'};
    }

    .close {
      display: ${isOpen ? 'block' : 'none'};
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 1001;
    }

    .menu,
    .close {
      color: ${theme.colors.white};
    }

    @media (min-width: 768px) {
      .menu,
      .close {
        display: none;
      }
    }
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    h1 {
      color: ${theme.colors.white};
    }
  `}
`;

export const Nav = styled.nav<IHeaderProps>`
  ${({ theme, isOpen }) => css`
    display: ${isOpen ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    background: ${theme.colors.primary};
    z-index: 1000;

    @media (min-width: 768px) {
      display: flex;
      position: relative;
      top: 0;
      height: auto;
      background: none;
      flex-direction: row;
      justify-content: flex-end;
    }
  `}
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 3rem;
  }
`;

export const NavItem = styled.li`
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const NavLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.white};
    display: block;
    width: 100%;
    padding: 1rem 0;

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const LogoutButton = styled.button`
  padding: 1rem;
  border: none;
  color: white;
  cursor: pointer;
  align-self: center;
  background-color: transparent;

  @media (min-width: 768px) {
    padding: 0;
  }
`;
