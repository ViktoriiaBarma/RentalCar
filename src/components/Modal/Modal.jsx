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
} from './Modal.styled';
import CrossIcon from './CrossIcon';

import { useEffect } from 'react';

export const Modal = ({ closeModal, car }) => {
  useEffect(() => {
    const handlePressESC = (e) => {
      if (e.code === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handlePressESC);
    return () => window.removeEventListener('keydown', handlePressESC);
  }, [closeModal]);

  return (
    <ModalBackdrop onClick={() => closeModal()}>
      <ModalContent>
        <CrossIcon
          style={{
            position: 'absolute',
            right: '16px',
            top: '16px',
            cursor: 'pointer',
          }}
        />
        <Img src={car.img} alt={car.model} loading="lazy" />
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
          <Btn type="submit">Rental car</Btn>
        </Descr>
      </ModalContent>
    </ModalBackdrop>
  );
};
