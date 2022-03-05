import { ReactNode, useCallback, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { useSpring, animated } from 'react-spring';

import { useTheme } from '@/hooks/theme';

import { Container } from './styles';

interface SectionProps {
  label: string;
  children: ReactNode;
}

const Section = ({ label, children }: SectionProps): JSX.Element => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const styles = useSpring({
    to: { opacity: isContentVisible ? 1 : 0 },
    from: { opacity: 0 },
  });

  const { theme } = useTheme();

  const handleContentVisibility = useCallback(() => {
    setIsContentVisible((prev) => !prev);
  }, []);

  return (
    <Container>
      <button onClick={handleContentVisibility}>
        <h2>{label}</h2>
        <ChevronDown
          className={isContentVisible ? 'chevron-down' : 'chevron-up'}
          color={theme.colors.text}
          size={16}
        />
      </button>

      {isContentVisible && (
        <animated.div style={styles}>{children}</animated.div>
      )}
    </Container>
  );
};

export default Section;
