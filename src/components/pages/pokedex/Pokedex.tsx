import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePage from '../../../hooks/usePage';
import currentPage, { pkmSlice } from '../../../logic/pages';
import { RootState } from '../../../redux/configureStore';
import { fetchPage } from '../../../redux/reducers/pages';
import PagesBtnContainer from './PagesBtnContainer';
import PokedexHeader from './PokedexHeader';
import PokemonList from './PokemonList';

const Pokedex: FC = () => {
  const { pokemon, page } = useSelector((state: RootState) => state);

  const {
    pageNum, increasePage, decreasePage,
  } = usePage(currentPage());

  const magicNum = pageNum * 12 - 11;

  const dispatch = useDispatch();

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
    return <p>Ups! Trata refrescando la página.</p>;
  }

  return (
    <>
      <PokedexHeader />
      <PokemonList pkmList={page.list} />
      <PagesBtnContainer
        pageNum={pageNum}
        increasePage={increasePage}
        decreasePage={decreasePage}
        pokemon={pokemon.list}
      />
    </>
  );
};

export default Pokedex;
