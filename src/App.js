import React, { Component } from 'react';
import './App.css';
import Routes from './components/routes';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap' 

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Techs" id="basic-nav-dropdown">
                <NavDropdown.Item href="/marth">Marth</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/lucina">Lucina</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/">Docs</Nav.Link>
              <Form>
                <Button href="/marth" variant="outline-info">Discord</Button>
              </Form>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <Row>
            <Col>
              <Routes />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
