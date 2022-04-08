import { FC } from 'react';
import { IPkmTypes } from '../../../redux/reducers/pages';
import './ModalTypeList.scss';

interface IProps {
  types: IPkmTypes[]
}

const ModalTypesList: FC<IProps> = ({ types }) => (
  <ul className="types-list">
    {types.map((type) => (
      <li key={type.slot}>
        {type.type.name}
      </li>
    ))}
  </ul>
);

export default ModalTypesList;
