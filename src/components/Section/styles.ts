import styled from 'styled-components';

export const Container = styled.section`
  padding: 2rem 0;

  article {
    a {
      font-weight: 300;
      transition: color 300ms;
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;

    h2 {
      font-size: 2rem;
      line-height: 5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.text};
    }

    svg {
      margin-left: 1rem;
    }
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
