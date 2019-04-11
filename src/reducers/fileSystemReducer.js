import { AddEntry, DeleteEntry } from '@Utils/fileSystem';
import dummyFileSystem from '@Utils/dummyFileSystem';

import { ADD_ENTRY, DELETE_ENTRY } from '@Utils/constants';

export default (data = dummyFileSystem, action) => {
  switch (action.type) {
    case ADD_ENTRY: {
      return AddEntry(action.payload, data);
    }

    case DELETE_ENTRY: {
    }

    default:
      return data;
  }
};
