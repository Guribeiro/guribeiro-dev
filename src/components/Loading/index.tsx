import Lottie from 'react-lottie';

import loadingLottieAnimation from '@/assets/loading-lottie.json';

const Loading = (): JSX.Element => {
  return (
    <Lottie
      options={{
        animationData: loadingLottieAnimation,
        loop: true,
        autoplay: true,
      }}
      width={160}
    />
  );
};

export default Loading;
