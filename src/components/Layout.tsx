import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vmin;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  nav {
    padding: 1rem;
    a {
      text-decoration: none;
      margin: 0 0.5rem;
      display: inline-block;
      height: 100%;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  width: 100vw;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <nav>
          <Link href='/'>Inicio</Link>
          <Link href='/private'>Private</Link>
        </nav>
      </Header>
      <main>{children}</main>
      <Footer></Footer>
    </Container>
  );
};

export default Layout;
