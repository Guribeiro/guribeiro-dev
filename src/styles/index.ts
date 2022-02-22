import styled from 'styled-components';

export const Main = styled.main`
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
