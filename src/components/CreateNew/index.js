import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import withModal from '@Elements/Modal';

import { FILE, FOLDER } from '@Utils/constants';

import { Container, Error, Top, Toggle, Form } from './styles';

const TodayDate = () => {
  let d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

function FileInfo(_props) {
  const [type, handleType] = useState(FILE);
  return (
    <Container>
      <Top>
        <Toggle.Container>
          <Toggle.Option
            className={type === FILE ? 'selected' : ''}
            onClick={() => handleType(FILE)}
          >
            File
          </Toggle.Option>
          <Toggle.Option
            className={type === FOLDER ? 'selected' : ''}
            onClick={() => handleType(FOLDER)}
          >
            Folder
          </Toggle.Option>
        </Toggle.Container>
      </Top>

      <Formik
        initialValues={{
          type: 'file',
          name: '',
          creatorName: '',
          size: 0,
          date: TodayDate()
        }}
        validate={values => {
          let errors = {};
          if (!values.name) {
            errors.name = 'Name is Required';
          } else if (!values.creatorName) {
            errors.creatorName = 'Creator Name is Required';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          _props.addEntry({
            ...values,
            type
          });
          _props.closeFn();
        }}
      >
        {props => (
          <Form.Container>
            <div className="formField">
              <Field
                placeholder="Name"
                onChange={props.handleChange}
                name="name"
                className="field"
                value={props.values.name}
                autocomplete="off"
              />
              {props.errors.name && props.touched.name ? (
                <Error>{props.errors.name}</Error>
              ) : (
                ''
              )}
            </div>

            <div className="formField">
              <Field
                placeholder="Creator"
                onChange={props.handleChange}
                name="creatorName"
                className="field"
                value={props.values.creatorName}
                autocomplete="off"
              />
              {props.errors.creatorName && props.touched.creatorName ? (
                <Error>{props.errors.creatorName}</Error>
              ) : (
                ''
              )}
            </div>

            <div className="formField">
              <Field
                placeholder="Size"
                type="number"
                onChange={props.handleChange}
                name="size"
                className="field"
                min="0"
                value={props.values.size}
              />
            </div>

            <div className="formField">
              <Field
                placeholder="date"
                type="date"
                onChange={props.handleChange}
                name="date"
                className="field"
                value={props.values.date}
              />
            </div>

            <Form.Submit
              type="submit"
              disabled={!props.dirty && !props.isSubmitting}
              className={
                !props.dirty && !props.isSubmitting > 0 ? 'disabled' : ''
              }
              onClick={props.handleSubmit}
            >
              Create
            </Form.Submit>
          </Form.Container>
        )}
      </Formik>
    </Container>
  );
}

export default withModal(FileInfo)({});
