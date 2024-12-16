// // import React from 'react';

// // const TodoList = ({ todos }) => {
// //   return (
// //     <div>
// //       {todos.map(todo => (
// //         <div key={todo.id}>
// //           <h3>{todo.description}</h3>
// //           <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default TodoList;
// import React from 'react';
// import { deleteTodo } from './api';  // Importing the delete function

// const TodoList = ({ todos, setTodos }) => {
//   // Handle Delete Todo
//   const handleDelete = async (id) => {
//     try {
//       const response = await deleteTodo(id);
//       if (response.status === 200) {
//         // Remove todo from the list after successful deletion
//         setTodos(todos.filter(todo => todo.id !== id));
//       } else {
//         alert('Failed to delete todo');
//       }
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//       alert('Error deleting todo');
//     }
//   };

//   return (
//     <div>
//       {todos.map(todo => (
//         <div key={todo.id}>
//           <h3>{todo.description}</h3>
//           <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
//           <button onClick={() => handleDelete(todo.id)}>Delete</button> {/* Delete Button */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TodoList;
// import React from 'react';
// import { deleteTodo } from './api';  // Importing the delete function

// const TodoList = ({ todos, setTodos }) => {
//   // Handle Delete Todo
//   const handleDelete = async (id) => {
//     try {
//       const response = await deleteTodo(id);
//       if (response.status === 200) {
//         // Remove todo from the list after successful deletion
//         setTodos(todos.filter(todo => todo.id !== id));
//       } else {
//         alert('Failed to delete todo');
//       }
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//       alert('Error deleting todo');
//     }
//   };

//   return (
//     <div>
//       {todos.map(todo => (
//         <div key={todo.id}>
//           <h3>{todo.description}</h3>
//           <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
//           <button onClick={() => handleDelete(todo.id)}>Delete</button> {/* Delete Button */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TodoList;
import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <h3>{todo.description}</h3>
          <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button> {/* Delete button */}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
