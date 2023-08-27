import { useEffect, useState } from 'react';
import { fetchTodo, updateTodoStatus, deleteTodo, fetchTodoById } from '@/api';
import TodoList from '@/components/TodoList';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import AddTask from '@/components/AddTask';

export default function Home() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [toggleAddForm, setToggleAddForm] = useState(false);
  const [toggleEditForm, setToggleEditForm] = useState(false);

  const getTodos = async () => {
    try {
      const todos = await fetchTodo();
      setData(todos.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleChangeStatus = async (id, payload) => {
    try {
      await updateTodoStatus(id, payload);
      getTodos();
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      getTodos();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, [id]);
  return (
    <>
      <Header />
      <Layout>
        <div className='flex justify-between w-full items-center border-b-2 px-12 py-8 fixed top-0 bg-[#f7f3f3]'>
          {toggleAddForm ? (
            <AddTask toggle={setToggleAddForm} fetch={getTodos} />
          ) : (
            <>
              <h2 className='text-2xl'>All Tasks</h2>
              <button
                className='border-2 border-[#3F2305]  text-semibold rounded-full px-4 py-1 hover:border-transparent hover:bg-[#3F2305] hover:text-white'
                onClick={() => setToggleAddForm(true)}
              >
                Add Task
              </button>
            </>
          )}
        </div>
        {data?.length === 0 ? (
          <div className='flex justify-center items-center w-full h-full text-center'>
            <h2 className='text-4xl font-bold letter'>No Task</h2>
          </div>
        ) : (
          <TodoList
            data={data}
            handleChangeStatus={handleChangeStatus}
            handleDelete={handleDelete}
            setData={setData}
            d
            setShowModal={setToggleEditForm}
            showModal={toggleEditForm}
            setId={setId}
          />
        )}
      </Layout>
    </>
  );
}
