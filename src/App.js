import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';
import { adicionarTarefa, listarTarefas } from './services/services';

function App() {
  // const [todoValue, setTodoValue] = useState('')
  const [tarefas, setTarefas] = useState([])
  const [tarefa, setTarefa] = useState('')
  const [tarefasAdicionadas, setTarefasAdicionadas] = useState([])

  const getTasks = (limit = 10) => {
    listarTarefas(limit).then((tasks) => setTarefas([...tasks, ...tarefasAdicionadas]))
  }

  const setTasks = (task) => {
    const newTask = {
      userId: 7,
      title: task,
      completed: false
    }
    adicionarTarefa(newTask).then((newtasks) => {
      setTarefasAdicionadas([...tarefasAdicionadas, newTask])
    })
    setTarefa('')
  }

  useEffect(() => {
    getTasks()
  }, [tarefas])


  return (
    <div className="App">
      <div className="results">
       <ListGroup>
          {tarefas.length ?
            tarefas.map((usuario) => (
              <ListGroup.Item key={Math.random()}>{usuario.title}</ListGroup.Item>
            )) :
            <ListGroup.Item variant="warning">Nenhuma tarefa</ListGroup.Item>}

        </ListGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Coloque uma tarefa"
            aria-label="Campo de texto: coloque uma tarefa"
            aria-describedby="basic-addon2"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            data-cy="input-tarefa"
          />
          <Button data-cy="botao-tarefa" variant="info" id="button-addon2" onClick={() => setTasks(tarefa)}>
            Adicionar Tarefa
          </Button>
        </InputGroup>

        <Button onClick={() => getTasks()} variant="primary">Listar Tarefas</Button>
      </div>
    </div>
  );
}

export default App;
