import { ListItem, Btn, Picture, Descr } from './CardCar.styled';
const CardCar = ({ car }) => {
  console.log(car);
  return (
    <>
      <ListItem>
        <Picture src={car.img} alt={car.model} loading="lazy" />

        <Descr>
          <p>
            <span>{car.make}</span> {car.model}, <span>{car.year}</span>
          </p>
          <p>{car.rentalPrice}</p>
          <ul>
            <li>Kiev</li>
            <li>Ukraine</li>
          </ul>
        </Descr>
        <div>
          <Btn type="button">Learn More</Btn>
        </div>
      </ListItem>
    </>
  );
};

export default CardCar;
