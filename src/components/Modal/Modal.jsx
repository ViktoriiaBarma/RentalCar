import { ModalBackdrop, ModalContent, ModalDescr } from './Modal.styled';
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
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          src={car.img}
          alt={car.model}
          loading="lazy"
        />
        <ModalDescr>
          <li>{car.address.split(',')[1]}</li>
          <li>{car.address.split(',')[2]}</li>
          <li>{car.rentalCompany}</li>
          <li>{car.type}</li>
          <li>{car.model}</li>
          <li>{car.id}</li>
          <li>{car.functionalities[0]}</li>
        </ModalDescr>
      </ModalContent>
    </ModalBackdrop>
  );
};
