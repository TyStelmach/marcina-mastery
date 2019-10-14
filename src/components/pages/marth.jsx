import React, { Component } from 'react';
import ContentTable from '../../data/sitecontent';
import { Container, Row, Col, Image, Alert, Button, Tabs, Tab } from 'react-bootstrap'

import ComboTable from '../structures/ComboTableComponent';
import SpecSheet from '../structures/InformationTableComponent';
import data from '../../data/marth.json';

class Marth extends Component {
  
  render() {
    const comboTypes = [...new Set(data.combos.map(comboType => comboType.type))]
    console.log(comboTypes)
    return (
      <div>
         {ContentTable["marth"].map((content, i) => {
          return(
            <div>
              <Container>
                <Row>
                    <h1 key>{content.marth_hero_header}</h1>
                    <p>
                      {content.marth_hero_description}
                    </p>
                </Row>
                
                <Row>
                  <Col>
                    <SpecSheet Data={data} />
                  </Col>
                  <Col>
                    <Image alt="marth, the Warrior Princess" src={require("../../images/Marth-blob-bg.png")}  />
                  </Col>
                </Row>
                <Row>
                  <Alert variant="secondary">
                    <Alert.Heading>{content.marth_callout_header}</Alert.Heading>
                    <hr />
                    <p>{content.marth_callout_description}</p>
                    <p>{content.marth_callout_cta}</p>                    
                  </Alert>
                </Row>

                <Row>
                  <Tabs defaultActiveKey="grounded">
                    {
                      comboTypes.map(type => {
                        const comboArr = [...data.combos.filter(combo => combo.type === type)];

                        return (
                          <Tab eventKey={type} title={type} >
                            <h2>{content[`marth_tabber_${type}_combo_header`]}</h2>
                            <p>{content[`marth_tabber_${type}_combo_description`]}</p>
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
         })
        }
      </div>
    )
  }
}

export default Marth;


                    {/* <Tab eventKey="aerial_combos" title="Aerial Combos">
                      <div>
                        <h2>{content.marth_tabber_aerial_combo_header}</h2>
                        <p>{content.marth_tabber_aerial_combo_description}</p>
                      </div>
                      <ComboTable CharacterData={data} ComboType={"aerial_combos"} />
                    </Tab>
                    <Tab eventKey="throw_combos" title="Throw Combos" >
                      <div>
                        <h2>{content.marth_tabber_throw_combo_header}</h2>
                        <p>{content.marth_tabber_throw_combo_description}</p>
                      </div>
                      <ComboTable CharacterData={data} ComboType={"throw_combos"} />
                    </Tab>
                    <Tab eventKey="dancingblade_combos" title="Dancing Blade Combos" disabled>
                      <div>
                        <h2>{content.marth_tabber_dancingblade_combo_header}</h2>
                        <p>{content.marth_tabber_dancingblade_combo_description}</p>
                      </div>
                      <ComboTable CharacterData={data} ComboType={"dancingblade_combos"} />
                    </Tab> */}