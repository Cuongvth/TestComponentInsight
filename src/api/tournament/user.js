import Mock from 'mockjs';
import mock from '../mock';

const generateFakeDataUser = (count) => {
  const dataSource = [];

  for (let i = 1; i <= count; i++) {
    const fakeData = Mock.mock({
      id: i,
      avatar: 'https://nemthuanviet.com/wp-content/uploads/2023/10/cho-long-xu-2.jpg',
      name: Mock.mock('@name'),
      email: '@string("lower", 5, 10)@mock.com',
      danhHieu: '@pick(["Chiến thần", "Kỳ phùng địch thủ", "Độc cô cầu bại", "Thách đấu"])',
      elo: '@integer(10000, 99999)',
      cuocThiDaThamGia: '@integer(100, 1000)',
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

const user = generateFakeDataUser(100);
export default user;

mock.onGet('/api/User').reply(200, user);
