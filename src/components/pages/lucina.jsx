import React, { Component } from 'react';
import DataTable from '../structures/datatable';
import { Container, Tabs, Tab } from 'react-bootstrap'

class Lucina extends Component {
  render() {
    return (
      <Container>
        <Tabs defaultActiveKey="grounded_combos" id="uncontrolled-tab-example">
          <Tab eventKey="grounded_combos" title="Grounded Combos">
            <DataTable comboType="grounded_combos" />
          </Tab>
          <Tab eventKey="aerial_combos" title="Aerial Combos">
            <DataTable comboType="aerial_combos" />
          </Tab>
          <Tab eventKey="throw_combos" title="Throw Combos" >
            <DataTable comboType="throw_combos" />
          </Tab>
          <Tab eventKey="dancingblade_combos" title="Dancing Blade Combos" disabled>
            <DataTable comboType="throw_combos" />
          </Tab>
        </Tabs>
        
      </Container>
    )
  }
}

export default Lucina;