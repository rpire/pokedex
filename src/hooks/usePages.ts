import { useState } from 'react';
// import { IState as IPgState } from '../redux/reducers/pages';
// import { IState as IPkmState } from '../redux/reducers/pokemon';

type Hook = {
  pageNum: number,
  increasePage: () => void,
  decreasePage: () => void,
}

const usePages = (initState = 1): Hook => {
  const [pageNum, setPageNum] = useState(initState);

  const increasePage = (): void => setPageNum(pageNum + 1);

  const decreasePage = (): void => setPageNum(pageNum - 1);

  return {
    pageNum, increasePage, decreasePage,
  };
};

export default usePages;
