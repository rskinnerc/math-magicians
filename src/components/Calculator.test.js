import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from './Calculator';

describe('Test user actions on the calculator', () => {
    test('test adding two numbers', () => {
        render(<Calculator />);
        fireEvent.click(screen.queryByText('5'));
        fireEvent.click(screen.queryByText('+'));
        fireEvent.click(screen.queryByText('5'));
        fireEvent.click(screen.queryByText('='));
        expect(screen.queryByText('10')).not.toBeNull();
      });

      test('test multiplying two numbers', () => {
        render(<Calculator />);
        fireEvent.click(screen.queryByText('5'));
        fireEvent.click(screen.queryByText('x'));
        fireEvent.click(screen.queryByText('5'));
        fireEvent.click(screen.queryByText('='));
        expect(screen.queryByText('25')).not.toBeNull();
      });

      test('test Subtracting two numbers with fraction', () => {
        render(<Calculator />);
        fireEvent.click(screen.queryByText('6'));
        fireEvent.click(screen.queryByText('.'));
        fireEvent.click(screen.queryByText('5'));
        fireEvent.click(screen.queryByText('-'));
        fireEvent.click(screen.queryByText('5'));
        fireEvent.click(screen.queryByText('='));
        expect(screen.queryByText('1.5')).not.toBeNull();
      });
});

