import React from 'react';
import d3 from 'd3';
import c3 from 'c3';

class Visualization extends React.Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    const chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: this.props.columns,
        type: 'pie'
      }
    });
  }
  render() {
    return <div id="chart">hi</div>;
  }
}

export default Visualization;
