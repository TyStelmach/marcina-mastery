import React, { Component } from 'react';
import { Container, Row, Col, Image, Alert, Button, Tabs, Tab } from 'react-bootstrap'
import SpecSheet from '../structures/InformationTableComponent';
import data from '../../data/stages.json';


class Stages extends Component {
    render() {
      return (
        <div>
            <Container>
                <Row>
                    aaa
                    <SpecSheet Data={data} />
                </Row>


            </Container>
        </div>
      )
    }
}

export default Stages;