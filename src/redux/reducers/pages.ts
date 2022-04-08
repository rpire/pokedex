import { Dispatch } from 'react';
import { Pokemon } from './pokemon';

const LOADING_PAGE = 'App/pages/LOADING_PAGE';
const CLEAR_PAGE = 'App/pages/CLEAR_PAGE';
const LOADED_PAGE = 'App/pages/LOADED_PAGE';
const LOAD_PAGE_ITEM = 'App/pages/LOAD_PAGE_ITEM';
const LOAD_PAGE_FAIL = 'App/pages/LOAD_PAGE_FAIL';

export interface IPkmTypes {
  slot: number,
  type: { name: string },
}

export interface IPageItem {
  id: number,
  name: string,
  sprites: {
    'front_default': string,
    'front_shiny': string,
  }
  types: IPkmTypes[],
}

export interface IState {
  list: IPageItem[],
  loading: boolean,
  error: boolean,
}

interface IAction {
  type: string,
}

interface IActionLoad extends IAction {
  payload: IPageItem,
}

type DispatchAction = IAction | IActionLoad

const initState = {
  list: [],
  loading: true,
  error: false,
};

export const loadingPage = (): IAction => ({
  type: LOADING_PAGE,
});

export const clearPage = (): IAction => ({
  type: CLEAR_PAGE,
});

export const loadedPage = (): IAction => ({
  type: LOADED_PAGE,
});

export const loadPageItem = (payload: IPageItem): IActionLoad => ({
  type: LOAD_PAGE_ITEM,
  payload,
});

export const loadPageFail = (): IAction => ({
  type: LOAD_PAGE_FAIL,
});

export const fetchPageItem = (pokeURL: string, lastItem = false) => (
  async (dispatch: Dispatch<DispatchAction>) => {
    await fetch(pokeURL)
      .then((response) => response.json())
      .then((json: IPageItem) => {
        dispatch(loadPageItem(json));
      })
      .then(() => {
        if (lastItem) {
          dispatch(loadedPage());
        }
      })
      .catch(() => dispatch(loadPageFail()));
  }
);

export const fetchPage = (list: Pokemon[]) => (dispatch: Dispatch<unknown>) => {
  dispatch(loadingPage());
  dispatch(clearPage());
  list.forEach((pokemon, index) => {
    if (index === list.length - 1) {
      dispatch(fetchPageItem(pokemon.url, true));
    } else {
      dispatch(fetchPageItem(pokemon.url));
    }
  });
};

const pagesReducer = (state: IState = initState, action: IActionLoad): IState => {
  switch (action.type) {
    case LOADING_PAGE:
      return { ...state, loading: true };
    case CLEAR_PAGE:
      return { ...state, list: [] };
    case LOADED_PAGE:
      return { ...state, loading: false };
    case LOAD_PAGE_ITEM:
      return { ...state, list: [...state.list, action.payload] };
    case LOAD_PAGE_FAIL:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default pagesReducer;
