import React, { useCallback, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';
import Input from '../../components/UnformInput';
import { useAuth } from '../../hooks/authContext';
import { Container, Form } from '../../styles/pages/Auth';

const SignUp: React.FC = () => {
  const { signUp } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async ({ email, name, password }: ISignUpData) => {
      setLoading(true);
      try {
        await signUp({ email, name, password });
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    },
    []
  );

  return (
    <Container>
      <Head>
        <title>Sign Up - Food Network</title>
      </Head>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <Input name="name" placeholder="Name" />
        <Input name="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <Button loading={loading} type="submit">
          Sign up
        </Button>
        <Link href="/auth/login">
          <a>I already have an account.</a>
        </Link>
      </Form>
    </Container>
  );
};

export default SignUp;
