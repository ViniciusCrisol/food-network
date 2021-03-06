import React, { useCallback, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/authContext';

import Button from '../../components/Button';
import Input from '../../components/UnformInput';
import { Container, Form } from '../../styles/pages/Auth';

const SignUp: React.FC = () => {
  const { signUp } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async ({ email, name, password }: ISignUpData): Promise<void> => {
      setLoading(true);
      try {
        if (!email || !name || !password) throw new Error('Validation fails.');
        await signUp({ email, name, password });
      } catch (err) {
        setLoading(false);
        if (err instanceof Error) {
          toast.error(err.message);
        } else {
          toast.error(err.response.data.message);
        }
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
