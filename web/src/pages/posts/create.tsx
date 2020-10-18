import React, { useCallback, useContext, useRef } from 'react';
import Head from 'next/head';
import { toast } from 'react-toastify';
import { FormHandles } from '@unform/core';

import api from '../../services/api';

import Button from '../../components/Button';
import Input from '../../components/UnformInput';
import Textarea from '../../components/UnformTextarea';
import InputLabel from '../../components/InputLabel';
import { Container, Content, Form, Tips } from '../../styles/pages/CreatePost';

interface IFormData {
  title: string;
  tag: string;
  content: string;
}

const CreatePost: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: IFormData): Promise<void> => {
    try {
      const { content, tag, title } = data;
      if (!content || !tag || !title) throw new Error('Validations fails!');
      await api.post('/posts', data);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error(err.response.data.message);
      }
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
