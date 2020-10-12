import React, { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FormHandles } from '@unform/core';

import Button from '../components/Button';
import Input from '../components/UnformInput';

import { Container, Form } from '../styles/pages/Auth';

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Head>
        <title>Log In - Food Network</title>
      </Head>

      <Form ref={formRef} onSubmit={data => console.log(data)}>
        <h2>Log in</h2>
        <Input name="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit">Log in</Button>
        <Link href="signup">I don't have an account.</Link>
      </Form>
    </Container>
  );
};

export default LogIn;
