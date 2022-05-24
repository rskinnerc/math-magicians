import { Component } from 'react';
import '../calculator.css';
import calculate from '../logic/calculate';
// import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { total: 0, next: null, operation: null };
  }

  handleClick(buttonName) {
    this.setState((state) => calculate(state, buttonName));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <ul className="calculator">
        <li aria-hidden className="operations">
          {total}
          {operation}
          {next}
        </li>
        <li aria-hidden onClick={() => this.handleClick('AC')}>AC</li>
        <li aria-hidden onClick={() => this.handleClick('+/-')}>+/-</li>
        <li aria-hidden onClick={() => this.handleClick('%')}>%</li>
        <li aria-hidden onClick={() => this.handleClick('÷')} className="operator">÷</li>
        <li aria-hidden onClick={() => this.handleClick('7')}>7</li>
        <li aria-hidden onClick={() => this.handleClick('8')}>8</li>
        <li aria-hidden onClick={() => this.handleClick('9')}>9</li>
        <li aria-hidden onClick={() => this.handleClick('x')} className="operator">x</li>
        <li aria-hidden onClick={() => this.handleClick('4')}>4</li>
        <li aria-hidden onClick={() => this.handleClick('5')}>5</li>
        <li aria-hidden onClick={() => this.handleClick('6')}>6</li>
        <li aria-hidden onClick={() => this.handleClick('-')} className="operator">-</li>
        <li aria-hidden onClick={() => this.handleClick('1')}>1</li>
        <li aria-hidden onClick={() => this.handleClick('2')}>2</li>
        <li aria-hidden onClick={() => this.handleClick('3')}>3</li>
        <li aria-hidden onClick={() => this.handleClick('+')} className="operator">+</li>
        <li aria-hidden onClick={() => this.handleClick('0')} className="zero">0</li>
        <li aria-hidden onClick={() => this.handleClick('.')}>.</li>
        <li aria-hidden onClick={() => this.handleClick('=')} className="operator">=</li>
      </ul>
    );
  }
}
