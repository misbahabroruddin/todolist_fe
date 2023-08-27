import { instance } from '@/axios';

export const fetchTodo = async () => {
  try {
    const { data } = await instance.get('/todos');
    return data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const fetchTodoById = async (id) => {
  try {
    const { data } = await instance.get(`/todos/${id}`);
    return data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updateTodoStatus = async (id, payload) => {
  try {
    const { data } = await instance.patch(`/todos/${id}`, { status: payload });
    return data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const postTodo = async (payload) => {
  try {
    const { data } = await instance.post('/todos', payload);
    return data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const deleteTodo = async (id) => {
  try {
    const { data } = await instance.delete(`/todos/${id}`);
    return data;
  } catch (error) {
    throw error.response.data.message;
  }
};
