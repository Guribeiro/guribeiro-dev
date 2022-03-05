import { useCallback, useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  border-radius: 1rem;

  min-width: 10rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;

  & + div {
    margin-left: 1rem;
  }

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
`;

interface LanguageCardProps {
  label: string;
}

const LanguageCard = ({ label }: LanguageCardProps): JSX.Element => {
  return (
    <Container className={label}>
      <h1>{label}</h1>
    </Container>
  );
};
export default LanguageCard;
