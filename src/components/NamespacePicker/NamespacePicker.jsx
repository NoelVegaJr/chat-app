import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const NamespacePicker = ({ namespaces }) => {
  const [pickingNamespace, setPickingNamespace] = useState(false);
  const [addingNewNamespace, setAddingNewNamespace] = useState(false);
  const [newNamespaceName, setNewNamespaceName] = useState('');
  const queryClient = useQueryClient();
  const mutation = useMutation(insertNewNamespace, {

    onSuccess: async () => {
      await queryClient.cancelQueries(['namespaces']);
      // Create optimistic todo

      // Add optimistic todo to todos list
      queryClient.invalidateQueries('namespaces');
      toggleAddingNewNamespace();
    },
  });

  async function insertNewNamespace() {
    try {
      const response = await fetch('http://localhost:9000/api/namespaces', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newNamespaceName }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  const namespaceList = namespaces.map((namespace) => {
    return (
      <li key={Math.random()}>
        <p className='md:text-md p-4 text-xs   transition-all   duration-200 hover:scale-105 hover:bg-zinc-200/40 hover:pl-6  lg:text-lg   '>
          {namespace.name}
        </p>
      </li>
    );
  });

  const handleCloseNamespacePicker = () => {
    console.log('Picking namespace');
    setPickingNamespace(false);
  };

  const handleOpenNamespacePicker = () => {
    console.log('Picking namespace');
    setPickingNamespace(true);
    setAddingNewNamespace(false);
  };

  const toggleAddingNewNamespace = () => {
    console.log('creating new namespace');
    console.log('show form');
    setAddingNewNamespace(!addingNewNamespace);
    setNewNamespaceName('');
  };

  const handleCreateNewNamespace = async (e) => {
    console.log('creating new namespace');
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <>
      <div className='relative'>
        <button
          onClick={handleOpenNamespacePicker}
          className='flex w-full cursor-pointer items-center  gap-2 border-t border-t-slate-600 p-4 transition-all duration-300 ease-in-out hover:bg-slate-900'
        >
          <h2 className=' text-md font-bold text-white sm:text-xl'>Testing</h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-4 w-4 text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            />
          </svg>
        </button>

        {pickingNamespace && (
          <div
            onClick={handleCloseNamespacePicker}
            className='fixed top-0 z-10  h-screen w-screen '
          ></div>
        )}
        <div className='relative w-44 md:w-52 '>
          <ul
            className={`top-13 absolute  -right-5 z-50 w-full  cursor-pointer divide-y overflow-hidden rounded-xl bg-white opacity-0 drop-shadow-2xl ${
              pickingNamespace &&
              'duration-600 opacity-100 transition-opacity ease-in-out'
            } `}
          >
            {namespaceList}
            {!addingNewNamespace ? (
              <button
                onClick={toggleAddingNewNamespace}
                className='group w-full bg-green-600/90  p-2 text-sm text-white transition-all duration-300 hover:bg-green-600 '
              >
                <p className='h-full w-full transition-all duration-300 group-hover:scale-105'>
                  {' '}
                  + New Namespace
                </p>
              </button>
            ) : (
              <form
                onSubmit={handleCreateNewNamespace}
                className='bg-zinc-100 p-2'
              >
                <input
                  value={newNamespaceName}
                  onChange={(e) => setNewNamespaceName(e.target.value)}
                  className='w-full border-b border-b-green-600/90 bg-transparent p-2 text-slate-900 placeholder-slate-900 outline-none  placeholder:text-xs'
                  type='text'
                  placeholder='Enter namespace'
                />
                <div className='flex items-center justify-evenly gap-2'>
                  <div className=' w-1/2 pt-2 text-center'>
                    <button
                      type='submit'
                      className='text-5xl font-bold text-green-600'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>
                    </button>
                  </div>
                  <div className='w-1/2 pt-2 text-center'>
                    <button
                      onClick={toggleAddingNewNamespace}
                      className='text-5xl font-bold text-red-600'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-6 w-6'
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
              </form>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NamespacePicker;
