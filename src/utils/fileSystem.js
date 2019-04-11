import { FOLDER, ADD_ENTRY, DELETE_ENTRY } from './constants';

const updateFileSystem = (action, entry, fileSystem = {}) => {
  let updatedFileSystem = fileSystem;
  if (action === ADD_ENTRY) {
    updatedFileSystem.push(entry);
  }

  if (action === DELETE_ENTRY) {
    updatedFileSystem.filter(node => node.path !== entry);
  }

  return updatedFileSystem;
};

export const AddEntry = (entry, fileSystem = {}) => {
  const { type, name, path, size, createdAt, creatorName, parentPath } = entry;
  const newEntry = {
    type,
    name,
    path,
    size,
    createdAt,
    creatorName,
    parentPath
  };

  if (type === FOLDER) {
    newEntry.children = [];
  }

  return updateFileSystem(ADD_ENTRY, newEntry, fileSystem);
};

export const DeleteEntry = (entryPath, fileSystem = {}) => {
  return updateFileSystem(DELETE_ENTRY, entryPath, fileSystem);
};

export const generateTreeFromList = list => {
  const root = [];
  const map = {};

  list.forEach(node => {
    if (!node.parentPath) return root.push(node);

    let parentIndex = map[node.parentPath];
    if (typeof parentIndex !== 'number') {
      parentIndex = list.findIndex(el => el.path === node.parentPath);
      map[node.parentPath] = parentIndex;
    }

    if (parentIndex >= 0) {
      if (!list[parentIndex].children) {
        return (list[parentIndex].children = [node]);
      }

      list[parentIndex].children.push(node);
    }
  });

  return root;
};

export const showPathEntries = (parentPath, fileSystem) => {
  return fileSystem.filter(node => node.parentPath === parentPath);
};
