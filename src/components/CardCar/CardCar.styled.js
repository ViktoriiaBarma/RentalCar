import styled from 'styled-components';

export const ListItem = styled.li`
  width: 274px;
  border-radius: 16px;
  border: 2px solid rgba(185, 228, 201, 0.5);
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
  border: 1px solid transparent;
  padding: 12px 98px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  background-color: #3470ff;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    background-color: #0b44cd;
  }
`;
export const Picture = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  padding-bottom: 14px;
`;

export const Descr = styled.div`
  padding-bottom: 28px;
`;
