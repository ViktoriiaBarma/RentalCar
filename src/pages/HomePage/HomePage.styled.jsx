import styled from '@emotion/styled';
import Car from '../../assets/car.jpg';

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 100px 128px;
// `;

export const Title = styled.h1`
  margin: 0;
  margin-right: 10px;
  margin-bottom: 32px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100hv;

  background-image: url(${Car});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 100px;
  padding-bottom: 500px;
  padding-left: 50px;
`;

export const Btn = styled.button`
  border-radius: 12px;
  border: 0.5px solid transparent;
  padding: 12px 99.5px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  font-family: inherit;
  background-color: #3470ff;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    background-color: #0b44cd;
  }
`;
