import React from 'react';
import { Table, Row, Col, Image, Button, Tabs, Tab } from 'react-bootstrap'


export default function ComboTable(props) {


    return (
        <Table responsive bordered>
            <thead>
                <tr>
                    <th width={"25%"}>Name</th>
                    <th width={"15%"}>Life Term</th>
                    <th width={"10%"}>Truality</th>
                    <th width={"15%"}>Damage (Aprx)</th>
                    <th>Additional Info</th>
                </tr>
            </thead>

            {
                props.data.map(combo => (
                    <tbody>
                        {combo.damage_ranges.map((damage, j) => (
                            <tr col>
                                {j === 0 && <td rowSpan="3">{combo.name}</td> }
                                <td> {damage.level}</td>
                                <td>{damage.true_combo ? 'true' : 'false'}</td>
                                <td>{damage.range.join(' - ')}%</td>
                                {j === 0 && <td rowSpan="3">{combo.additional_info}</td> }
                            </tr>
                        ))
                        }
                        
                    </tbody>
                ))
            }
        </Table>
    )
}