import React, { Component } from 'react';

class TableHead extends Component {
  render() {
    return (
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
    )
  }
}

export default TableHead;