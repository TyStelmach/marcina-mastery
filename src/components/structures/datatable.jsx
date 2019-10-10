import React, { Component } from 'react';
import TableHead from './tablehead';
import LucinaData from '../../data/lucina.json';
import {Table, thead, tr, th, td } from 'react-bootstrap';

class DataTable extends Component {
  render() {
    return (
    <div>
        <Table responsive striped bordered hover>
            <TableHead />
            <tbody>
                {LucinaData[this.props.comboType].map((combo) => {
                    return (
                        <tr>
                            <td>{combo.truality ? 'true': 'false'}</td>
                            <td>{combo.name}</td>
                            <td>{combo.inputs}</td>
                            <td>{combo.approx_dmg}%</td>
                            <td>{combo.hitcount}</td>
                            <td>{combo.term}</td>
                            <td>{combo.true_on.join(', ')}</td>
                        </tr>
                        
                    )
                })}
            </tbody>
        </Table>
      
    </div>
    )
  }
}

export default DataTable;

