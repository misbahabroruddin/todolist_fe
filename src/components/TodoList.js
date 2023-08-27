import React from 'react';
import Modal from './Modal';
import { fetchTodoById } from '@/api';

function TodoList({
  data,
  handleChangeStatus,
  handleDelete,
  showModal,
  setShowModal,
}) {
  return (
    <div className='mt-24'>
      {data?.map((todo) => (
        <div
          className='flex w-full gap-6 items-center border-b-2 px-12 py-8'
          key={todo.id}
        >
          <input
            type='checkbox'
            name='status'
            id='status'
            defaultChecked={todo?.status}
            onChange={(e) => handleChangeStatus(todo.id, e.target.checked)}
          />
          <p className='text-xl basis-[20%] grow'>{todo?.task}</p>
          <p className='basis-[20%] grow'>{todo?.description} </p>
          <div className='flex  items-center text-center gap-3 basis-[20%] grow'>
            {todo?.priority === 'low' ? (
              <div className={`rounded-full w-3 h-3 bg-green-500 `}></div>
            ) : todo?.priority === 'medium' ? (
              <div className={`rounded-full w-3 h-3 bg-blue-500 `}></div>
            ) : (
              <div className={`rounded-full w-3 h-3 bg-red-500 `}></div>
            )}
            <p className='font-semibold'>
              {`${todo?.priority.toUpperCase()} PRIORITY`}
            </p>
          </div>
          <div className='flex justify-center basis-[20%] grow'>
            <p className='rounded-full w-fit h-fit border border-[#3F2305] px-3 py-1 text-[#3F2305]'>
              {todo?.status ? 'Completed' : 'In Progress'}
            </p>
          </div>
          <div className='flex justify-end gap-x-2 basis-[20%] grow '>
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              onClick={async () => {
                setShowModal(true);
                await fetchTodoById(todo.id);
              }}
            />
            <button
              className='rounded-full w-fit h-fit border border-[#3F2305] px-3 py-1 text-[#3F2305]'
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
