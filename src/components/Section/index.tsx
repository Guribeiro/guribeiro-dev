import { ReactNode } from 'react';

import styled from 'styled-components';

const Container = styled.section`
  padding: 2rem 0;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 1rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  i {
    padding: 1rem 0;
    line-height: 5rem;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`;

interface SectionProps {
  label: string;
  children: ReactNode;
}

const Section = ({ label, children }: SectionProps): JSX.Element => {
  return (
    <Container>
      <h2>{label}</h2>
      {children}
    </Container>
  );
};

export default Section;
