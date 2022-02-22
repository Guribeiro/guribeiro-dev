import { X } from 'react-feather';

import { useTheme } from '@/hooks/theme';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1;

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

interface MenuProps {
  onMenuClose(): void;
}

const Menu = ({ onMenuClose }: MenuProps): JSX.Element => {
  const { theme } = useTheme();
  return (
    <Container>
      <button onClick={onMenuClose}>
        <X color={theme.colors.text} size={24} />
      </button>
      <Link href="/" prefetch>
        <a>Home</a>
      </Link>
      <Link href="portfolio" prefetch>
        <a>Portfólio</a>
      </Link>
      <Link href="contact" prefetch>
        <a>Contato</a>
      </Link>
    </Container>
  );
};

export default Menu;
