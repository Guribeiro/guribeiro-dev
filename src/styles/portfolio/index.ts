import InfiniteScroll from 'react-infinite-scroll-component';

import styled from 'styled-components';

export const StyledInifiteScroll = styled(InfiniteScroll)`
  h3 {
    line-height: 5rem;
  }

  .languages-container {
    padding-bottom: 1rem;
    display: flex;
    align-items: center;

    padding: 1rem 0 2rem;

    width: 100%;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 625px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;
