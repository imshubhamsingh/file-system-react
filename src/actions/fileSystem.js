import { ADD_ENTRY, DELETE_ENTRY } from '@Utils/constants';

export const addEntry = entry => {
  return {
    type: ADD_ENTRY,
    payload: entry
  };
};

export const deleteEntry = entry => {
  return {
    type: DELETE_ENTRY,
    payload: entry
  };
};
