import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';
import { adicionarTarefa, listarUsuarios } from './services/services';

function App() {
  // const [todoValue, setTodoValue] = useState('')
  const [usuarios, setUsuarios] = useState([])
  const [tarefa, setTarefa] = useState('')
  const [tarefasAdicionadas, setTarefasAdicionadas] = useState([])

  const getUsers = () => {
    listarUsuarios().then((users) => setUsuarios(users))
  }

  const setTasks = (task) => {
    const newTask = {
      userId: 7,
      title: task,
      completed: false
    }
    adicionarTarefa(newTask).then((newtasks) => {setTarefasAdicionadas([...tarefasAdicionadas, newTask])
    console.log(newtasks)})
    
  }

  return (
    <div className="App">
      <div className="results">
      <ListGroup>
          {tarefasAdicionadas.length ?
            tarefasAdicionadas.map((usuario) => (
              <ListGroup.Item key={Math.random()}>{usuario.title}</ListGroup.Item>
            )) :
            <ListGroup.Item variant="warning">Nenhuma tarefa</ListGroup.Item>}

        </ListGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Coloque uma tarefa"
            aria-label="Campo de texto: coloque uma tarefa"
            aria-describedby="basic-addon2"
            onChange={(e) => setTarefa(e.target.value)}
          />
          <Button variant="info" id="button-addon2" onClick={() => setTasks(tarefa)}>
            Adicionar Tarefa
          </Button>
        </InputGroup>

        <ListGroup>
          {usuarios.length ?
            usuarios.map((usuario) => (
              <ListGroup.Item key={Math.random()}>{usuario.name}</ListGroup.Item>
            )) :
            <ListGroup.Item variant="info">Nenhum usuário</ListGroup.Item>}

        </ListGroup>
        <Button onClick={() => getUsers()} variant="primary">Listar Usuários</Button>
      </div>
    </div>
  );
}

export default App;
