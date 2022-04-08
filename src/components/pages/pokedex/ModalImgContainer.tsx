import { FC } from 'react';
import { IPageItem } from '../../../redux/reducers/pages';
import './ModalImgContainer.scss';

interface IProps {
  pkm: IPageItem,
}

const ModalImgContainer: FC<IProps> = ({ pkm }) => (
  <div className="modal-img-container">
    <div className="modal-img-frame">
      <img
        src={pkm.sprites.front_default}
        alt={pkm.name}
        className="modal-img"
      />
      <small className="img-desc">Coloración normal</small>
    </div>
    <div className="modal-img-frame">
      <img
        src={pkm.sprites.front_shiny}
        alt={`${pkm.name} shiny`}
        className="modal-img"
      />
      <small className="img-desc">Variant &quot;shiny&quot;</small>
    </div>
  </div>
);

export default ModalImgContainer;
