import { Container, Title } from './FavoritePage.styled';
import { Modal } from '../../components/Modal/Modal';
import cars from '../../advert.json';

const FavoritePage = () => {
  return (
    <Container>
      <Title>Favorite Page</Title>
      {cars.map((car) => (
        <Modal key={car.id} car={car} />
      ))}
    </Container>
  );
};

export default FavoritePage;
