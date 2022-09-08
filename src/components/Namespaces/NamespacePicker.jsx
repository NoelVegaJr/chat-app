import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import NamespaceList from './NamespaceList';

const NamespacePicker = () => {
  const [pickingNamespace, setPickingNamespace] = useState(false);
  const {
    isLoading,
    isError,
    data: namespaces,
  } = useQuery(['namespaces'], getNamespaces);

  const handleCloseNamespacePicker = () => {
    console.log('Picking namespace');
    setPickingNamespace(false);
  };

  const handleOpenNamespacePicker = () => {
    console.log('Picking namespace');
    setPickingNamespace(true);
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
          <NamespaceList
            namespaces={namespaces}
            onClose={handleCloseNamespacePicker}
          />
        )}
      </div>
    </>
  );
};

async function getNamespaces() {
  try {
    console.log('Getting namespaces');
    const response = await fetch(`http://localhost:9000/api/namespaces`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default NamespacePicker;
