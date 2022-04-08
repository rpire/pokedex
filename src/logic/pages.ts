import { Pokemon } from '../redux/reducers/pokemon';

const currentPage = (): number => {
  const currentPage = localStorage.getItem('currentPage');
  const initPageNum = currentPage ? parseInt(currentPage, 10) : 1;
  return initPageNum;
};

export const pkmSlice = (arr: Pokemon[], num: number): Pokemon[] => (
  arr.slice((num - 1) * 12, (num - 1) * 12 + 12)
);

export default currentPage;
