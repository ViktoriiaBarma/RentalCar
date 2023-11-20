import CardCar from '../CardCar/CardCar';
import { List } from './CarsList.styled';

export const CarsList = ({ cars }) => {
  return (
    <List>
      {cars.map((car) => (
        <CardCar key={car.id} car={car} />
      ))}
    </List>
  );
};
