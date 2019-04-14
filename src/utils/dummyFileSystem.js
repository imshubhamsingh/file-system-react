const dummyFileSystem = [
  {
    type: 'folder',
    name: 'root',
    path: '/',
    size: 0,
    createdAt: '2019-04-07',
    creatorName: 'admin',
    parentPath: null
  },
  {
    type: 'folder',
    name: 'picture',
    path: '/picture',
    size: 0,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    parentPath: '/'
  },
  {
    type: 'folder',
    name: 'videos',
    path: '/videos',
    size: 0,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    parentPath: '/'
  },
  {
    type: 'folder',
    name: 'apps',
    path: '/apps',
    size: 0,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    parentPath: '/'
  },
  {
    type: 'folder',
    name: 'docs',
    path: '/docs',
    size: 0,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    parentPath: '/'
  },
  {
    type: 'file',
    name: 'a.pdf',
    path: '/a.pdf',
    size: 0,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    parentPath: '/'
  },
  {
    type: 'file',
    name: 'b.jpg',
    path: '/b.jpg',
    size: 0,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    parentPath: '/'
  },
  {
    type: 'folder',
    name: 'works',
    path: '/docs/works',
    size: 0,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    parentPath: '/docs'
  },
  {
    type: 'file',
    name: 'c.jpg',
    path: '/docs/b.jpg',
    size: 0,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    parentPath: '/docs'
  },
  {
    type: 'file',
    name: 'd.docx',
    path: '/docs/d.docx',
    size: 0,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    parentPath: '/docs'
  },
  {
    type: 'file',
    name: 'e.pdf',
    path: '/docs/works/e.pdf',
    size: 0,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    parentPath: '/docs/works'
  },
  {
    type: 'file',
    name: 'f.ts',
    path: '/docs/works/f.ts',
    size: 0,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    parentPath: '/docs/works'
  }
];

const generatedummyFileSystem = () => {
  localStorage.setItem('fileSystem', JSON.stringify(dummyFileSystem));

  return dummyFileSystem;
};

export default generatedummyFileSystem;
