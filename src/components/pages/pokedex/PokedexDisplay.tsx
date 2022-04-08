import { FC } from 'react';
import { IPageItem } from '../../../redux/reducers/pages';
import PokedexResults from './PokedexResults';

interface IProps {
  pkmList: IPageItem[],
}

const PokedexDisplay: FC<IProps> = ({ pkmList }) => {
  if (pkmList.length === 0) {
    return <p className="err-msg">No encontramos a tu Pokémon... Sowy :(</p>;
  }
  return (
    <PokedexResults pkmList={pkmList} />
  );
};

export default PokedexDisplay;
