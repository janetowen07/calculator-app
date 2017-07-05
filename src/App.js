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
      leftNumber:'',
      operator:'',
      rightNumber:''
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
        <Display leftNumber={this.state.leftNumber} />
        <OperationButton addOperator={this.addOperator}/>
        <NumberButton addNumber={this.addNumber}/>
      </div>
    );
  }
  addNumber (event) {
    console.log('click!');
    console.dir(event.target);
    const value = event.target.innerHTML;
    this.setState({
      leftNumber: this.state.leftNumber + value
    })
  }
  addOperator (event) {
    console.log('click!');
    console.dir(event.target);
    const op = event.target.innerHTML;
    this.setState({
      operator: this.state.operator + op
    });
    
  }
}

export default App;
