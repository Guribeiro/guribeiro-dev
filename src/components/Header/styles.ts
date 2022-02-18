import styled from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid #1b1b1d;

  div {
    height: 5rem;
    max-width: 1120px;
    padding: 0 2rem;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 625px) {
      .menu-button {
        display: none;
      }
    }
  }

  h1 {
    color: #ecf0f1;
    font-size: 3rem;
    font-weight: 700;
    padding-right: 2rem;

    span {
      color: #ffa027;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 5rem;

    a {
      display: inline-block;
      line-height: 5rem;
      position: relative;
      color: #fff;
      font-weight: 500;
      font-size: 1.5rem;
      padding: 0 0.5rem;

      & + a {
        margin-left: 3rem;
      }

      &.active {
        color: #fff;
      }

      &.active::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 3px 3px 0 0;
        background: #ffa027;
        bottom: 1px;
        right: 0;
      }
    }
  }

  section {
    height: 5rem;
    padding-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .social-button {
      padding: 0.5rem;
      line-height: 5rem;

      & + .social-button {
        margin-left: 1.5rem;
      }
    }
  }

  @media (max-width: 625px) {
    & {
      section,
      nav {
        display: none;
      }

      .menu-button {
        display: inline-block;
      }
    }
  }
`;
