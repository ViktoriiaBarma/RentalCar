import { Container, List } from './CatalogPage.styled';
import CardCar from '../../components/CardCar/CardCar';
import cars from '../../advert.json';

const CatalogPage = () => {
  return (
    <Container>
      {/* <Title>Catalog Page</Title> */}
      <List>
        {cars.map((car) => (
            <CardCar key={car.id} car={car} />
        ))}
      </List>
    </Container>
  );
};

export default CatalogPage;
