import React, { useCallback, useRef } from 'react';
import Head from 'next/head';
import { FormHandles } from '@unform/core';

import api from '../../services/api';

import Button from '../../components/Button';
import Input from '../../components/UnformInput';
import Textarea from '../../components/UnformTextarea';
import InputLabel from '../../components/InputLabel';
import { Container, Content, Form, Tips } from '../../styles/pages/CreatePost';

const CreatePost: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async data => {
    try {
      await api.post('/posts', data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }, []);

  return (
    <Container>
      <Head>
        <title>Create post - Food Network</title>
      </Head>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputLabel label="Title" />
          <Input name="title" />

          <InputLabel label="Main tag" />
          <Input name="tag" />

          <InputLabel label="Post content" />
          <Textarea name="content" />

          <Button>Create post</Button>
        </Form>

        <Tips>
          <header>How can I create a better post?</header>
          <p>
            To create a better post, you need to be more objective, so people
            gonna understand you better.
          </p>
        </Tips>
      </Content>
    </Container>
  );
};

export default CreatePost;
