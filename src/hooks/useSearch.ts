import { ChangeEvent, useState } from 'react';

type Hook = {
  search: string,
  makeSearch: (event: ChangeEvent<HTMLInputElement>) => void,
}

const useSearch = (initState: string): Hook => {
  const [search, setSearch] = useState(initState);

  const makeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  return { search, makeSearch };
};

export default useSearch;
