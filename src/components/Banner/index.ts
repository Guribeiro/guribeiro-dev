import styled from 'styled-components';

export const Banner = styled.figure`
  margin: 3rem 0 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0 auto;
  }

  img {
    height: 12rem;
    width: 12rem;
    border-radius: 6rem;
  }

  figcaption {
    margin-top: 2rem;

    a {
      & + a {
        margin-left: 5rem;
      }

      svg {
        transition: 300ms;
      }

      &:hover {
        .twitter {
          fill: #1da1f2;
          stroke: #1da1f2;
        }

        .instagram {
          stroke: #833ab4;
        }

        .linkedin {
          stroke: #2867b2;
          fill: #2867b2;
        }
      }
    }
  }
`;
