import { FC } from 'react';
import useModal from '../../../hooks/useModal';
import { IPageItem } from '../../../redux/reducers/pages';
import PokeModal from './PokeModal';
import './PokemonCard.scss';

interface IProps {
  pkm: IPageItem;
  formattedName: string,
}

const PokemonCard: FC<IProps> = ({ formattedName, pkm }) => {
  const {
    sprites: { front_default: frontDefault },
  } = pkm;

  const {
    modalVisibility, curtainVisibility, openModal, closeModal,
  } = useModal();

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="pkm-card"
      >
        <img src={frontDefault} alt="Pokémon card" />
        <h3>{formattedName}</h3>
      </button>
      <PokeModal
        pkm={pkm}
        formattedName={formattedName}
        modalVisibility={modalVisibility}
        curtainVisibility={curtainVisibility}
        handleClose={closeModal}
      />
    </>
  );
};

export default PokemonCard;
