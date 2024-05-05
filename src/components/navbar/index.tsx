import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface Route {
  path: string;
  label: string;
}

interface NavBarProps {
  routes: Route[];
}

const NavBar: React.FC<NavBarProps> = ({ routes }) => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Nav>
          {routes.map(route => (
            <Nav.Link key={route.path} href={route.path}>{route.label}</Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
