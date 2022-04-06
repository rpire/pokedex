import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar: FC = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/pokedex">Pokedex</NavLink>
  </nav>
);

export default Navbar;
