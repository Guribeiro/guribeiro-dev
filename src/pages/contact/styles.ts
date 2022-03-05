import { Form as Unform } from '@unform/web';
import { shade } from 'polished';
import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1120px;
  padding: 2rem;
  margin: 0 auto;

  .mail-lottie-container {
    max-width: 260px;
    text-align: center;
    margin: 0 auto;
  }

  .row {
    max-width: 30rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-evenly; */

    a {
      transition: color 300ms;
      line-height: 5rem;
      color: ${({ theme }) => theme.colors.text};
      transition: transform 300ms;
      cursor: pointer;

      &:hover {
        transform: translateY(-6px);
      }

      & + a {
        margin-left: 3rem;
      }
    }
  }
`;

export const Form = styled(Unform)`
  padding: 1rem 0;

  width: 100%;
  max-width: 60rem;

  button {
    margin-top: 1.6rem;
    width: 100%;
    line-height: 5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    border-radius: 0.5rem;
    justify-content: center;
    transition: background-color 300ms;

    &:hover {
      background-color: ${shade(0.2, '#ffa027')};
    }
  }
`;
