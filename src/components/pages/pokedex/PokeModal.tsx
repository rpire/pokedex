import { FC } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { IPageItem } from '../../../redux/reducers/pages';
import ModalImgContainer from './ModalImgContainer';
import ModalTypesList from './ModalTypeList';
import './PokeModal.scss';

interface IProps {
  pkm: IPageItem,
  formattedName: string,
  modalVisibility: string,
  curtainVisibility: string,
  handleClose: () => void,
}

const PokeModal: FC<IProps> = ({
  pkm, formattedName, modalVisibility, curtainVisibility, handleClose,
}) => (
  <div className={`modal-curtain ${curtainVisibility}`}>
    <article className={`modal ${modalVisibility}`}>
      <IoCloseSharp onClick={handleClose} className="modal-cross" />
      <small className="modal-id">{`ID: ${pkm.id}`}</small>
      <h2 className="modal-title">{formattedName}</h2>
      <ModalImgContainer pkm={pkm} />
      <h3 className="types-title">Types</h3>
      <ModalTypesList types={pkm.types} />
    </article>
  </div>
);

export default PokeModal;
