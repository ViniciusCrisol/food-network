import React, { useRef } from 'react';
import Head from 'next/head';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';
import Input from '../../components/UnformInput';
import Textarea from '../../components/UnformTextarea';

import { Container, Form, InputHeader } from '../../styles/pages/CreatePost';

const CreatePost: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Head>
        <title>Create post - Food Network</title>
      </Head>

      <Form ref={formRef} onSubmit={data => console.log(data)}>
        <InputHeader>
          <strong>Title</strong>
          <span>Be specific and imagine you’re talking to another person</span>
        </InputHeader>
        <Input name="title" placeholder="My cake is so delicious!" />
        <InputHeader>
          <strong>Body</strong>
          <span>Inclue all the information</span>
        </InputHeader>
        <Textarea name="title" placeholder="My cake is so delicious!" />
      </Form>

      <Button>Create post</Button>
    </Container>
  );
};

export default CreatePost;
