import Lottie from 'react-lottie';

import styled from 'styled-components';

import waveHandLottieAnimation from '../../assets/wave-hand.json';

const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem 0;

  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  .lottie-container {
    margin-left: 1rem;
  }
`;

interface WelcomeProps {
  children: string;
}

const Welcome = ({ children }: WelcomeProps): JSX.Element => {
  return (
    <Container>
      <h1>{children}</h1>
      <div className="lottie-container">
        <Lottie
          width={32}
          options={{
            animationData: waveHandLottieAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </div>
    </Container>
  );
};

export default Welcome;
