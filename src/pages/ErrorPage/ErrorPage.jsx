import { Link } from 'react-router-dom';
import { Container, Title } from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <Container>
      <Title>404</Title>
      <Link to="/">Go back home</Link>
    </Container>
  );
};

export default ErrorPage;
