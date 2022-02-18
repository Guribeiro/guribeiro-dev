import styled from 'styled-components';

import Section from '../../components/Section';
import Welcome from '../../components/Welcome';

const Main = styled.main`
  max-width: 1120px;
  padding: 2rem;
  margin: 0 auto;
`;

const Contact = (): JSX.Element => {
  return (
    <>
      <Main>
        <Welcome>Say hello</Welcome>
        <Section label="Contact information ☎️">
          <article>
            <i>Email address</i>
            <p>gugahribeiro@hotmail.com</p>
            <p>gustavribeirod@gmail.com</p>
          </article>
        </Section>
      </Main>
    </>
  );
};

export default Contact;
