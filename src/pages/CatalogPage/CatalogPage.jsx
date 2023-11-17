import { Container, List } from './CatalogPage.styled';
import CardCar from '../../components/CardCar/CardCar';
import cars from '../../advert.json';

const CatalogPage = () => {
  return (
    <Container>
      {/* <Title>Catalog Page</Title> */}
      <List>
        {cars.map((car) => (
          <li key={car.id}>
            <CardCar car={car} />
          </li>
        ))}
      </List>
    </Container>
  );
};

export default CatalogPage;
