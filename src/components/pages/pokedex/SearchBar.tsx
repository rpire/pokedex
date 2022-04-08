import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImSearch } from 'react-icons/im';
import usePage from '../../../hooks/usePage';
import currentPage, { pkmSlice } from '../../../logic/pages';
import { RootState } from '../../../redux/configureStore';
import { clearPage, fetchPage } from '../../../redux/reducers/pages';
import './SearchBar.scss';

interface IProps {
  search: string,
  changeSearch: (event: ChangeEvent<HTMLInputElement>) => void,
}

const SearchBar: FC<IProps> = ({ search, changeSearch }) => {
  const pokemon = useSelector((state: RootState) => state.pokemon.list);
  const { pageNum } = usePage(currentPage());

  const dispatch = useDispatch();

  const handleInput = (): void => {
    const filteredPkm = pokemon.filter((pkm, index) => (
      (pkm.name === search.toLocaleLowerCase() || index === (Number(search) - 1))
    ));
    if (filteredPkm.length === 0) {
      if (search === '') {
        dispatch(fetchPage(pkmSlice(pokemon, pageNum)));
      } else {
        dispatch(clearPage());
      }
    } else {
      dispatch(fetchPage(filteredPkm));
    }
  };

  return (
    <div className="search-container">
      <label htmlFor="search">
        <span className="search-label">Búsqueda:</span>
        <input
          type="text"
          id="search"
          name="search"
          value={search}
          onChange={changeSearch}
          placeholder="Nombre o ID"
        />
      </label>
      <button
        type="button"
        onClick={() => handleInput()}
        className="search-btn"
      >
        <ImSearch className="search-icon" />
      </button>
    </div>
  );
};
export default SearchBar;
