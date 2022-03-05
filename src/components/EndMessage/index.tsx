import Lottie from 'react-lottie';

import endMessageLottieAnimation from '@/assets/the-end-lottie.json';
import { shade } from 'polished';
import styled from 'styled-components';

const Container = styled.div`
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  max-width: 53.75rem;
  width: 100%;

  p {
    text-align: center;
    line-height: 5rem;
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    margin-top: 2rem;
    line-height: 5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;

    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    border-radius: 0.625rem;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${shade(0.1, '#ffa027')};
    }
  }
`;

interface EndMessageProps {
  scrollToTop(): void;
}

const EndMessage = ({ scrollToTop }: EndMessageProps): JSX.Element => {
  return (
    <Container>
      <Lottie
        options={{
          animationData: endMessageLottieAnimation,
          loop: true,
          autoplay: true,
        }}
        width={160}
      />
      <p>yeaaah! você viu tudo 🤗</p>
      <button onClick={scrollToTop}>Ir para o top</button>
    </Container>
  );
};

export default EndMessage;
