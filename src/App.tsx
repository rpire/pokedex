import { FC, useEffect } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/pages/home/Home';
import Pokedex from './components/pages/pokedex/Pokedex';
import ErrorPage from './components/pages/error/ErrorPage';
import Navbar from './components/Navbar';
import { fetchPokemon } from './redux/reducers/pokemon';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
