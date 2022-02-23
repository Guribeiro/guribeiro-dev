import { HTMLAttributes, useEffect } from 'react';
import { X } from 'react-feather';

import { useTheme } from '@/hooks/theme';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const showMenu = css`
  opacity: 1;
  transform: translateY(0);
  transition: transform 500ms;
`;

const hideMenu = css`
  opacity: 0;
  transform: translateY(-1000px);
  transition: transform 500ms;
`;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 999;

  &.show-menu {
    animation: ${showMenu} 1s;
  }

  &.hide-menu {
    animation: ${hideMenu} 1s;
  }

  button {
    position: absolute;
    top: 1rem;
    right: 2rem;
    line-height: 5rem;
  }

  a {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  @media (min-width: 625px) {
    & {
      display: none;
    }
  }
`;

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  onMenuClose(): void;
}

const Menu = ({ onMenuClose, className, ...rest }: MenuProps): JSX.Element => {
  const { theme } = useTheme();

  return (
    <Container className={className} {...rest}>
      <button onClick={onMenuClose}>
        <X color={theme.colors.text} size={24} />
      </button>
      <Link href="/">
        <a onClick={onMenuClose}>Home</a>
      </Link>
      <Link href="portfolio">
        <a onClick={onMenuClose}>Portfólio</a>
      </Link>
      <Link href="contact">
        <a onClick={onMenuClose}>Contato</a>
      </Link>
    </Container>
  );
};

export default Menu;
