import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import withModal from '@Elements/Modal';

const validationSchema = Yup.object({
  name: Yup.string('Enter a name').required('Name is required'),
  creatorName: Yup.string('').required('Enter creator name'),
  size: Yup.number().required('Enter size'),
  date: Yup.date('Enter your password').required('Date is required')
});

class FileInfo extends Component {
  initialState = {
    type: 'file',
    name: '',
    creatorName: '',
    size: 0,
    date: Date.now
  };

  state = {
    type: 'file',
    name: '',
    creatorName: '',
    size: 0,
    date: Date.now
  };
  render() {
    return (
      <Container>
        <Top>
          <Toggle.Container>
            <Toggle.Option
              className={this.state.type === 'file' ? 'selected' : ''}
              onClick={() => this.setState({ type: 'file' })}
            >
              File
            </Toggle.Option>
            <Toggle.Option
              className={this.state.type === 'folder' ? 'selected' : ''}
              onClick={() => this.setState({ type: 'folder' })}
            >
              Folder
            </Toggle.Option>
          </Toggle.Container>
        </Top>

        <Formik
          initialValues={this.initialState}
          onSubmit={(values, actions) => {
            this.props.addEntry({
              ...values,
              type: this.state.type
            });
            console.log(values);
            this.props.closeFn();
          }}
        >
          {props => (
            <Form.Container>
              <Field
                placeholder="Name"
                onChange={props.handleChange}
                name="name"
                className="formField"
                value={props.values.name}
              />
              <Field
                placeholder="Creator"
                onChange={props.handleChange}
                name="creatorName"
                className="formField"
                value={props.values.creatorName}
              />
              <Field
                placeholder="Size"
                type="number"
                onChange={props.handleChange}
                name="size"
                min="0"
                className="formField"
                value={props.values.size}
              />
              <Field
                placeholder="date"
                type="date"
                onChange={props.handleChange}
                name="date"
                className="formField"
                value={props.values.date}
              />
              <Form.Submit
                type="submit"
                disabled={!props.dirty && !props.isSubmitting}
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
}

export default withModal(FileInfo)({});

const Container = styled.div``;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 0 32px;
`;

const Toggle = {
  Container: styled.div`
    height: 32px;
    width: 128px;
    border: 1px solid #dde0e4;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    user-select: none;
  `,
  Option: styled.div`
    font-family: Lato, sans-serif;
    font-size: 14px;
    color: #535b62;
    width: 50%;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    letter-spacing: 0;
    &.selected {
      background: #4ab7ff;
      color: white;
    }
  `
};

const Form = {
  Container: styled.div`
    padding: 1px 48px;
    & .formField {
      width: 100%;
      background: #ffffff;
      border: 1px solid #dde0e4;
      border-radius: 8px;
      font-family: Lato, sans-serif;
      font-size: 14px;
      padding: 10px;
      margin-bottom: 20px;
      &::placeholder {
        color: #afb2b6;
      }
      &[type='date']::placeholder {
        color: #afb2b6;
      }
    }
  `,
  Submit: styled.div`
    background: #4ab7ff;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    justify-content: center;
    font-family: Lato, sans-serif;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 40px;
    transition: opacity 250ms ease-in;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `
};
