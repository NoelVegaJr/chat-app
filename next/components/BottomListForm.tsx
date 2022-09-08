import React, { useState } from 'react';

const BottomListForm = ({
  onSubmit,
  onClose,
}: {
  onSubmit: (e: any) => Promise<void>;
  onClose: () => void;
}) => {
  const [name, setName] = useState('');
  return (
    <form onSubmit={onSubmit} className='rounded-lg bg-zinc-100'>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='w-full border-b border-b-green-600/90 bg-transparent p-4 text-slate-900 placeholder-slate-900 outline-none  placeholder:text-xs'
        type='text'
        placeholder='Enter room'
      />
      <div className='flex'>
        <button
          type='submit'
          className='flex w-1/2 justify-center p-2 text-5xl font-bold text-green-600 hover:bg-green-500/20'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={4}
            stroke='currentColor'
            className='h-6 w-6 drop-shadow-2xl'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 12.75l6 6 9-13.5'
            />
          </svg>
        </button>

        <button
          onClick={onClose}
          className='flex w-1/2 justify-center p-2 text-5xl font-bold text-red-600 hover:bg-red-700/20'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={4}
            stroke='currentColor'
            className='h-6 w-6 drop-shadow-2xl'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default BottomListForm;
