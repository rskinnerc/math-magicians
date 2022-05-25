import { useState } from 'react';
import Button from './Button';
import '../calculator.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handleClick = (buttonName) => {
    setState(calculate(state, buttonName));
  };

  const { total, operation, next } = state;

  return (
    <ul className="calculator">
      <li aria-hidden className="operations">
        {total}
        {operation}
        {next}
      </li>
      <Button handleClick={handleClick} buttonName="AC" />
      <Button handleClick={handleClick} buttonName="+/-" />
      <Button handleClick={handleClick} buttonName="%" />
      <Button handleClick={handleClick} buttonName="÷" />
      <Button handleClick={handleClick} buttonName="7" />
      <Button handleClick={handleClick} buttonName="8" />
      <Button handleClick={handleClick} buttonName="9" />
      <Button handleClick={handleClick} buttonName="x" btnClass="operator" />
      <Button handleClick={handleClick} buttonName="4" />
      <Button handleClick={handleClick} buttonName="5" />
      <Button handleClick={handleClick} buttonName="6" />
      <Button handleClick={handleClick} buttonName="-" btnClass="operator" />
      <Button handleClick={handleClick} buttonName="1" />
      <Button handleClick={handleClick} buttonName="2" />
      <Button handleClick={handleClick} buttonName="3" />
      <Button handleClick={handleClick} buttonName="+" btnClass="operator" />
      <Button handleClick={handleClick} buttonName="0" btnClass="zero" />
      <Button handleClick={handleClick} buttonName="." />
      <Button handleClick={handleClick} buttonName="=" btnClass="operator" />
    </ul>
  );
}
