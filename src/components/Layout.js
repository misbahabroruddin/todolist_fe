import React from 'react';

function Layout({ children }) {
  return (
    <main className='h-screen px-10 pt-28 pb-10'>
      <div className='h-full w-full flex bg-[#f7f3f3] drop-shadow-[6px_6px_10px_rgba(0,0,0,0.2)] rounded-lg overflow-hidden'>
        <div className='flex flex-col w-full overflow-auto'>{children}</div>
      </div>
    </main>
  );
}

export default Layout;
