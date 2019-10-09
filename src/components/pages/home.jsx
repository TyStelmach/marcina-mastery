import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button, Image } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Container>
        </Jumbotron>

        <Container>
          <Row>
            <h2>
              Selecting your Fighter
            </h2>
          </Row>
          
          <Row>
            <Col>
              <Image fluid src="https://www.ssbwiki.com/images/thumb/e/e9/Marth_SSBU.png/1200px-Marth_SSBU.png" />
            </Col>
            <Col>
              <h3>Marth, The Hero King</h3>
              <p>
                In speed and movement, Marth does not differ much from Lucina... 
              </p>
              <p>
                <Button variant="primary">Learn Marth</Button>
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Lucina, The Warrior Princess</h3>
              <p>
                Lucina lacks a tipper, so free kills bby 
              </p>
              <p>
                <Button variant="primary">Learn Lucina</Button>
              </p>
            </Col>
            <Col>
              <Image fluid src="https://www.ssbwiki.com/images/thumb/d/dc/Lucina_SSBU.png/1200px-Lucina_SSBU.png" />
            </Col>
          </Row>
        </Container>

        <Jumbotron fluid>
          <Container>
            <h2>Hit the Lab</h2>
            <p>
              Help us discover more! Join the Discord.
            </p>
            <p>
              <Button variant="primary">Join Now</Button>
            </p>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default Home;