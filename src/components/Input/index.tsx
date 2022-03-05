import { InputHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Container, StyledInput, Textarea, TextError } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textarea?: boolean;
}

const Input = ({
  name,
  textarea,
  placeholder,
  ...rest
}: InputProps): JSX.Element => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <TextError>{error}</TextError>

      {textarea ? (
        <Textarea
          ref={inputRef}
          placeholder={placeholder}
          rows={4}
          name={name}
          defaultValue={defaultValue}
        ></Textarea>
      ) : (
        <StyledInput
          ref={inputRef}
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...rest}
        />
      )}
    </Container>
  );
};

export default Input;
