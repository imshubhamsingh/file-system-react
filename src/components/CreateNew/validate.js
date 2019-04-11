import spected from 'spected';

export const getSpectedValidationSchema = values => {
  return {
    name: [[value => !isEmpty(value), 'Name is required!']],
    creatorName: [[value => !isEmpty(value), 'Creator Name is required!']]
  };
};

function isEmpty(value) {
  return !value || !value.trim();
}

export const validate = getValidationSchema => {
  return values => {
    const spec = getValidationSchema(values);
    const validationResult = spected(spec, values);
    return getErrorsFromValidationResult(validationResult);
  };
};

function getErrorsFromValidationResult(validationResult) {
  const FIRST_ERROR = 0;
  return Object.keys(validationResult).reduce((errors, field) => {
    return validationResult[field] !== true
      ? { ...errors, [field]: validationResult[field][FIRST_ERROR] }
      : errors;
  }, {});
}
