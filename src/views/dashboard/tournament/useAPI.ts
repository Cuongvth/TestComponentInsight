import axios from 'axios';

export const loadUser = async () => {
  return await axios.get('/api/User');
};

export const loadUserOfTournament = async (id: number) => {
  return await axios.get('/api/GiaiDauById', { params: { id: id } });
};

export const deleteUserInGiaiDau = async (userId: number, giaiDauId: number) => {
  return await axios.post('/api/DeleteUserInGiaiDau', {}, { params: { userId: userId, giaiDauId: giaiDauId } });
};
