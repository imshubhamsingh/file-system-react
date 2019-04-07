import { AddEntry, DeleteEntry } from '@Utils/fileSystem';

const initialData = {
  currentDepth: 0,
  fileSystem: {
    type: 'folder',
    name: 'root',
    path: '/',
    size: 123,
    createdAt: Date.now,
    children: [
      {
        type: 'folder',
        name: 'apps',
        path: '/apps',
        size: 123,
        createdAt: Date.now,
        children: []
      },
      {
        type: 'folder',
        name: 'picture',
        path: '/picture',
        size: 123,
        createdAt: Date.now,
        children: []
      },
      {
        type: 'folder',
        name: 'videos',
        path: '/videos',
        size: 123,
        createdAt: Date.now,
        children: []
      },
      {
        type: 'folder',
        name: 'docs',
        path: '/docs',
        size: 123,
        createdAt: Date.now,
        children: []
      },
      {
        type: 'folder',
        name: 'docs',
        path: '/docs',
        size: 123,
        createdAt: Date.now,
        children: [
          {
            type: 'folder',
            name: 'work',
            path: '/docs/work',
            size: 123,
            createdAt: Date.now,
            children: [
              {
                type: 'file',
                name: 'e.pdf',
                path: '/docs/work',
                size: 123,
                createdAt: Date.now
              },
              {
                type: 'file',
                name: 'f.ts',
                path: '/docs/work',
                size: 123,
                createdAt: Date.now
              }
            ]
          },
          {
            type: 'file',
            name: 'c.pdf',
            path: '/docs',
            size: 123,
            createdAt: Date.now
          },
          {
            type: 'file',
            name: 'd.docx',
            path: '/docs',
            size: 123,
            createdAt: Date.now
          }
        ]
      },
      {
        type: 'file',
        name: 'a.pdf',
        path: '/',
        size: 123,
        createdAt: Date.now
      },
      {
        type: 'file',
        name: 'b.jpg',
        path: '/',
        size: 123,
        createdAt: Date.now
      }
    ]
  }
};

export default (data = initialData, action) => {
  switch (action.type) {
    case ADD: {
      const { entryType, entryInfo, depth } = action;
      return AddEntry(entryType, entryInfo, depth, data);
    }

    case DELETE: {
      const { entryInfo, depth } = action;
      return DeleteEntry(entryInfo, depth, data);
    }

    default:
      return data;
  }
};
