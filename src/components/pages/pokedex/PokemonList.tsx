import { FC } from 'react';
import useSearch from '../../../hooks/useSearch';
import { IPageItem } from '../../../redux/reducers/pages';
import PokedexDisplay from './PokedexDisplay';
import './PokemonList.scss';
import SearchBar from './SearchBar';

interface IProps {
  pkmList: IPageItem[],
}

const PokemonList: FC<IProps> = ({ pkmList }) => {
  pkmList.sort((a, b) => a.id - b.id);

  const { search, changeSearch } = useSearch('');

  return (
    <>
      <SearchBar
        search={search}
        changeSearch={changeSearch}
      />
      <PokedexDisplay pkmList={pkmList} />
    </>
  );
};

export default PokemonList;
