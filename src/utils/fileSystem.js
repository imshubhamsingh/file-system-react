import { FOLDER } from './constants';

const search = (arr, entry) => {
  let no = 0;
  arr.forEach(element => {
    if (element.name.includes(entry.name) && element.type === entry.type) {
      no++;
    }
  });
  return no;
};

export const AddEntry = (data, newEntry) => {
  let no = search(data, newEntry);
  if (no > 0) {
    newEntry.name = `${newEntry.name}_${no}`;
  }
  newEntry.path =
    newEntry.parentPath === '/'
      ? `${newEntry.parentPath}${newEntry.name}`
      : `${newEntry.parentPath}/${newEntry.name}`;

  if (newEntry.type === FOLDER) {
    newEntry.children = [];
  }

  let newData = [...data, newEntry];
  localStorage.setItem('fileSystem', JSON.stringify(newData));

  return newData;
};

export const DeleteEntry = (data, path) => {
  let afterDelete = data.filter(node => {
    return !node.path.includes(path);
  });

  localStorage.setItem('fileSystem', JSON.stringify(afterDelete));

  return afterDelete;
};

export const generateTreeFromList = _list => {
  const root = [];
  const map = {};

  var list = []; // create empty array to hold copy

  for (var i = 0, len = _list.length; i < len; i++) {
    list[i] = {}; // empty object to hold properties added below
    for (var prop in _list[i]) {
      list[i][prop] = _list[i][prop]; // copy properties from arObj to ar2
    }
  }

  list = list.filter(el => el.type === FOLDER);
  list.forEach((node, index) => {
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
