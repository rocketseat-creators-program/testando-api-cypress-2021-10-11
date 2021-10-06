import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';
import { listarUsuarios } from './services/tarefas';

function App() {
  // const [todoValue, setTodoValue] = useState('')
  const [usuarios, setUsuarios] = useState([])

  const getUsers = () => {
    listarUsuarios().then((users) => setUsuarios(users))
  }

  return (
    <div className="App">
      <div className="results">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Coloque uma tarefa"
            aria-label="Campo de texto: coloque uma tarefa"
            aria-describedby="basic-addon2"
          />
          <Button variant="info" id="button-addon2" onClick={() => getUsers()}>
            Enviar
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
