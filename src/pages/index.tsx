import type { NextPage } from 'next';
import Title from '../components/Title';

const Home: NextPage = () => {
  return (
    <Title fontSize={20}>
      Hello World! 🌎👋🏻
      <span>Texto secundário</span>
    </Title>
  );
};

export default Home;
