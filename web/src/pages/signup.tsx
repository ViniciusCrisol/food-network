import React, { useRef } from 'react';
import Head from 'next/head';
import { FormHandles } from '@unform/core';

import Input from '../components/UnformInput';

import { Container, Form } from '../styles/pages/Auth';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Head>
        <title>Sign Up - Food Network</title>
      </Head>

      <Form ref={formRef} onSubmit={data => console.log(data)}>
        <Input name="name" />
        <Input name="email" />
        <Input name="password" type="password" />
      </Form>
    </Container>
  );
};

export default SignUp;
