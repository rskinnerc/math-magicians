import { Route, Routes } from 'react-router-dom';
import './app.css';
import Navbar from './components/Navbar';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
