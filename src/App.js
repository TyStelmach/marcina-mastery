import React, { Component } from 'react';
import './App.css';
import Routes from './components/routes';
import ContentTable from './data/sitecontent'
import { Container, Alert, Image, Row, Col, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap' 

class App extends Component {
  render() {
    return (
      <div>
        {ContentTable["static_site"].map((content, i) => {
          return(
            <div>
              <Navbar bg="primary" variant="dark">
                <Container>
                  <Navbar.Brand href="/">Marcina  <Image src={require("./images/falchion-logo.gif")} height={60} /> Mastery</Navbar.Brand>
                  <Nav className="ml-auto">
                    <Nav.Link href={content.navigation_1_link}>{content.navigation_1_name}</Nav.Link>
                    <NavDropdown title={content.navigation_2_name} id="basic-nav-dropdown">
                      <NavDropdown.Item href={content.navigation_2_subnav_1_link}>{content.navigation_2_subnav_1_name}</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href={content.navigation_2_subnav_2_link}>{content.navigation_2_subnav_2_name}</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href={content.navigation_2_subnav_3_link}>{content.navigation_2_subnav_3_name}</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href={content.navigation_3_link}>{content.navigation_3_name}</Nav.Link>
                    <Form>
                      <Button href={content.navigation_4_link} variant="outline-info">{content.navigation_4_name}</Button>
                    </Form>
                  </Nav>
                </Container>
              </Navbar>
              <Container>
              <Alert variant="success">
                <p></p>
                                            
              </Alert>
              </Container>
              
              <Routes />

              <Navbar bg="primary" variant="dark">
                <Container>
                  <Row>
                    <Col>
                      <p>Combos and information founded by the members of the <a href="#">Marcina Discord</a></p>
                      <p>Website and information built and compiled by <a href="#">Fugazi</a></p>
                    </Col>
                  </Row>
                </Container>
              </Navbar>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
