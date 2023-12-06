import mock from '../mock';

const ngonNgulapTrinh = [
  {
    id: 1,
    tenNgonNgu: 'C#',
    keyMonaca: 'csharp',
    moTa: 'C#',
    languageChoice: 1,
  },
  {
    id: 2,
    tenNgonNgu: 'JavaScript',
    keyMonaca: 'javascript',
    moTa: 'JavaScript',
    languageChoice: 17,
  },
  {
    id: 3,
    tenNgonNgu: 'C++',
    keyMonaca: 'cpp',
    moTa: 'C++',
    languageChoice: 7,
  },
  {
    id: 4,
    tenNgonNgu: 'Python',
    keyMonaca: 'python',
    moTa: 'Python',
    languageChoice: 5,
  },
  {
    id: 5,
    tenNgonNgu: 'Java',
    keyMonaca: 'java',
    moTa: 'Java',
    languageChoice: 4,
  },
];

export default ngonNgulapTrinh;

mock.onGet('/api/NgonNgulapTrinh').reply(200, ngonNgulapTrinh);
