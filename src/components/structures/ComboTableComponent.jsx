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
                    props.CharacterData[props.ComboType].map((combo, i) => (
                        <tbody key={i}>
                            <tr>
                                <td rowSpan="3">{combo.name}</td>
                                <td>Early Percents</td>
                                <td>{combo.low_pct_true ? 'true' : 'false'}</td>
                                <td>{combo.low_pct_damage_range.join(' - ')}%</td>
                                <td rowSpan="3">{combo.additional_info}</td>
                            </tr>
                            <tr>
                                <td>Mid Percents</td>
                                <td>{combo.med_pct_true ? 'true' : 'false'}</td>
                                <td>{combo.med_pct_damage_range.join(' - ')}%</td>
                            </tr>
                            <tr>
                                <td>High Percents</td>
                                <td>{combo.high_pct_true ? 'true' : 'false'}</td>
                                <td>{combo.high_pct_damage_range.join(' - ')}%</td>
                            </tr>
                        </tbody>
                    ))
                }
        </Table>
    )
}