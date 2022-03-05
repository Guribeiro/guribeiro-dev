import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  padding: 1.5rem;
  border: 1px solid #1b1b1d;

  width: 100%;
  border-radius: 0.625rem;
  transition: 300ms;

  p {
    font-size: 1.2rem;
    padding: 1.5rem 0 1.5rem;
    line-height: 2rem;
  }

  & + section {
    margin-top: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) =>
      shade(0.1, `${theme.colors.background}`)};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  svg {
    margin-right: 1rem;
  }
`;

export const Languages = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-right: 1rem;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 1.2rem;
    background-color: ${({ theme }) => theme.colors.text};

    &.CSS,
    &.Elixir,
    &.HTML {
      background: #9b59b6;
    }

    &.Python,
    &.TypeScript {
      background: #3498db;
    }

    &.JavaScript {
      background: #f1c40f;
    }
  }

  strong {
    font-size: 1rem;
    font-weight: 400;
  }
`;
