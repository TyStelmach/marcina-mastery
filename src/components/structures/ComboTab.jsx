import React from 'react';
import { Tab  } from 'react-bootstrap';
import ComboTable from '../structures/ComboTableComponent';

const ComboTab = ({ data, type }) => {
  return (
    <Tab eventKey={type} title={type} >
      <div>
        <h1></h1>
      </div>
      <ComboTable data={data} />
    </Tab >
  )
}

export default ComboTab;