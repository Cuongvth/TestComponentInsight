import Mock from 'mockjs';
import mock from "../mock"

const generateFakeDataTheThucThiDau = (count) => {
  const dataSource = [];

  for (let i = 1; i <= count; i++) {
    const fakeData = Mock.mock({
      id: i,
      tenTheThuc: '@string("lower", 5, 10)',
      moTa: '@string("lower", 100, 500)',
      soVongDau: '@pick([3, 5, 7])',
      soVongThang: 0,
    });

    if (fakeData.soVongDau === 3) {
      fakeData.soVongThang = 2;
    } else if (fakeData.soVongDau === 5) {
      fakeData.soVongThang = 3;
    } else {
      fakeData.soVongThang = 4;
    }

    dataSource.push(fakeData);
  }

  return dataSource;
};

const theThucThiDau = generateFakeDataTheThucThiDau(100);
export default theThucThiDau;

mock.onGet('/api/TheThucThiDau').reply(200, theThucThiDau);
