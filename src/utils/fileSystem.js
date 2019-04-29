import md5 from 'md5';
import { FOLDER, FILE } from './constants';

const search = (arr, entry) => {
  let no = 0;

  arr[entry.parentID].children.forEach(elementId => {
    if (
      arr[elementId].name.includes(entry.name) &&
      arr[elementId].type === entry.type
    ) {
      console.log(elementId);
      no++;
    }
  });
  return no;
};

export const AddEntry = (data, newEntry) => {
  let no = search(data, newEntry);
  console.log(no);
  console.log(no);
  if (no > 0) {
    if (newEntry.type === FILE) {
      let temp = newEntry.name.split('.');
      if (temp.length > 1) {
        temp[temp.length - 2] = `${temp[temp.length - 2]}_${no}`;
        newEntry.name = temp.join('.');
      } else {
        newEntry.name = `${newEntry.name}_${no}`;
      }
    } else {
      newEntry.name = `${newEntry.name}_${no}`;
    }
  }
  newEntry.path =
    newEntry.parentPath === '/'
      ? `${newEntry.parentPath}${newEntry.name}`
      : `${newEntry.parentPath}/${newEntry.name}`;

  if (newEntry.type === FOLDER) {
    newEntry.children = [];
  }

  const id = md5(newEntry.path + newEntry.type);
  data[id] = newEntry;
  data[newEntry.parentID].children.push(id);
  localStorage.setItem('fileSystem', JSON.stringify(data));

  return { ...data };
};

export const DeleteEntry = (data, entryID) => {
  const entry = data[entryID];
  if (entry.type === FOLDER) {
    entry.children.forEach(id => {
      DeleteEntry(data, id);
    });
  }
  let parentID = data[entryID].parentID;
  let index = data[parentID].children.indexOf(entryID);
  if (index !== -1) data[parentID].children.splice(index, 1);
  delete data[entryID];
  localStorage.setItem('fileSystem', JSON.stringify(data));
  return { ...data };
};

const cloneObj = obj => {
  if (Object(obj) !== obj) return obj;
  else if (Array.isArray(obj)) return obj.map(cloneObj);

  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, cloneObj(v)])
  );
};

export const generateTreeFromList = _list => {
  const root = [];
  let list = cloneObj(_list); // create empty list to hold copy
  Object.keys(list).forEach((nodeID, index) => {
    if (!list[nodeID].parentID) return root.push(list[nodeID]);
    let parentID = list[nodeID].parentID;

    if (list[parentID]) {
      let index = list[parentID].children.indexOf(nodeID);
      if (index !== -1) list[parentID].children.splice(index, 1);
      if (list[nodeID].type === FOLDER) {
        list[parentID].children.push(list[nodeID]);
      }
    }
  });
  return root;
};

export const showPathEntries = (parentPath, fileSystem) => {
  return fileSystem[md5(parentPath + FOLDER)]
    ? fileSystem[md5(parentPath + FOLDER)].children.map(
        childrenID => fileSystem[childrenID]
      )
    : [];
};

export const entriesAreSame = (x, y) => {
  for (var p in x) {
    if (x.hasOwnProperty(p) !== y.hasOwnProperty(p)) return false;

    if (x[p] === null && y[p] !== null) return false;
    if (x[p] === null && y[p] !== null) return false;
  }
  if (typeof x[p] === 'object') {
    if (!entriesAreSame(x[p], y[p])) {
      return false;
    }
  } else if (x[p] != y[p]) return false;

  return true;
};
