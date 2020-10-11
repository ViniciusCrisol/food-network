import React from 'react';
import Head from 'next/head';

import { Container, Bannner, Content } from '../styles/pages/Home';

const Home: React.FC = () => {
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
          <a>See all recipes</a>
          <a>Create a recipe</a>
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
      </Content>
    </Container>
  );
};

export default Home;
