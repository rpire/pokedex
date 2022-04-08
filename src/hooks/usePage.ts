import { useState } from 'react';

type Hook = {
  pageNum: number,
  increasePage: () => void,
  decreasePage: () => void,
}

const usePage = (initState = 1): Hook => {
  const [pageNum, setPageNum] = useState(initState);

  const increasePage = (): void => setPageNum(pageNum + 1);

  const decreasePage = (): void => setPageNum(pageNum - 1);

  return {
    pageNum, increasePage, decreasePage,
  };
};

export default usePage;
