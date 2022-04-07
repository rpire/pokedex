import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { MdHome, MdCatchingPokemon } from 'react-icons/md';

const Navbar: FC = () => (
  <nav>
    <NavLink to="/">
      <MdHome />
      <span>Inicio</span>
    </NavLink>
    <NavLink to="/pokedex">
      <span>Pokedex</span>
      <MdCatchingPokemon />
    </NavLink>
  </nav>
);

export default Navbar;
