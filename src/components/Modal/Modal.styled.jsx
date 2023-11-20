import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(2px);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  width: 541px;
  height: 752px;
  background-color: #fff;
  border-radius: 24px;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`;

export const ModalDescr = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  font-size: 12px;
`;

export const Img = styled.img`
  margin-bottom: 14px;
  border-radius: 14px;
`;

export const Conditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;
export const Accent = styled.span`
  color: #3470ff;
`;
export const HeadLine = styled.p`
  font-size: 14px;
  color: #121417;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;
export const Description = styled.p`
  font-size: 12px;
  color: #121417;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const Descr = styled.div`
  margin-bottom: 24px;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #121417;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`;
export const Model = styled.span`
  color: #3470ff;
`;

export const Details = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: #121417;
  opacity: 50%;
  font-size: 12px;
  line-height: 18px;
margin-bottom:14px;
  }
`;

export const Line = styled.span`
  border-right: 1px solid #12141732;
  margin-left: 6px;
  margin-right: 6px;
`;

export const Btn = styled.a`
  width: 168px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background-color: #3470ff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  transition: border-color 0.25s;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
export const Item = styled.li`
  font-size: 12px;
  color: #363535;
  font-weight: 500;
  line-height: 18px;
`;
