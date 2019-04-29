const dummyFileSystem = {
  '1382b6993e9f270cb1c29833be3f5750': {
    type: '__folder__',
    name: 'root',
    path: '/',
    size: 0,
    date: '2019-04-07',
    creatorName: 'admin',
    parentPath: null,
    parentID: null,
    children: [
      '9b6739960c1ac83251046da2c718019b',
      '147d0ef33fe657ce53a83de6a630473d',
      'a55cfa9e1bf87138edd25c4b1553104d',
      '5f2b4d35489a8617e574060b19b7cad9',
      'ab7e413a3798155e37a9361140522e39',
      '891debd77d0bc40d30ff7d7e6c628e9f'
    ]
  },
  '9b6739960c1ac83251046da2c718019b': {
    type: '__folder__',
    name: 'apps',
    creatorName: 'Shubham Singh',
    size: 223,
    date: '2019-04-29',
    parentID: '1382b6993e9f270cb1c29833be3f5750',
    parentPath: '/',
    path: '/apps',
    children: []
  },
  '147d0ef33fe657ce53a83de6a630473d': {
    type: '__folder__',
    name: 'pictures',
    creatorName: 'Shubham Singh',
    size: 23,
    date: '2019-04-29',
    parentID: '1382b6993e9f270cb1c29833be3f5750',
    parentPath: '/',
    path: '/pictures',
    children: []
  },
  a55cfa9e1bf87138edd25c4b1553104d: {
    type: '__folder__',
    name: 'videos',
    creatorName: 'Shubham Singh',
    size: 0,
    date: '2019-04-29',
    parentID: '1382b6993e9f270cb1c29833be3f5750',
    parentPath: '/',
    path: '/videos',
    children: []
  },
  '5f2b4d35489a8617e574060b19b7cad9': {
    type: '__folder__',
    name: 'docs',
    creatorName: 'Shubham Singh',
    size: 233,
    date: '2019-04-29',
    parentID: '1382b6993e9f270cb1c29833be3f5750',
    parentPath: '/',
    path: '/docs',
    children: [
      '2d03459789f153918dfc0be413fe9987',
      '8f7c5959dbb088c0aef8b145dbdf6e43',
      '579c51eec02e43b4dfad314e05365fe4'
    ]
  },
  ab7e413a3798155e37a9361140522e39: {
    type: '__file__',
    name: 'a.pdf',
    creatorName: 'Shubham Singh',
    size: 234,
    date: '2019-04-29',
    parentID: '1382b6993e9f270cb1c29833be3f5750',
    parentPath: '/',
    path: '/a.pdf'
  },
  '891debd77d0bc40d30ff7d7e6c628e9f': {
    type: '__file__',
    name: 'b.jpg',
    creatorName: 'Shubham Singh',
    size: 234,
    date: '2019-04-29',
    parentID: '1382b6993e9f270cb1c29833be3f5750',
    parentPath: '/',
    path: '/b.jpg'
  },
  '2d03459789f153918dfc0be413fe9987': {
    type: '__folder__',
    name: 'work',
    creatorName: 'Shubham Singh',
    size: 200,
    date: '2019-04-29',
    parentID: '5f2b4d35489a8617e574060b19b7cad9',
    parentPath: '/docs',
    path: '/docs/work',
    children: [
      'b42eff45517edc2e543b3d2750bd08c3',
      '00ce12a7746322ce403e17992674f81b'
    ]
  },
  '8f7c5959dbb088c0aef8b145dbdf6e43': {
    type: '__file__',
    name: 'c.pdf',
    creatorName: 'Shubham Singh',
    size: 200,
    date: '2019-04-29',
    parentID: '5f2b4d35489a8617e574060b19b7cad9',
    parentPath: '/docs',
    path: '/docs/c.pdf'
  },
  '579c51eec02e43b4dfad314e05365fe4': {
    type: '__file__',
    name: 'd.docx',
    creatorName: 'Shubham Singh',
    size: 235,
    date: '2019-04-29',
    parentID: '5f2b4d35489a8617e574060b19b7cad9',
    parentPath: '/docs',
    path: '/docs/d.docx'
  },
  b42eff45517edc2e543b3d2750bd08c3: {
    type: '__file__',
    name: 'e.pdf',
    creatorName: 'Shubham Singh',
    size: 0,
    date: '2019-04-29',
    parentID: '2d03459789f153918dfc0be413fe9987',
    parentPath: '/docs/work',
    path: '/docs/work/e.pdf'
  },
  '00ce12a7746322ce403e17992674f81b': {
    type: '__file__',
    name: 'f.ts',
    creatorName: 'Shubham Singh',
    size: 235,
    date: '2019-04-29',
    parentID: '2d03459789f153918dfc0be413fe9987',
    parentPath: '/docs/work',
    path: '/docs/work/f.ts'
  }
};

const generatedummyFileSystem = () => {
  localStorage.setItem('fileSystem', JSON.stringify(dummyFileSystem));
  return dummyFileSystem;
};

export default generatedummyFileSystem;
