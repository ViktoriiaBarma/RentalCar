import { Formik } from 'formik';
import {
  Wrap,
  Btn,
  Form,
  LabelWrap,
  FormField,
  FieldFormik,
} from './Filter.styled';

const Filter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.dir(e.target.brand.value);
    console.dir(e.target.price.value);
  };
  return (
    <Wrap>
      <Formik initialValues={{ brand: '', price: '' }}>
        <Form onSubmit={handleSubmit}>
          <LabelWrap>
            <FormField htmlFor="brand">Car brand</FormField>
            <FieldFormik as="select" name="brand" id="brand">
              <option value="" selected disabled hidden>
                Enter the text
              </option>
              {[
                'Buick',
                'Volvo',
                'HUMMER',
                'Subaru',
                'Mitsubishi',
                'Nissan',
                'Lincoln',
                'GMC',
                'Hyundai',
                'MINI',
                'Bentley',
                'Mercedes-Benz',
                'Aston Martin',
                'Pontiac',
                'Lamborghini',
                'Audi',
                'BMW',
                'Chevrolet',
                'Mercedes-Benz',
                'Chrysler',
                'Kia',
                'Land',
              ].map((el, idx) => (
                <option key={idx} value={el}>
                  {el}
                </option>
              ))}
            </FieldFormik>
          </LabelWrap>

          <LabelWrap>
            <FormField htmlFor="price">Price/ 1 hour</FormField>
            <FieldFormik as="select" name="price" id="price">
              <option value="" selected disabled hidden>
                To $
              </option>

              {['30', '40', '50', '60', '70'].map((el, idx) => (
                <option key={idx} value={el}>
                  {el}
                </option>
              ))}
            </FieldFormik>
          </LabelWrap>
          <Btn type="submit">Search</Btn>
        </Form>
      </Formik>
    </Wrap>
  );
};

export default Filter;
