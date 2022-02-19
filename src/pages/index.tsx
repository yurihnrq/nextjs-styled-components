import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Title from '../components/Title';

const Home: NextPage = () => {
  return (
    <Layout>
      <Title fontSize={20}>
        Hello World! 🌎👋🏻
        <span>Texto secundário</span>
      </Title>
    </Layout>
  );
};

export default Home;
