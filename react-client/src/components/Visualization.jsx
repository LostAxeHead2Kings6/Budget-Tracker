import React from 'react';
import d3 from 'd3';
import c3 from 'c3';

class Visualization extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      num: "chart" + this.props.num,
      type: 'pie'
    }
    this.transformToPie=this.transformToPie.bind(this);
    this.transformToBar=this.transformToBar.bind(this);
    this.setState=this.setState.bind(this);
    this._startChart=this._startChart.bind(this);

    this.chart = c3.generate({
      bindto: '#chart' + this.props.num,
      data: {
        columns: this.props.columns,
        type: this.state.type
      }
    });
  }

  componentDidMount() {
    this._startChart();
  }

  componentWillReceiveProps(newProps){
    this.chart.load({
      data: {
        columns: newProps
      }
    });
  }

  componentDidUpdate() {
    this._startChart();
  }

  _startChart() {
    const chart = c3.generate({
      bindto: '#chart' + this.props.num,
      data: {
        columns: this.props.columns,
        type: this.state.type
      }
    });
  }

  transformToPie() {
    const chart = c3.generate({
      bindto: '#chart' + this.props.num,
      data: {
        columns: this.props.columns,
        type: this.state.type
      }
    });
   var adjust = function() {this.setState({type:'pie'})}.bind(this);

    setTimeout(function () {
      chart.transform('pie');
    }, 500);

    setTimeout(function () {
      adjust();
    }, 1000);
  }

  transformToBar() {
    const chart = c3.generate({
      bindto: '#chart' + this.props.num,
      data: {
        columns: this.props.columns,
        type: this.state.type
      }
    });
   var adjust = function() {this.setState({type:'bar'})}.bind(this);

    setTimeout(function () {
      chart.transform('bar');
    }, 500);

    setTimeout(function () {
      adjust();
    }, 1000);
  }

  render() {
    return ( <div>
      <button onClick={()=>this.transformToPie()}>Pie Chart</button>
      <button onClick={()=>this.transformToBar()}>Bar Graph</button>
      <div id={this.state.num}>hi</div>
      </div>
    )
  }
}

export default Visualization;
