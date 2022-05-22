import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeToggle } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Oscar Coniel</title>
        <meta
          name="description"
          content="Fullstack developer based in Helsinki, Finland."
        />
      </Head>

      <div>
        <ThemeToggle />
      </div>

      <main></main>
    </div>
  );
};

export default Home;
