import {
  ListItem,
  Btn,
  Picture,
  Descr,
  Price,
  Details,
} from './CardCar.styled';
const CardCar = ({ car }) => {
  return (
    <>
      <ListItem>
        <Picture src={car.img} alt={car.model} loading="lazy" />
        <Descr>
          <Price>
            <p>
              <span>{car.make}</span> {car.model}, <span>{car.year}</span>
            </p>
            <p>{car.rentalPrice}</p>
          </Price>
          <Details>
            <li>{car.address.split(',')[1]}</li>
            <li>{car.address.split(',')[2]}</li>
            <li>{car.rentalCompany}</li>
            <li>{car.type}</li>
            <li>{car.model}</li>
            <li>{car.id}</li>
            <li>{car.functionalities[3]}</li>
          </Details>
        </Descr>
        <Btn type="button">Learn More</Btn>
      </ListItem>
    </>
  );
};

export default CardCar;
