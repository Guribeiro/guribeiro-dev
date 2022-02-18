import { Instagram, Twitter, Linkedin } from 'react-feather';

import styled from 'styled-components';

import Section from '../components/Section';
import Welcome from '../components/Welcome';

const Main = styled.main`
  max-width: 1120px;
  padding: 2rem;
  margin: 0 auto;

  figure {
    margin: 3rem 0 2rem;
    text-align: center;
    align-items: center;
    justify-content: center;

    img {
      height: 12rem;
      width: 12rem;
      border-radius: 6rem;
    }

    figcaption {
      margin-top: 2rem;

      a + a {
        margin-left: 3rem;
      }
    }
  }

  article {
    border-bottom: 1px solid #1b1b1d;
    padding: 2rem 0;
  }
`;

export default function Home() {
  return (
    <>
      <Main>
        <figure>
          <img
            src="https://avatars.githubusercontent.com/u/50778163?v=4"
            alt="Foto de Gustavo Henrique Ribeiro Dias"
          />
          <figcaption>
            <a
              href="https://www.instagram.com/gustavhrd/?hl=pt-br"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram color="#fff" size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/gustavohribeiro/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin color="#fff" size={16} />
            </a>
            <a
              href="https://twitter.com/Guribeir"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter color="#fff" size={16} />
            </a>
          </figcaption>
        </figure>

        <Welcome>Hello there</Welcome>

        <Section label="Why me 😉">
          <p>
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Section>

        <Section label="Work experience 👩🏻‍💻 ">
          <article>
            <h3>Fullstack developer</h3>
            <i>Softwrap, Remote - (01/05/2021 - 24/12/2021)</i>
            <p>
              Atualmente estou trabalhando em um aplicativo mobile
              multiplataforma que está sendo desenvolvido com react-native. O
              aplicativo visa facilitar a compra de cotas em criptomoedas e a
              realização de investimentos pelos clientes da empresa, que
              gerenciará essas solicitações feitas pelo aplicativo direto do
              dashboard. Cuidei de todo o desenvolvimento das telas da
              aplicação, seguindo de acordo com o layout desenvolvido pelo
              designer da empresa e aprovado pelo próprio cliente do projeto.
              Também fiquei encarregado de realizar a integração do aplicativo
              com os serviços do Firebase de acordo com a demanda do projeto.
            </p>
          </article>

          <article>
            <h3>Conferente</h3>
            <i>Express Transportes Urbanos LTDA – (01/09/2014 - 01/12/2019)</i>
            <p>
              Como conferente, atuei em diversos segmentos do setor da
              Recebedoria, verificando irregularidades nas validações dos
              bilhetes de ônibus, divergência na totalização dos passageiros
              diários, divergência de horário entre funcionários x escala. Atuei
              na digitação dos relatórios diários de bordo e também trabalhava
              com pagamentos dos funcionários na boca do caixa, sendo
              responsável por malotes de alto valor em dinheiro.
            </p>
          </article>
        </Section>
        <Section label="Skills 🛠">
          <article>
            <h3>Tecnologias 💻 </h3>
            <i>Javascript</i>
            <p>
              Minha linguaguem de programação nativa é o Javascript, a qual eu
              tenho uma maior proficiência e consigo desenvolver muito mais e
              que eu venho estudando há mais de 2 anos. Já a utilizei em
              projetos frontend com React, NextJs e agora estou conhecendo mais
              sobre o ViteJs, uma nova ferramenta para substituir o webpack e o
              bundle de projetos React. No backend já desenvolvi APIs Rest em
              Node utilizando o framework Express e para testes tenho
              conhecimento em Jest.
            </p>
          </article>
          <article>
            <h3>Languages 🗣 </h3>
            <i>English</i>
            <p>
              1 ano estudando sozinho e 2 anos estudando no CNA. Consigo ler
              documentos e me comunicar bem
            </p>

            <i>Portuguese</i>
            <p>Falante nativo</p>
          </article>
        </Section>
        <Section label="Education 📚">
          <article>
            <h3>GOSTACK BOOTCAMP</h3>
            <i>Concluído em 04/02/2021</i>
            <p>Rocketseat</p>
          </article>

          <article>
            <h3>PRINCÍPIOS BÁSICOS DO MARKETING DIGITAL</h3>
            <i>Concluído em 21/08/2020</i>
            <p>Google Ateliê Digital</p>
          </article>

          <article>
            <h3>UX DESIGN & USER EXPERIENCE DESIGN COURSE - THEORY ONLY</h3>
            <i>Concluído em 03/08/2020</i>
            <p>Udemy</p>
          </article>

          <article>
            <h3>
              SUPERIOR DE TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS
            </h3>
            <i>
              2019 (Inacabado devido a problemas pessoais) - Restam apenas horas
              complementares
            </i>
            <p>Universidade Cruzeiro do Sul - São Miguel paulista.</p>
          </article>
        </Section>
      </Main>
    </>
  );
}
