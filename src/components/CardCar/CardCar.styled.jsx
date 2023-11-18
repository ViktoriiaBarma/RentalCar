import styled from '@emotion/styled';

export const ListItem = styled.li`
  width: 274px;
  height: 426px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  transform: scale(1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export const Btn = styled.button`
  border-radius: 12px;
  border: 0.5px solid transparent;
  padding: 12px 99.5px;
  color: #fff;
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
export const Picture = styled.img`
  width: 274px;
  border-radius: 14px;
  object-position: center;
  margin-bottom: 14px;
  height: 268px;
  object-fit: cover;
`;

export const Descr = styled.div`
  margin-bottom: 28px;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px 8px;
  font-size: 16px;
`;
export const Details = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  gap: 5px;
  align-items: center;
  font-size: 12px;
`;
