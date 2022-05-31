import { Link, useMatch } from 'react-router-dom';

const Navbar = () => {
  const activeClass = (path) => (useMatch(path) ? 'activeLink ' : 'text-rose-500 ');

  return (
    <nav className="md:flex justify-between items-center md:mx-5 lg:w-4/5 lg:mx-auto">
      <h1 className="text-rose-500 text-3xl text-center py-10 font-bold" style={{ textShadow: '1px 1px 1px rgba(206,206,206,0.7)' }}>Math Magicians</h1>
      <ul className="flex justify-around md:gap-x-5">
        <li><Link to="/" className={`${activeClass('/')} hover:text-rose-400 font-semibold p-2`}>Home</Link></li>
        <li><Link to="/calculator" className={`${activeClass('/calculator')} hover:text-rose-400 font-semibold p-2`}>Calculator</Link></li>
        <li><Link to="/quote" className={`${activeClass('/quote')} hover:text-rose-400 font-semibold p-2`}>Quote</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
