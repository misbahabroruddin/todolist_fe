import { postTodo } from '@/api';
import React, { useState } from 'react';

function EditTask({ toggle, fetch, isEditing }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { task, description, priority };
      toggle(false);
      const { message } = await postTodo(data);
      alert(message);
      fetch();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='flex gap-2 items-center w-full px-12 py-8'>
      <form className='flex w-full' onSubmit={handleSubmit}>
        <input
          type='text'
          className='px-4 py-2 rounded-xl mr-2 grow'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          defaultValue={task}
          placeholder='Tittle'
          required
        />
        <input
          type='text'
          className='px-4 py-2 rounded-xl mr-2 grow'
          value={description}
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Description'
          required
        />
        <select
          className='bg-white px-4 py-2 rounded-xl bg- mr-2 grow'
          name='prioriy'
          id='priority'
          defaultValue={priority}
          onChange={(e) => setPriority(e.target.value)}
          placeholder='Select Priority'
          required
        >
          <option className='bg-[#f7f3f3]' value='' selected disabled>
            Select Priority
          </option>
          <option className='bg-[#f7f3f3]' value='low'>
            Low
          </option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
        <button className='w-24 h-fit text-white border-2 border-transparent bg-[#3F2305]  font-semibold rounded-full px-4 py-1 hover:border-[#3F2305] hover:bg-transparent hover:text-[#3F2305]'>
          Add
        </button>
      </form>
      <button
        className='w-24 h-fit text-white border-2 border-transparent bg-[#3F2305]  font-semibold rounded-full px-4 py-1 hover:border-[#3F2305] hover:bg-transparent hover:text-[#3F2305]'
        onClick={{ isEditing: false }}
      >
        Cancel
      </button>
    </div>
  );
}

export default EditTask;
