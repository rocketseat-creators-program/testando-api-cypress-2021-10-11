import api from './api';

const listarTarefas = async (limit = 20) => {
  const response = await api.get(`/todos?_limit=${limit}`);
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
  listarTarefas,
  adicionarTarefa
};
