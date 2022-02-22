import Lottie from 'react-lottie';

import notFoundLottieAnimation from '@/assets/not-found-lottie.json';
import Link from 'next/link';
import { shade } from 'polished';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 1120px;
  padding: 0 2rem;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  .lottie-container {
    max-width: 860px;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    line-height: 5rem;
    max-width: 53.75rem;
  }

  a {
    margin-top: 2rem;
    line-height: 5rem;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    max-width: 53.75rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    border-radius: 0.625rem;

    &:hover {
      background-color: ${shade(0.1, '#ffa027')};
    }
  }
`;

const NotFoundScreen = (): JSX.Element => {
  return (
    <Main>
      <div className="lottie-container">
        <Lottie
          options={{
            animationData: notFoundLottieAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </div>
      <h1>Oops! Parece que estamos em obra por aqui 😥</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </Main>
  );
};

export default NotFoundScreen;
