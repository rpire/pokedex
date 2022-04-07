import { FC } from 'react';
import { SiPokemon } from 'react-icons/si';
import './Footer.scss';

const Footer: FC = () => (
  <footer>
    <SiPokemon className="footer-icon" />
    <span className="footer-year">2022</span>
  </footer>
);

export default Footer;
