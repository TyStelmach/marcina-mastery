import React, { Component } from 'react';
import CharacterData from '../../data/marcina.json';
import {Table, thead, tr, th, td } from 'react-bootstrap';

class DataTable extends Component {
  render() {
    return (
    <div>
        <Table responsive>
            <thead>
                <tr>
                    <th>True</th>
                    <th>Name</th>
                    <th>Inputs</th>
                    <th>Damage (Aprx)</th>
                    <th>Hit Count</th>
                    <th>Life Term</th>
                    <th>Effective for</th>
                </tr>
            </thead>
            <tbody>
                {CharacterData.map((character, index) => {
                   return (
                        <tr>
                            <td>
                                {character.name}
                            </td>
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

