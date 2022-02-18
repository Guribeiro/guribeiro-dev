import { X } from 'react-feather';

import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #ffa027;
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
    color: #1b1b1d;
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
  return (
    <Container>
      <button onClick={onMenuClose}>
        <X color="#ffffff" size={24} />
      </button>
      <a href="/">About me</a>
      <a>Portfolio</a>
      <a href="contact">Contact me</a>
    </Container>
  );
};

export default Menu;
