import { AddEntry, DeleteEntry } from '@Utils/fileSystem';
import dummyFileSystem from '@Utils/dummyFileSystem';

import { ADD_ENTRY, DELETE_ENTRY } from '@Utils/constants';

export default (data = dummyFileSystem, action) => {
  switch (action.type) {
    case ADD_ENTRY: {
      return [...data, action.payload];
    }

    case DELETE_ENTRY: {
      let afterDelete = data.filter(node => {
        return node.path !== action.payload;
      });
      return afterDelete;
    }

    default:
      return data;
  }
};
