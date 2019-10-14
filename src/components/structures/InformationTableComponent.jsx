import React from 'react';
import { Table } from 'react-bootstrap';

export default function SpecSheet(props) {
        const data = props.Data;
        const dataInfo = 
          Object.entries(data)
            .filter(([key,val]) => !Array.isArray(val));
      
        return (
            <Table responsive bordered striped>
                {
            dataInfo.map((item, index) => (
                <tr key={`${data.id}-${item[0]}`}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                </tr>
                
            ))
                }
        </Table>

        )
            }

    