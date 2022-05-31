import CalculatorWidget from '../components/Calculator';

const Calculator = () => (
  <div className="p-5">
    <h1 className="text-white text-2xl font-semibold my-5">Let&apos;s do some math!</h1>
    <section className="text-white font-bold">
      <CalculatorWidget />
    </section>
  </div>
);

export default Calculator;
