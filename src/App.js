import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberButton from './NumberButton';
import OperationButton from './OperationButton';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftNumber: '',
      operator: '',
      rightNumber: '',
      result: ''
    };
    this.addNumber = this.addNumber.bind(this);
    this.addOperator = this.addOperator.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Calculator</h2>
        </div>
        <Display leftNumber={this.state.leftNumber} operator={this.state.operator} rightNumber={this.state.rightNumber} result={this.state.result}/>
        <OperationButton addOperator={this.addOperator} />
        <NumberButton addNumber={this.addNumber} />
      </div>
    );
  }
  addNumber(event) {
    const value = event.target.innerHTML;
    if (this.state.operator.length === 0) {
      this.setState({
        leftNumber: this.state.leftNumber + value
      });
    } else {
      this.setState({
        rightNumber: this.state.rightNumber + value
      });
    }
  }
  addOperator(event) {
    const op = event.target.innerHTML;
    if (op === '=') {
      let res = results(this.state.operator, this.state.leftNumber, this.state.rightNumber);
      this.setState({
        leftNumber: res, 
        rightNumber: '',
        operator: ''
      });
    } else {
      this.setState({
        operator: op
      });
    }
  }
}

function results(operator, leftNumber, rightNumber) {
  if (operator === '+') return +leftNumber + +rightNumber;
  if (operator === '-') return +leftNumber - +rightNumber;
  if (operator === 'x') return +leftNumber * +rightNumber;
  if (operator === '/') return +leftNumber / +rightNumber;
}

export default App;
