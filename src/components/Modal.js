import React, { useState } from 'react';

export default function Modal({ onClick, showModal, setShowModal }) {
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
    <>
      <button
        className='rounded-full w-fit h-fit border border-[#3F2305] px-3 py-1 text-[#3F2305]'
        type='button'
        onClick={onClick}
      >
        Edit
      </button>
      {showModal && (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto w-5xl'>
              {/*content*/}
              <div className='p-5 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>Modal Title</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className=' text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      x
                    </span>
                  </button>
                </div>
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
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      )}
    </>
  );
}
