import { Linkedin, Twitter, Menu, X } from 'react-feather';

import { useMenu } from '../../hooks/menu';
import ActiveLink from '../ActiveLink';
import { Container } from './styles';

const Header = (): JSX.Element => {
  const { isMenuOpen, onMenuOpen } = useMenu();
  return (
    <Container>
      <div>
        <h1>
          Guribeiro.<span>dev</span>
        </h1>
        <nav>
          <ActiveLink href="/" activeClassName="active">
            <a>About me</a>
          </ActiveLink>
          <ActiveLink href="/portfolio" activeClassName="active">
            <a>Portfolio</a>
          </ActiveLink>
          <ActiveLink href="/contact" activeClassName="active">
            <a>Contact me</a>
          </ActiveLink>
        </nav>

        <section>
          <a className="social-button">
            <Linkedin color="#fff" size={16} />
          </a>
          <a className="social-button">
            <Twitter color="#fff" size={16} />
          </a>
        </section>

        <button onClick={onMenuOpen} className="menu-button">
          {isMenuOpen ? (
            <X color="#fff" size={24} />
          ) : (
            <Menu color="#fff" size={24} />
          )}
        </button>
      </div>
    </Container>
  );
};

export default Header;
