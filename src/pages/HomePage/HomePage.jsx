import { Container, Title, Btn } from './HomePage.styled';
import { Link } from 'react-router-dom';

// import CardCar from '../../components/CardCar/CardCar';
// import cars from '../../advert.json';

const HomePage = () => {
  return (
    <Container>
      <Title>Let`s arrange an interesting trip</Title>
      <Btn>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/catalog">
          Let`s go
        </Link>
      </Btn>
    </Container>
  );
};

export default HomePage;
