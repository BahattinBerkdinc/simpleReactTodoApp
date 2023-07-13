import React, { useState } from 'react'
import './style.scss'
import TodosItem from "../todosItem/TodosItem"
import TodoForm from "../todoForm/TodoForm"
import { Button, Col, Container, Row } from 'react-bootstrap'
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'uncompleted') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <Container className='d-flex flex-column  gap-5 mt-5 text-center'>
      <TodoForm addTodo={addTodo} />
      <Button variant="primary" onClick={() => setFilter('all')}>
        Show All
      </Button>
      <Button variant="primary" onClick={() => setFilter('completed')}>
        Show Completed
      </Button>
      <Button variant="primary" onClick={() => setFilter('uncompleted')}>
        Show Uncompleted
      </Button>
      <Row>
      {filteredTodos.map((todo, index) => (
        <Col md={4} lg={3} key={index}>
        <TodosItem 
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
        </Col>
      ))}
      </Row>
    </Container>
  );
}

export default Todos
