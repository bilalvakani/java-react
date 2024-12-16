// import React, { useState, useEffect } from 'react';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/todos')
//       .then(response => response.json())
//       .then(data => setTodos(data))
//       .catch(error => console.log(error));
//   }, []);

//   const addTodo = (newTodo) => {
//     fetch('http://localhost:8080/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newTodo),
//     })
//       .then(response => response.json())
//       .then(data => setTodos([...todos, data]))
//       .catch(error => console.log('Error adding todo:', error));
//   };

//   return (
//     <div className="App">
//       <h1>Todo List</h1>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todos={todos} />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.log(error));
  }, []);

  const addTodo = (newTodo) => {
    fetch('http://localhost:8080/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then(response => response.json())
      .then(data => setTodos([...todos, data]))
      .catch(error => console.log('Error adding todo:', error));
  };

  // Delete Todo function
  const deleteTodo = (id) => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the deleted todo from the state
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => console.log('Error deleting todo:', error));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} /> {/* Pass deleteTodo to TodoList */}
    </div>
  );
}

export default App;
