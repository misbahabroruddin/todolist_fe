import React from 'react';

function Header() {
  return (
    <header className='relative'>
      {/* navbar */}
      <nav className='flex h- w-full h-20 fixed top-0 z-1 px-20 bg-[#F2EAD3] shadow-lg'>
        <div className='flex justify-between items-center w-full'>
          <div className=''>
            <p className='text-2xl font-bold'>To Do List App</p>
          </div>
          <div className='flex gap-4 items-center'>
            <img
              src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
              alt='profile'
              className='w-8 h-8 rounded-full'
            />
            <p>@User</p>
          </div>
        </div>
      </nav>
      {/* sidebar */}
      {/* <aside className='bg-[#F2EAD3] w-32 h-screen fixed top-0 left-0 flex fle-col drop-shadow-lg z-2'>
        <div className='h-20 w-full'>
          <h1>To Do List</h1>
        </div>
      </aside> */}
    </header>
  );
}

export default Header;
