import { NextPage } from 'next';
import Forbidden from '../pages/forbidden';

const PrivateRoute = (Page: NextPage): NextPage => {
  const auth = true;

  if (auth) return Page;
  else return Forbidden;
};

export default PrivateRoute;
