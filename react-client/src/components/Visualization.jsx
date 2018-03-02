import React from 'react';
import d3 from 'd3';
import c3 from 'c3';

class Visualization extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      num: "chart" + this.props.num,
      chartType: 'bar'
    }

  }

  componentDidMount() {
    this._updateChart();

  }
  componentDidUpdate() {
    this._updateChart();
  }

  _updateChart() {
    const chart = c3.generate({
      bindto: '#chart' + this.props.num,
      data: {
        columns: this.props.columns,
        type: this.state.chartType
      }
    });
  }

  render() {
    return ( <div>
      <button onClick={()=>this.setState({chartType: 'pie'})}>Pie Chart</button>
      <button onClick={()=>this.setState({chartType: 'bar'})}>Bar Graph</button>
      <div id={this.state.num}>hi</div>
      </div>
    )
  }
}

export default Visualization;
