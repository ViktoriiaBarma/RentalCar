import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  font-weight: 500;
  font-size: 24px;
  color: #3470ff;
  text-decoration: inherit;
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
