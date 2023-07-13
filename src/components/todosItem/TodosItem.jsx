import React from 'react'
import './style.scss'
import { Button, Card, Form } from 'react-bootstrap'
const TodosItem = ({todo,deleteTodo, index,toggleTodo}) => {
  const handleDelete = () => {
    deleteTodo(index);
  };

  const handleToggle = () => {
    toggleTodo(index);
  };

  return (
    <Card>
      <Card.Body className='d-flex flex-column align-items-center gap-5'>
        <Card.Text>{todo.text}</Card.Text>
        <Form.Check
          type="switch"
          id={`todo-switch-${index}`}
          label="Completed"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <Button variant="danger" onClick={handleDelete}>
          Sil
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodosItem
