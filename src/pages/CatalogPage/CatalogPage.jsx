import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCars } from '../../redux/cars/selectors.js';
import { fetchCars } from '../../redux/cars/operations';
import { Container, Btn } from './CatalogPage.styled';
import { CarsList } from '../../components/CarList/CarsList';
import Filter from '../../components/Filter/Filter';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const cars = useSelector(selectCars);
  console.log(cars);
  const dispatch = useDispatch();

  const isEndCollection = cars.length % 12 !== 0;

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleClickMore = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <Filter />
      <CarsList cars={cars} />
      {!isEndCollection && (
        <Btn type="button" onClick={handleClickMore}>
          Load More
        </Btn>
      )}
    </Container>
  );
};

export default CatalogPage;
