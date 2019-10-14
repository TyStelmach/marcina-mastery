import React, { Component } from 'react';
import ContentTable from '../../data/sitecontent';
import { Container, Row, Col, Image, Alert, Button, Tabs, Tab } from 'react-bootstrap'

import ComboTable from '../structures/ComboTableComponent';
import SpecSheet from '../structures/InformationTableComponent';
import data from '../../data/characters';


const CharacterPage = (props) => {
  const character = data.find(item => item.name.toLowerCase() === props.match.params.character);
  const comboTypes = [...new Set(character.combos.map(comboType => comboType.type))]
  
  return (
    <div>
      {ContentTable[props.match.params.character].map((content, i) => {
        return (
          <div>
            <Container>
              <Row>
                <h1 key>{content[`${character.name}_hero_header`]}</h1>
                <p>
                  {content[`${character.name}_hero_description`]}
                </p>
              </Row>

              <Row>
                <Col>
                  <SpecSheet Data={character} />
                </Col>
                <Col>
                  {/* <Image alt="${character.name}, the Warrior Princess" src={require("../../images/${character.name}-blob-bg.png")} /> */}
                </Col>
              </Row>
              <Row>
                <Alert variant="secondary">
                  <Alert.Heading>{content[`${character.name}_callout_header`]}</Alert.Heading>
                  <hr />
                  <p>{content[`${character.name}_callout_description`]}</p>
                  <p>{content[`${character.name}_callout_cta`]}</p>
                </Alert>
              </Row>

              <Row>
                <Tabs defaultActiveKey="grounded">
                  {
                    comboTypes.map(type => {
                      const comboArr = [...character.combos.filter(combo => combo.type === type)];

                      return (
                        <Tab eventKey={type} title={type} >
                          <h2>{content[`${character.name}_tabber_${type}_combo_header`]}</h2>
                          <p>{content[`${character.name}_tabber_${type}_combo_description`]}</p>
                          <ComboTable data={comboArr} />
                        </Tab >
                      )
                    })
                  }
                </Tabs>
              </Row>
            </Container>
          </div>
        )



      })}
</div>



  )

}

export default CharacterPage;
