import { FC } from 'react';
import { IPageItem } from '../../../redux/reducers/pages';
import './PokemonCard.scss';

interface IProps {
  pkm: IPageItem;
  formattedName: string,
}

const PokemonCard: FC<IProps> = ({ formattedName, pkm }) => {
  const {
    sprites: { front_default: frontDefault },
  } = pkm;

  const handleClick = (): number => (2 - 2);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="pkm-card"
    >
      <img src={frontDefault} alt="Pokémon card" />
      <h3>{formattedName}</h3>
    </button>
  );
};

export default PokemonCard;
