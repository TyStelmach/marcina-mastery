import React, { Component } from 'react';
import DataTable from '../structures/datatable';
import ContentTable from '../../data/sitecontent';
import { Jumbotron, Container, Row, Col, Image, Button, Tabs, Tab } from 'react-bootstrap'

class Lucina extends Component {
  render() {
    return (
      <div>
        {ContentTable["lucina"].map((content) => {
          return(
            <div>
              <Container>
                <Row>
                  <Col>
                    <h1>{content.lucina_hero_header}</h1>
                    <p>
                      {content.lucina_hero_description}
                    </p>
                  </Col>
                  <Col>
                    <Image alt="Lucina, the Warrior Princess" src={require("../../images/Lucina-blob-bg.png")}  />
                  </Col>
                </Row>
              </Container>
              
              <Container>
                <Tabs defaultActiveKey="grounded_combos">
                  <Tab eventKey="grounded_combos" title="Grounded Combos">
                    <div>
                      <h2>{content.lucina_tabber_grounded_combo_header}</h2>
                      <p>{content.lucina_tabber_grounded_combo_description}</p>
                    </div>
                    <DataTable comboType="grounded_combos" />
                  </Tab>
                  <Tab eventKey="aerial_combos" title="Aerial Combos">
                    <div>
                      <h2>{content.lucina_tabber_aerial_combo_header}</h2>
                      <p>{content.lucina_tabber_aerial_combo_description}</p>
                    </div>
                    <DataTable comboType="aerial_combos" />
                  </Tab>
                  <Tab eventKey="throw_combos" title="Throw Combos" >
                    <div>
                      <h2>{content.lucina_tabber_throw_combo_header}</h2>
                      <p>{content.lucina_tabber_throw_combo_description}</p>
                    </div>
                    <DataTable comboType="throw_combos" />
                  </Tab>
                  <Tab eventKey="dancingblade_combos" title="Dancing Blade Combos" disabled>
                    <div>
                      <h2>{content.lucina_tabber_dancingblade_combo_header}</h2>
                      <p>{content.lucina_tabber_dancingblade_combo_description}</p>
                    </div>
                    <DataTable comboType="throw_combos" />
                  </Tab>
                </Tabs>
              </Container>
            </div>
          )})
        }
      </div>
    )
  }
}

export default Lucina;