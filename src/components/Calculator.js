import { Component } from 'react';
import Button from './Button';
import '../calculator.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { total: null, next: null, operation: null };
  }

  componentDidMount() {
    this.setState({ total: 0 });
  }

  componentDidUpdate() {
    const { total, next } = this.state;
    if (total === null && next === null) {
      this.setState({ total: 0 });
    }
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
        <Button handleClick={this.handleClick} buttonName="AC" />
        <Button handleClick={this.handleClick} buttonName="+/-" />
        <Button handleClick={this.handleClick} buttonName="%" />
        <Button handleClick={this.handleClick} buttonName="÷" />
        <Button handleClick={this.handleClick} buttonName="7" />
        <Button handleClick={this.handleClick} buttonName="8" />
        <Button handleClick={this.handleClick} buttonName="9" />
        <Button handleClick={this.handleClick} buttonName="x" btnClass="operator" />
        <Button handleClick={this.handleClick} buttonName="4" />
        <Button handleClick={this.handleClick} buttonName="5" />
        <Button handleClick={this.handleClick} buttonName="6" />
        <Button handleClick={this.handleClick} buttonName="-" btnClass="operator" />
        <Button handleClick={this.handleClick} buttonName="1" />
        <Button handleClick={this.handleClick} buttonName="2" />
        <Button handleClick={this.handleClick} buttonName="3" />
        <Button handleClick={this.handleClick} buttonName="+" btnClass="operator" />
        <Button handleClick={this.handleClick} buttonName="0" btnClass="zero" />
        <Button handleClick={this.handleClick} buttonName="." />
        <Button handleClick={this.handleClick} buttonName="=" btnClass="operator" />
      </ul>
    );
  }
}
