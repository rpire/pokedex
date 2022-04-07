import { Dispatch } from 'redux';

const LOADING_POKEMON = 'App/pokemon/LOADING_POKEMON';
const LOAD_POKEMON_SUCCESS = 'App/pokemon/LOAD_POKEMON_SUCCESS';
const LOAD_POKEMON_FAIL = 'App/pokemon/LOAD_POKEMON_FAIL';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

export type Pokemon = {
  name: 'string',
  url: 'string',
}

export interface IState {
  list: Pokemon[],
  loading: boolean,
  error: boolean,
}

interface IAction {
  type: string,
}

interface IActionSuccess extends IAction {
  payload: Pokemon[],
}

type DispatchAction = IAction | IActionSuccess

type Response = {
  results: Pokemon[],
}

const initialState: IState = {
  list: [],
  loading: true,
  error: false,
};

export const loadingPokemon = (): IAction => ({
  type: LOADING_POKEMON,
});

export const loadPokemonSuccess = (payload: Pokemon[]): IActionSuccess => ({
  type: LOAD_POKEMON_SUCCESS,
  payload,
});

export const loadPokemonFail = (): IAction => ({
  type: LOAD_POKEMON_FAIL,
});

export const fetchPokemon = () => async (dispatch: Dispatch<DispatchAction>) => {
  dispatch(loadingPokemon());
  await fetch(URL)
    .then((response) => response.json())
    .then((json: Response) => dispatch(loadPokemonSuccess(json.results)))
    .catch(() => dispatch(loadPokemonFail()));
};

const pokemonReducer = (state: IState = initialState, action: IActionSuccess): IState => {
  switch (action.type) {
    case LOADING_POKEMON:
      return { ...state, loading: true };
    case LOAD_POKEMON_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    case LOAD_POKEMON_FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default pokemonReducer;
