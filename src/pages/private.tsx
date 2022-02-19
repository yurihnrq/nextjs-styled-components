import type { NextPage } from 'next';
import Layout from '../components/Layout';
import PrivateRoute from '../router/PrivateRoute';

const Private: NextPage = () => {
  return <Layout>Private page. ⚙️</Layout>;
};

export default PrivateRoute(Private);
