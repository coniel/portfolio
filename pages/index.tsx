import type { NextPage } from 'next';
import Head from 'next/head';
import { styled } from '../stitches.config';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { Process } from '../components/Process';
import { RecentProjects } from '../components/RecentProjects';
import { Tooltkit } from '../components/Toolkit';

const Container = styled('div', {
  width: '100vw',
  overflowX: 'hidden',
});

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Oscar Coniel</title>
        <meta
          name="description"
          content="Fullstack developer based in Helsinki, Finland."
        />
      </Head>
      <main>
        <Header />
        <RecentProjects />
        <Tooltkit />
        <Process />
        <Contact />
      </main>
    </Container>
  );
};

export default Home;
