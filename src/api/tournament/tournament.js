import Mock from 'mockjs';
import mock from '../mock';
import loaiGiaiDau from './loaiGiaiDau';
import theThucThiDau from './theThucThiDau';
import ngonNguLapTrinh from './ngonNguLapTrinh';
import user from './user';
import ngonNgulapTrinh from './ngonNguLapTrinh';

const generateFakeDataTournament = (count) => {
  const dataSource = [];

  for (let i = 1; i <= count; i++) {
    const fakeData = Mock.mock({
      id: i,
      theThucThiDauID: `@pick(${theThucThiDau.map((c) => c.id)})`,
      tenGiaiDau: '@string("lower", 5, 10)',
      hinhAnh: 'https://nemthuanviet.com/wp-content/uploads/2023/10/cho-long-xu-2.jpg',
      moTaNgan: '@string("lower", 100, 500)',
      thoiGianBatDau: '@datetime("yyyy-MM-dd HH:mm:ss", "30 days ago")',
      thoiGianKetThuc: '@datetime("yyyy-MM-dd HH:mm:ss", "30 days from now")',
      dieuLe: '@string("lower", 100, 500)',
      gioiHanSoDoiThu: '@integer(5, 50)',
      gioiHanElo: '@integer(0, 10000)',
      thoiGianDau: `@pick([30, 60, 120])`,
      isPublic: '@boolean',
      loaiGiaiDau: `@pick(${loaiGiaiDau.map((c) => c.id)})`,
      ngonNguLapTrinh: `@pick(${ngonNgulapTrinh.map((c) => c.id)})`,
      trangThai: '@integer(1, 2)',
      key: '@string("lower", 5, 10)',
      link: '@string("lower", 10, 20)',
      user: [],
    });
    for (let index = 0; index < fakeData.gioiHanSoDoiThu; index++) {
      fakeData.user.push(Mock.mock(`@pick(${user.map((c) => c.id)})`));
    }

    dataSource.push(fakeData);
  }

  return dataSource;
};

const tournament = generateFakeDataTournament(1000);

mock.onGet('/api/GiaiDau').reply(200, tournament);

mock.onGet('/api/GiaiDauById').reply((config) => {
  const { id = 1 } = config.params;
  const foundTournament = tournament.find((c) => c.id === id);
  if (foundTournament) {
    const enrichedTournament = {
      ...foundTournament,
      user: user.filter((d) => foundTournament.user.includes(d.id)),
      ngonNguLapTrinh: ngonNgulapTrinh.find((d) => foundTournament.ngonNguLapTrinh === d.id),
    };
    return [200, enrichedTournament];
  } else {
    return [404, {}];
  }
});

mock.onPost('/api/DeleteUserInGiaiDau').reply((config) => {
  const { giaiDauId, userId } = config.params;
  if (giaiDauId === undefined || userId === undefined) {
    return [400, {}];
  }
  const foundTournament = tournament.find((c) => c.id === giaiDauId);
  if (foundTournament) {
    if (foundTournament.user) {
      foundTournament.user = foundTournament.user.filter((c) => c !== userId);
      const enrichedTournament = {
        ...foundTournament,
        user: user.filter((d) => foundTournament.user.includes(d.id)),
        ngonNgulapTrinh: ngonNgulapTrinh.find((d) => foundTournament.ngonNguLapTrinh === d.id),
      };
      return [200, enrichedTournament];
    } else {
      return [400, {}];
    }
  } else {
    return [404, {}];
  }
});

mock.onPost('/api/GiaiDau').reply((config) => {
  try {
    const { loaiGiaiDau } = config.params;
    if (loaiGiaiDau === undefined) {
      return [400, {}];
    }
    const receivedObject = JSON.parse(config.data);
    if (![2, 3].includes(loaiGiaiDau)) {
      return [400, { error: 'Invalid loaiGiaiDau value.' }];
    }
    const loaiGiaiDauToGioiHan = {
      2: 2,
      3: 1,
    };
    receivedObject.gioiHanSoDoiThu = loaiGiaiDauToGioiHan[loaiGiaiDau];
    receivedObject.id = Math.max(...tournament.map((c) => c.id)) + 1;
    tournament.push(receivedObject);
    return [200, receivedObject];
  } catch (error) {
    console.error(error);
    return [500, { error: 'Internal Server Error.' }];
  }
});
