import api from './api';

const listarUsuarios = async () => {
  const response = await api.get('/users');
  const { data } = await response;
  return data;
}

export {
  listarUsuarios
};
