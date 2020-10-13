import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Textarea } from './styles';

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const UnformTextarea: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      path: 'value',
      name: fieldName,
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return <Textarea {...rest} ref={inputRef} autoComplete="off" />;
};

export default UnformTextarea;
