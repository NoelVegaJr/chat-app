import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const NewRoomForm = ({ onClose }) => {
  const [newRoomName, setNewRoomName] = useState('');
  const queryClient = useQueryClient();
  const mutation = useMutation(insertNewRoom, {
    onSuccess: async () => {
      await queryClient.cancelQueries(['rooms']);
      // Create optimistic todo
      onClose();
      // Add optimistic todo to todos list
      queryClient.invalidateQueries('rooms');
    },
  });

  async function insertNewRoom() {
    try {
      const response = await fetch('http://localhost:9000/api/rooms', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newRoomName }),
      });
      const data = await response.json();
      setNewRoomName('');
    } catch (err) {
      console.log(err);
    }
  }
  const handleCreateNewNamespace = async (e) => {
    console.log('creating new namespace');
    e.preventDefault();
    mutation.mutate();
  };
  return (
    <div>
      <form onSubmit={handleCreateNewNamespace} className='bg-zinc-100 p-2'>
        <input
          value={newRoomName}
          onChange={(e) => setNewRoomName(e.target.value)}
          className='w-full border-b border-b-green-600/90 bg-transparent p-2 text-slate-900 placeholder-slate-900 outline-none  placeholder:text-xs'
          type='text'
          placeholder='Enter room'
        />
      </form>
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
    </div>
  );
};

export default NewRoomForm;
