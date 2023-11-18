import { Container, List } from './HomePage.styled';
import CardCar from '../../components/CardCar/CardCar';
import cars from '../../advert.json';

const HomePage = () => {
  return (
    <Container>
      {/* <Title>Home Page</Title> */}
      <List>
        {cars.map((car) => (
          // <li key={car.id}>
          <CardCar key={car.id} car={car}  />
          // </li>
        ))}
      </List>
    </Container>
  );
};

export default HomePage;
