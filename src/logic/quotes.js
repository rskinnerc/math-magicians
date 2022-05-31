const quotes = [
  {
    quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
    author: 'Albert Einstein, German theoretical physicist',
  },
  {
    quote: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
    author: 'Shakuntala Devi, Indian writer and mental calculator',
  },
  {
    quote: 'Mathematics is the most beautiful and most powerful creation of the human spirit.',
    author: 'Stefan Banach, Polish mathematician',
  },
  {
    quote: 'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics.',
    author: 'Katherine Johnson, African-American mathematician',
  },
  {
    quote: 'Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.',
    author: 'Richard Courant, German-American mathematician',
  },
  {
    quote: 'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.',
    author: 'Albert Einstein',
  },
  {
    quote: 'What is mathematics? It is only a systematic effort of solving puzzles posed by nature.',
    author: 'Shakuntala Devi',
  },
  {
    quote: 'Mathematics is the music of reason.',
    author: 'James Joseph Sylvester, English mathematician',
  },
  {
    quote: 'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.',
    author: 'David Hilbert, German mathematician',
  },
  {
    quote: 'There should be no such thing as boring mathematics.',
    author: 'Edsger W. Dijkstra, Dutch systems scientist',
  },
  {
    quote: '‘Obvious’ is the most dangerous word in mathematics.',
    author: 'Eric Temple Bell, Scottish mathematician',
  },
  {
    quote: 'Mathematics allows for no hypocrisy and no vagueness.',
    author: 'Stendhal (pen name of Marie-Henri Beyle), French writer',
  },
  {
    quote: 'I’ve always enjoyed mathematics. It is the most precise and concise way of expressing an idea.',
    author: 'N.R. Narayana Murthy, Indian IT industrialist',
  },
  {
    quote: 'It is impossible to be a mathematician without being a poet in soul.',
    author: 'Sofia Kovalevskaya, Russian mathematician',
  },
  {
    quote: 'A mathematician who is not also something of a poet will never be a complete mathematician.',
    author: 'Karl Weierstrass, German mathematician',
  },
];

const getAnyQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

export { getAnyQuote, quotes };
