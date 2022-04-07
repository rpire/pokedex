import { FC } from 'react';
import { Pokemon } from '../../../redux/reducers/pokemon';
import './PagesBtnContainer.scss';

interface IProps {
  pageNum: number,
  increasePage: () => void,
  decreasePage: () => void,
  pokemon: Pokemon[],
}

const PagesBtnContainer: FC<IProps> = ({
  pageNum, increasePage, decreasePage, pokemon,
}) => (
  <div className="pg-btn-container">
    <button
      type="button"
      onClick={decreasePage}
      disabled={pageNum <= 1}
      className="pg-btn"
    >
      Previous
    </button>
    <span className="pg-counter">{pageNum}</span>
    <button
      type="button"
      onClick={increasePage}
      disabled={pageNum * 12 > pokemon.length}
      className="pg-btn"
    >
      Next
    </button>
  </div>
);

export default PagesBtnContainer;
