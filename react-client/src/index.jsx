import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import InputArea from './components/InputArea.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIncome: 0,
      totalExpenses: 0
    }
    this.submitIncome=this.submitIncome.bind(this);
    this.submitExpenses=this.submitExpenses.bind(this);
  }

  componentDidMount() {
  }

  submitIncome(values) {
    console.log(values);
    axios.post('/income', {category: values.category, amount: values.amount}).then(()=>console.log('axios request made'));
  }

  submitExpenses(values) {
    console.log(values);
    axios.post('/expenses').then(()=>console.log('axios request made'));
  }

  render () {
    return (<div>
      <h1>Input Area</h1>
      <InputArea submitIncome={this.submitIncome} submitExpenses={this.submitExpenses}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
