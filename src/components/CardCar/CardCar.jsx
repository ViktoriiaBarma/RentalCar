import {
  ListItem,
  Btn,
  Picture,
  Descr,
  Price,
  Details,
} from './CardCar.styled';
const CardCar = ({ car }) => {
  console.log(car);
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
            <li>Kiev</li>
            <li>Ukraine</li>
            <li>{car.rentalCompany}</li>
            <li>{car.type}</li>
            <li>{car.model}</li>
            <li>{car.id}</li>
            <li>{car.functionalities[0]}</li>
          </Details>
        </Descr>
        <div>
          <Btn type="button">Learn More</Btn>
        </div>
      </ListItem>
    </>
  );
};

export default CardCar;
