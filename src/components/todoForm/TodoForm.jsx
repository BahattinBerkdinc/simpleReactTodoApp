import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        placeholder="Todo giriniz"
        type="text"
        value={todo}
        onChange={handleChange}
        className='mb-5'
      />
      <Button type="submit">Ekle</Button>
    </Form>
  );
};

export default TodoForm;