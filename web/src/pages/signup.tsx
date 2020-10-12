import React, { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FormHandles } from '@unform/core';

import Button from '../components/Button';
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
        <h2>Sign up</h2>
        <Input name="name" placeholder="Name" />
        <Input name="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit">Sign up</Button>
        <Link href="login">I already have an account.</Link>
      </Form>
    </Container>
  );
};

export default SignUp;
