import { Phone } from 'react-feather';
import Lottie from 'react-lottie';

import mailLottieAnimation from '@/assets/mail-lottie.json';
import Section from '@/components/Section';
import Welcome from '@/components/Welcome';
import Head from 'next/head';
import styled from 'styled-components';

import GmailIcon from '../../assets/gmail.svg';
import OutlookIcon from '../../assets/outlook.svg';

const Main = styled.main`
  max-width: 1120px;
  padding: 2rem;
  margin: 0 auto;

  .mail-lottie-container {
    max-width: 260px;
    text-align: center;
    margin: 0 auto;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      margin-left: 1rem;
      transition: color 300ms;
      line-height: 5rem;
      color: ${({ theme }) => theme.colors.text};

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  > a {
    height: 5rem;
    width: 5rem;

    border-radius: 4rem;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    background-color: #0cb755;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Contact = (): JSX.Element => {
  const whatsappLink =
    'https://api.whatsapp.com/send?phone=5511968657222&text=Ol%C3%A1%2C%20Gustavo.%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20link%20do%20seu%20site.%20Tem%20um%20tempinho%20para%20conversarmos%20%3F';
  return (
    <>
      <Head>
        <title>Contato - Gustavo Henrique Ribeiro Dias - Guribeiro.dev</title>
      </Head>
      <Main>
        <div className="mail-lottie-container">
          <Lottie
            options={{
              animationData: mailLottieAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </div>
        <Welcome>Diga um Olá</Welcome>
        <Section label="Informações de contato">
          <article>
            <i>Endereço de email</i>

            <div className="row">
              <OutlookIcon />
              <a href="mailto:gugahribeiro@hotmail.com">
                gugahribeiro@hotmail.com
              </a>
            </div>
            <div className="row">
              <GmailIcon />
              <a href="mailto:gustavribeirod@gmail.com">
                gustavribeirod@gmail.com
              </a>
            </div>
          </article>
        </Section>
        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <Phone size={24} color="#FFFFFF" />
        </a>
      </Main>
    </>
  );
};

export default Contact;
