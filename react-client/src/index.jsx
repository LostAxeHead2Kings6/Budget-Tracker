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
      idealBudget: [],
      actualBudget: []
    }
    this.submitIncome=this.submitIncome.bind(this);
    this.submitExpenses=this.submitExpenses.bind(this);
    this.transformIdealData=this.transformIdealData.bind(this);
    this.transformTotals=this.transformTotals.bind(this);
  }

  componentDidMount() {
    this.refreshData();
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

  transformActualData(data) {
    var actualColumns = [];

    return actualColumns;
  }

  refreshData() {
    axios.get('/ideals')
    .then((results) => this.setState({idealBudget: this.transformIdealData(results.data)}));
    axios.get('/income')
    .then((results) => this.setState({totalIncome: this.transformTotals(results.data)}));
    axios.get('/expenses')
    .then((results) => this.setState({totalExpenses: this.transformTotals(results.data)}));

    const adjust = function(results) {this.setState({actualBudget: this.transformIdealData(results)})}.bind(this);

    setTimeout(function() {
      console.log("TIMEOUT");
      axios.get('/actuals')
      .then((results) => adjust(results.data));
    }, 0);
  }

  submitIncome(category, amount) {
    axios.post('/income', {category: category, amount: amount})
    .then(() => this.refreshData());
  }

  submitExpenses(category, amount) {
    axios.post('/expenses', {category: category, amount: amount})
    .then(() => this.refreshData());
  }

  render () {

    return (<div>
      <h1>Budget Planner</h1>
      <InputArea submitIncome={this.submitIncome} submitExpenses={this.submitExpenses}/>
      <h2>Monthly Income</h2>
      <Visualization num="2" columns={this.state.totalIncome} />
      <h2>Monthly Expenses</h2>
      <Visualization num="3" columns={this.state.totalExpenses} />
      <h2>Budget Goals</h2>
      <Visualization num="1" columns={this.state.idealBudget} />
      <h2>Budget Actuality</h2>
      <Visualization num="4" columns={this.state.actualBudget} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
