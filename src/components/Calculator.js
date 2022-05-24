import { Component } from 'react';
import '../calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <ul className="calculator">
        <li className="operations">0</li>
        <li>AC</li>
        <li>+/-</li>
        <li>%</li>
        <li className="operator">÷</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li className="operator">x</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li className="operator">-</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li className="operator">+</li>
        <li className="zero">0</li>
        <li>.</li>
        <li className="operator">=</li>
      </ul>
    );
  }
}
