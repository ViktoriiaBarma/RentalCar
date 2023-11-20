import {
  ModalBackdrop,
  ModalContent,
  Img,
  Conditions,
  HeadLine,
  Btn,
  Descr,
  Price,
  Details,
  Accent,
  Line,
  Model,
  Description,
  Item,
  Icon,
} from './Modal.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RxCross2 } from 'react-icons/rx';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ car, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

  const hendleCloseModal = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <ModalBackdrop onClick={hendleCloseModal}>
      <ModalContent>
        <RxCross2 style={Icon} onClick={onClose} />
        <Img
          src={car.img}
          alt={car.model}
          loading="lazy"
          width="469"
          height="314"
        />
        <Descr>
          <Price>
            <p>
              {car.make} <Model> {car.model}</Model>, {car.year}
            </p>
          </Price>
          <Details>
            <li>
              {car.address.split(',')[1]} <Line></Line>
            </li>
            <li>
              {car.address.split(',')[2]} <Line></Line>
            </li>
            <li>
              {car.rentalCompany} <Line></Line>
            </li>
            <li>
              {car.type} <Line></Line>
            </li>
            <li>
              {car.model} <Line></Line>
            </li>
            <li>
              {car.id} <Line></Line>
            </li>
            <li>{car.functionalities[1]}</li>
          </Details>
          <Description>{car.description}</Description>
          <HeadLine>Accessories and functionalities:</HeadLine>
          <Details>
            <li>
              {car.accessories[0]} <Line></Line>
            </li>
            <li>
              {car.accessories[1]} <Line></Line>
            </li>
            <li>
              {car.accessories[2]} <Line></Line>
            </li>
            <li>
              {car.functionalities[0]} <Line></Line>
            </li>
            <li>
              {car.functionalities[1]} <Line></Line>
            </li>
            <li>
              {car.functionalities[2]} <Line></Line>
            </li>
          </Details>
          <HeadLine>Rental Conditions:</HeadLine>
          <Conditions>
            <Item>{car.rentalConditions.split('\n')[0]}</Item>
            <Item>{car.rentalConditions.split('\n')[1]}</Item>
            <Item>{car.rentalConditions.split('\n')[2]}</Item>
            <Item>
              Mileage: <Accent>{car.mileage}</Accent>
            </Item>
            <Item>
              Price: <Accent>{car.rentalPrice}</Accent>
            </Item>
          </Conditions>
          <Btn href="tel:+380730000000">Rental car</Btn>
        </Descr>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot,
  );
};
