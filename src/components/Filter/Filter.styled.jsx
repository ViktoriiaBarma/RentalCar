import styled from '@emotion/styled';

export const Wrap = styled.form`
  padding-top: 150px;
  padding-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  gap: 18px;
  align-items: flex-end;
`;

export const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const FieldFormik = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  border-radius: 14px;
  color: #121417;
  background-color: #f7f7fb;
  padding: 14px 18px;
  border: 0.5px solid transparent;
`;
export const Btn = styled.button`
  border-radius: 12px;
  border: 0.5px solid transparent;
  padding: 14px 44px;
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
