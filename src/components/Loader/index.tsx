import { Loader as LoaderIcon } from 'react-feather';

import { useTheme } from '@/hooks/theme';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    100% { -moz-transform: rotate(360deg); } 
    100% { -webkit-transform: rotate(360deg); }  
`;

const Container = styled.div`
  text-align: center;
`;

const Icon = styled(LoaderIcon)`
  height: 5rem;
  animation: ${spin} 2s linear infinite;
`;

type Size = 'small' | 'medium' | 'big';

interface SizesAsPixel {
  [key: string]: number;
}

const sizesAsPixel: SizesAsPixel = {
  small: 16,
  medium: 32,
  big: 64,
};

interface LoaderProps {
  size?: Size;
}

const Loader = ({ size }: LoaderProps): JSX.Element => {
  const { theme } = useTheme();
  const iconSize = sizesAsPixel[size || 'medium'];

  return (
    <Container>
      <Icon size={iconSize} color={theme.colors.text} />
    </Container>
  );
};

export default Loader;
