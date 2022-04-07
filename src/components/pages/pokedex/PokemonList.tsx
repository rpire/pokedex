import { FC } from 'react';
import { IPageItem } from '../../../redux/reducers/pages';
import PokemonCard from './PokemonCard';
import './PokemonList.scss';

interface IProps {
  pkmList: IPageItem[],
}

const PokemonList: FC<IProps> = ({ pkmList }) => (
  <section>
    {pkmList.map((pkm) => {
      const formattedName = pkm.name.replace(/^\w/, (c) => c.toUpperCase());

      return (
        <PokemonCard
          key={pkm.id}
          pkm={pkm}
          formattedName={formattedName}
        />
      );
    })}
  </section>
);

export default PokemonList;
