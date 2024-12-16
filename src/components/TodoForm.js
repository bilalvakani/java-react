// import React, { useState } from 'react';

// const TodoForm = ({ addTodo }) => {
//   const [description, setDescription] = useState('');
//   const [completed, setCompleted] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newTodo = { description, completed };
//     addTodo(newTodo);
//     setDescription('');
//     setCompleted(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Enter todo description"
//         required
//       />
//       <button type="submit">Add Todo</button>
//     </form>
//   );
// };

// export default TodoForm;
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = { description, completed };
    addTodo(newTodo);
    setDescription('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter todo description"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
