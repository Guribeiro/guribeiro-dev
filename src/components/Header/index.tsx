import DarkModeToggle from 'react-dark-mode-toggle';
import { Menu, X } from 'react-feather';

import ActiveLink from '@/components/ActiveLink';
import { useMenu } from '@/hooks/menu';
import { useTheme } from '@/hooks/theme';

import { Container } from './styles';

const Header = (): JSX.Element => {
  const { isMenuOpen, onMenuOpen } = useMenu();
  const { toggleTheme, theme } = useTheme();
  return (
    <Container>
      <div>
        <h1>
          Guribeiro.<span>dev</span>
        </h1>
        <nav>
          <ActiveLink href="/" activeClassName="active">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/portfolio" activeClassName="active">
            <a>Portfólio</a>
          </ActiveLink>
          <ActiveLink href="/contact" activeClassName="active">
            <a>Contato</a>
          </ActiveLink>
        </nav>

        <section>
          <DarkModeToggle
            onChange={() => toggleTheme()}
            checked={theme.title === 'dark' ? true : false}
            className="toggle"
            speed={5}
          />
        </section>

        <button onClick={onMenuOpen} className="menu-button">
          {isMenuOpen ? (
            <X color={theme.colors.text} size={24} />
          ) : (
            <Menu color={theme.colors.text} size={24} />
          )}
        </button>
      </div>
    </Container>
  );
};

export default Header;
