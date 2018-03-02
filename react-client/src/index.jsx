import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import InputArea from './components/InputArea.jsx';
import Visualization from './components/Visualization.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIncome: [],
      totalExpenses: [],
      idealValues: [],
    }
    this.submitIncome=this.submitIncome.bind(this);
    this.submitExpenses=this.submitExpenses.bind(this);
    this.transformIdealData=this.transformIdealData.bind(this);
    this.transformTotals=this.transformTotals.bind(this);
  }

  componentDidMount() {
    axios.get('/ideals')
    .then((results) => this.setState({idealValues: this.transformIdealData(results.data)}));

    axios.get('/income')
    .then((results) => this.setState({totalIncome: this.transformTotals(results.data)}));

    axios.get('/expenses')
    .then((results) => this.setState({totalExpenses: this.transformTotals(results.data)}));
  }

  transformIdealData(data) {
    var idealColumns= [];
    var keys = Object.keys(data[0]);
    var values = Object.values(data[0]);

    for (var i=0; i<keys.length; i++) {
      idealColumns.push([keys[i], values[i]]);
    }

    return idealColumns
  }

  transformTotals(data) {
    var totalColumns = [];

    for (var i=0; i<data.length; i++) {
      var nestedArr = [];
      nestedArr.push(data[i].category);
      nestedArr.push(data[i].amount);
      totalColumns.push(nestedArr);
    }

    return totalColumns;
  }

  submitIncome(category, amount) {
    axios.post('/income', {category: category, amount: amount})
  }

  submitExpenses(category, amount) {
    axios.post('/expenses', {category: category, amount: amount})
  }

  render () {

    return (<div>
      <h1>Budget Planner</h1>
      <h2>{JSON.stringify(this.state.idealValues)}</h2>
      <h2>{JSON.stringify(this.state.totalIncome)}</h2>
      <h2>{JSON.stringify(this.state.totalExpenses)}</h2>
      <InputArea submitIncome={this.submitIncome} submitExpenses={this.submitExpenses}/>

      <Visualization num="1" columns={this.state.idealValues} />
      <Visualization num="2" columns={this.state.idealValues} />
      <Visualization num="3" columns={this.state.idealValues} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
