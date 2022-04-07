import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/configureStore';
import { fetchPage } from '../../../redux/reducers/pages';
import PokemonList from './PokemonList';

const Pokedex: FC = () => {
  const { pokemon, page } = useSelector((state: RootState) => state);

  const [pageNum, setPageNum] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemon.loading) {
      dispatch(fetchPage(pokemon.list.slice((pageNum - 1) * 12, (pageNum - 1) * 12 + 12)));
    }
  }, [pokemon, pageNum]);

  const increasePage = ():void => {
    setPageNum(pageNum + 1);
    localStorage.setItem('currentPage', pageNum.toString());
  };

  const decreasePage = (): void => {
    setPageNum(pageNum - 1);
    localStorage.setItem('currentPage', pageNum.toString());
  };

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
