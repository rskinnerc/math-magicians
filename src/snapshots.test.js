import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Button from './components/Button';
import CalculatorPage from './pages/Calculator';
import HomePage from './pages/Home';
import QuotePage from './pages/Quote';
import { getAnyQuote } from './logic/quotes';

jest.mock('./logic/quotes');

describe('Test snapshots', () => {
  test('check if App component renders correctly', () => {
    const renderedComponent = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  test('check if Calculator component renders correctly', () => {
    const renderedComponent = render(
      <Calculator />,
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  test('check if Navbar component renders correctly', () => {
    const renderedComponent = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  test('check if Button component renders correctly', () => {
    const renderedComponent = render(
      <Button />,
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  test('check if Calculator page renders correctly', () => {
    const renderedComponent = render(
      <CalculatorPage />,
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  test('check if Home page renders correctly', () => {
    const renderedComponent = render(
      <HomePage />,
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  test('check if Quote page renders correctly', () => {
    getAnyQuote.mockReturnValue({
      quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
      author: 'Albert Einstein, German theoretical physicist',
    });
    const renderedComponent = render(
      <QuotePage />,
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
