import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
jest.mock('./logic/quotes');
import { getAnyQuote } from './logic/quotes'

describe("The App component", () => {
  test('that it renders the navbar component', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(screen.queryByText('Math Magicians')).not.toBeNull()
    expect(screen.queryByText('Home')).not.toBeNull()
    expect(screen.queryByText('Calculator')).not.toBeNull()
    expect(screen.queryByText('Quote')).not.toBeNull()
  });

  test("It renders the Home page as index", () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(screen.queryByText("Welcome to our page!")).not.toBeNull();
  })

  test("When a user clicks in the Calculator link, the Calculator page should appear", () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    fireEvent.click(screen.queryByText('Calculator'))

    expect(screen.queryByText("Let's do some math!")).not.toBeNull()
  })


  test("When a user clicks in the Quote link, the Quote page should appear", () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    getAnyQuote.mockReturnValue({
      quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
      author: 'Albert Einstein, German theoretical physicist',
    });

    fireEvent.click(screen.queryByText('Quote'))

    expect(screen.queryByText("Pure mathematics is, in its way, the poetry of logical ideas.", { exact: false })).not.toBeNull();
  })
})

