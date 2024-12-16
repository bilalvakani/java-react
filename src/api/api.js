// // import axios from 'axios';

// // const API_URL = 'http://localhost:8080/todos';

// // export const fetchTodos = async () => {
// //   try {
// //     const response = await axios.get(API_URL);
// //     return response.data;
// //   } catch (error) {
// //     console.error('Error fetching todos:', error);
// //   }
// // };

// // export const createTodo = async (todo) => {
// //   try {
// //     const response = await axios.post(API_URL, todo);
// //     return response.data;
// //   } catch (error) {
// //     console.error('Error adding todo:', error);
// //   }
// // };
// import axios from 'axios';

// const API_URL = 'http://localhost:8080/todos';

// export const fetchTodos = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching todos:', error);
//   }
// };

// export const createTodo = async (todo) => {
//   try {
//     const response = await axios.post(API_URL, todo);
//     return response.data;
//   } catch (error) {
//     console.error('Error adding todo:', error);
//   }
// };

// // New deleteTodo function
// export const deleteTodo = async (id) => {
//   try {
//     const response = await axios.delete(`${API_URL}/${id}`);
//     return response;
//   } catch (error) {
//     console.error('Error deleting todo:', error);
//     throw error; // Rethrow the error for handling in the calling function
//   }
// };
