import { Container, Title } from './FavoritePage.styled';
import { CarsList } from '../../components/CarList/CarsList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectFavoritesCars } from '../../redux/favorite/selectors.js';

const FavoritePage = () => {
  const favorites = useSelector(selectFavoritesCars);

  return (
    <Container>
      {favorites.length === 0 && <Title>You don`t have favorite cars</Title>}
      <CarsList cars={favorites} />
    </Container>
  );
};

export default FavoritePage;
