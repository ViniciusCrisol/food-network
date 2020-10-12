import React, { useRef, useCallback, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FormHandles } from '@unform/core';

import api from '../../services/api';
import { useAuth } from '../../hooks/authContext';

import Button from '../../components/Button';
import Input from '../../components/UnformInput';

import { Container, Form } from '../../styles/pages/Auth';

const LogIn: React.FC = () => {
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async ({ email, password }: ISignInData) => {
    setLoading(true);
    try {
      await signIn({ email, password });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <Head>
        <title>Log In - Food Network</title>
      </Head>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <Input name="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <Button loading={loading} type="submit">
          Log in
        </Button>
        <Link href="/auth/signup">
          <a>I don't have an account.</a>
        </Link>
      </Form>
    </Container>
  );
};

export default LogIn;
