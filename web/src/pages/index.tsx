import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { useAuth } from '../hooks/authContext';
import { Container, Bannner, Content, Card } from '../styles/pages/Home';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Head>
        <title>
          Food Network - Where people Learn, Share, &amp; Build Recipes
        </title>
      </Head>

      <Bannner>
        <h1>Share recipes with us!</h1>
        <p>
          We are a website that aims to help, teach, and share recipes with the
          community. That way, we will have a tastier world.
        </p>
        <div>
          <Link href="/posts">
            <a>See all recipes</a>
          </Link>
          <Link href={user ? '/posts/create' : '/auth/login'}>
            <a>Create a recipe</a>
          </Link>
        </div>
      </Bannner>

      <Content>
        <h1>Foor cooks, by cooks</h1>
        <div className="separator" />
        <p>
          Food Network is an <a>open community</a> for anyone who cooks. We help
          you get answers to your toughest questions, share knowledge, and more.
          so we will make the world more delicious!
        </p>

        <Card>
          <h2>Public Q&amp;A</h2>
          <p>
            Get answers and give back by sharing your knowledge with others.
            <Link href="/auth/signup">
              <a>&nbsp;Sign up&nbsp;</a>
            </Link>
            for an account.
          </p>
          <Link href="/posts">
            <a>Browse recipes</a>
          </Link>
        </Card>
      </Content>
    </Container>
  );
};

export default Home;
