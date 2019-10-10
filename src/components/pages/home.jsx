import React, { Component } from 'react';
import ContentTable from '../../data/sitecontent';
import { Jumbotron, Container, Row, Col, Button, Image } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        {ContentTable["homepage"].map((content) => {
          return(
            <div>
            <Container>
                <Row>
                  <Col>
                    <h1>{content.homepage_hero_header}</h1>
                    <p>
                      {content.homepage_hero_description}
                    </p>
                  </Col>
                  <Col>
                    <Image fluid alt="Lucina, the Warrior Princess" src={require("../../images/homepage-hero-bg.png")}  />
                  </Col>
                </Row>
              </Container>

            <Container>
              <Row>
                <Col>
                  <h2>{content.homepage_info_header}</h2>
                  <p>{content.homepage_info_description}</p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h4>{content.homepage_info_card1_header}</h4>
                  <p>{content.homepahe_info_card1_description}</p>
                  <a href="{content.info_card1_link}">
                    {content.info_card1_link}
                  </a>
                </Col>

                <Col>
                  <h4>{content.homepage_info_card2_header}</h4>
                  <p>{content.homepahe_info_card2_description}</p>
                  <a href="{content.info_card2_link}">
                    {content.info_card2_link}
                  </a>
                </Col>

                <Col>
                  <h4>{content.homepage_info_card3_header}</h4>
                  <p>{content.homepahe_info_card3_description}</p>
                  <a href="{content.info_card3_link}">
                    {content.info_card3_link}
                  </a>
                </Col>
              </Row>
            </Container>

            <Jumbotron fluid className={"labbing-cta image-background"}>
              <div className={"shader"}></div>
              <Container>
                <h2>{content.homepage_closer_header}</h2>
                <p>{content.homepage_closer_description}</p>
                <Button variant="primary">{content.closer_cta_text}</Button>
              </Container>
            </Jumbotron>
          </div>
          )
        })}
      </div>
    )
  }
}

export default Home;