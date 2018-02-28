import React from 'react';

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputIncome: 0.00,
      userInputExpense: 0.00,
      incomeCategory: "work",
      expenseCategory: "insurance"
    }
  }

  render () {
    return (<div>
      <div>
        <h1>Income</h1>
          <input type="number" step="0.01" min="-9999999999.99" max="9999999999.99" value={this.state.userInputIncome} onChange={(e)=>this.setState({userInputIncome: e.target.value})}></input>
          <select id="income" onChange={(e)=>{this.setState({incomeCategory: e.target.value})}}>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        <button onClick={()=>this.props.submitIncome({category: this.state.incomeCategory, amount: this.state.userInputIncome})}>Submit</button>
      </div>
      <div>
        <h1>Expenses</h1>
          <input type="number" step="0.01" min="-9999999999.99" max="9999999999.99" value={this.state.userInputExpense} onChange={(e)=>this.setState({userInputExpense: e.target.value})}></input>
          <select id="expenses" onChange={(e)=>{this.setState({expenseCategory: e.target.value})}}>
            <option value="Insurance">Insurance</option>
            <option value="Auto">Auto</option>
            <option value="Fun">Fun</option>
            <option value="Rent">Rent</option>
            <option value="Food">Food</option>
          </select>
        <button onClick={()=>this.props.submitExpenses({category: this.state.expenseCategory, amount: this.state.userInputExpense})}>Submit</button>
      </div>
    </div>)
  }
}

export default InputArea;
