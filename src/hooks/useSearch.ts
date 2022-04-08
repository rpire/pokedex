import { ChangeEvent, useState } from 'react';

type Hook = {
  search: string,
  changeSearch: (event: ChangeEvent<HTMLInputElement>) => void,
}

const useSearch = (initState: string): Hook => {
  const [search, setSearch] = useState(initState);

  const changeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  return { search, changeSearch };
};

export default useSearch;
