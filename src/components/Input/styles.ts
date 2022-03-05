import { darken, shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0 1.6rem;
  background: ${({ theme }) => darken(0.05, `${theme.colors.background}`)};
  border: 1px solid ${({ theme }) => darken(1, `${theme.colors.text}`)};
  border-radius: 0.5rem;
  position: relative;

  & + div {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.2rem;
    display: block;
    line-height: 3rem;
  }
`;

export const StyledInput = styled.input`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px
      ${({ theme }) => darken(0.05, `${theme.colors.background}`)} inset;
    color: ${({ theme }) => theme.colors.text};
  }
  &::first-line {
    color: ${({ theme }) => theme.colors.text};
  }

  flex: 1;
  line-height: 5rem;
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};

  ::placeholder {
    color: red;
  }
`;

export const Textarea = styled.textarea`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px
      ${({ theme }) => darken(0.05, `${theme.colors.background}`)} inset;
    color: ${({ theme }) => theme.colors.text};
  }

  flex: 1;
  resize: none;
  line-height: 5rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: none;

  ::placeholder {
    color: ${({ theme }) => shade(0.7, `${theme.colors.text}`)};
  }
`;

export const TextError = styled.span`
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
  padding: 1rem 0 0.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #e74c3c;
`;
