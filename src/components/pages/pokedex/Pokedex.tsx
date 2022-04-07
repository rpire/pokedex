import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePages from '../../../hooks/usePages';
import { RootState } from '../../../redux/configureStore';
import { fetchPage } from '../../../redux/reducers/pages';
import { Pokemon } from '../../../redux/reducers/pokemon';
import PokemonList from './PokemonList';

const Pokedex: FC = () => {
  const currentPage = localStorage.getItem('currentPage');
  const initPageNum = currentPage ? parseInt(currentPage, 10) : 1;

  const {
    pageNum, increasePage, decreasePage,
  } = usePages(initPageNum);

  const pkmSlice = (arr: Pokemon[], num: number): Pokemon[] => (
    arr.slice((num - 1) * 12, (num - 1) * 12 + 12)
  );

  const magicNum = pageNum * 12 - 11;

  const dispatch = useDispatch();

  const { pokemon, page } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (page.list[0] === undefined) {
      dispatch(fetchPage(pkmSlice(pokemon.list, pageNum)));
    } else if (page.list[0].id !== magicNum) {
      dispatch(fetchPage(pkmSlice(pokemon.list, pageNum)));
    }
  }, [pokemon.loading, pageNum]);

  useEffect(() => {
    localStorage.setItem('currentPage', pageNum.toString());
  }, [pageNum]);

  if (pokemon.loading || page.loading) {
    return <p>Cargando Pokémon...</p>;
  }

  if (pokemon.error || page.error) {
    return <p>Up! Trata refrescando la página.</p>;
  }

  return (
    <>
      <h1>Pokémon</h1>
      <p>Todos tus Pokémon favoritos en un solo lugar. Atrápalos ya!</p>
      <PokemonList pkmList={page.list} />
      { (pageNum > 1) && (
        <button type="button" onClick={decreasePage}>
          Anterior
        </button>
      )}

      <span>{pageNum}</span>

      { (pageNum * 12 < pokemon.list.length) && (
        <button type="button" onClick={increasePage}>
          Siguiente
        </button>
      )}
    </>
  );
};

export default Pokedex;
