import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Input } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const UnformInput: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      path: 'value',
      name: fieldName,
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return <Input {...rest} ref={inputRef} autoComplete="off" />;
};

export default UnformInput;
