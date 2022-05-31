import CalculatorWidget from '../components/Calculator';

const Calculator = () => (
  <div className="p-5 md:flex lg:w-4/5 lg:mx-auto lg:p-0 lg:mt-24">
    <h1 className="text-white text-2xl font-semibold my-5 md:basis-1/2">Let&apos;s do some math!</h1>
    <section className="text-white font-bold md:basis-1/2 md:grow-0">
      <CalculatorWidget />
    </section>
  </div>
);

export default Calculator;
