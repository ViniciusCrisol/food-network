import React from 'react';
import Head from 'next/head';

import { Container, Bannner } from '../styles/pages/Home';

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
    </Container>
  );
};

export default Home;
