import {
  ListItem,
  Btn,
  Picture,
  Descr,
  Price,
  Details,
  Line,
  Model,
  PictureWrapper,
} from './CardCar.styled';
const CardCar = ({ car }) => {
  return (
    <>
      <ListItem>
        <PictureWrapper>
          <Picture src={car.img} alt={car.model} loading="lazy" />
        </PictureWrapper>
        <Descr>
          <Price>
            <p>
              {car.make} <Model> {car.model}</Model>, {car.year}
            </p>
            <p>{car.rentalPrice}</p>
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
        </Descr>
        <Btn type="button">Learn More</Btn>
      </ListItem>
    </>
  );
};

export default CardCar;
