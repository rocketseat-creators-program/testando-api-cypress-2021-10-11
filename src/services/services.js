import api from './api';

const listarUsuarios = async () => {
  const response = await api.get('/users');
  const { data } = await response;
  return data;
}

const adicionarTarefa = async ({ tarefa }) => {
  try {
    const resp = await api.post('/todos', tarefa);
    console.log(resp.data);
} catch (err) {
    // Handle Error Here
    console.error(err);
}
}

export {
  listarUsuarios,
  adicionarTarefa
};
