import { useState } from 'react';

const namespaces = [
  'Namespace 1',
  'Namespace 2',
  'Namespace 3',
  'Namespace 4',
  'Namespace 5',
  'Namespace 6',
];

const NamespacePicker = ({ namespaces }) => {
  const [pickingNamespace, setPickingNamespace] = useState(false);
  const [addingNewNamespace, setAddingNewNamespace] = useState(false);
  const namespaceList = namespaces.map((namespace) => {
    return (
      <li key={Math.random()}>
        <p className='hover:scale-105   p-4 hover:pl-6 hover:bg-zinc-200/40 transition-all  duration-200   '>
          {namespace}
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
    setAddingNewNamespace(false)
  };

  const toggleAddingNewNamespace = () => {
    console.log('creating new namespace');
    console.log('show form');
    setAddingNewNamespace(!addingNewNamespace);
  };

  const handleCreateNewNamespace = (e) => {
    toggleAddingNewNamespace()
    e.preventDefault();
    console.log("creating new namespace")
  }

  return (
    <>
      <div className='relative'>
        <button
          onClick={handleOpenNamespacePicker}
          className='p-4 flex items-center gap-2 cursor-pointer w-full hover:bg-slate-900 border-t border-t-slate-600 transition-all ease-in-out duration-300'
        >
          <h2 className=' font-bold text-white text-xl'>Testing</h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4 text-white'
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
            className='fixed top-0 z-10  w-screen h-screen '
          ></div>
        )}
        <div className='relative'>
          <ul
            className={`bg-white absolute -right-5 top-13 w-full  rounded-xl drop-shadow-2xl divide-y overflow-hidden cursor-pointer z-50 opacity-0 ${
              pickingNamespace &&
              'opacity-100 transition-opacity ease-in-out duration-600'
            } `}
          >
            {namespaceList}
            {!addingNewNamespace ? 
              <button
                onClick={toggleAddingNewNamespace}
                className='group p-2 text-sm  w-full text-white bg-green-600/90 hover:bg-green-600 transition-all duration-300 '
              >
                <p className='group-hover:scale-105 transition-all duration-300 h-full w-full'>
                  {' '}
                  + New Namespace
                </p>
              </button> : (
              <form className='p-2 bg-zinc-100 flex'>

                <input className="bg-transparent w-3/4 placeholder-slate-900 outline-none border-b border-b-green-600/90 text-slate-900  p-2" type="text" placeholder="Enter new namespace" />
                <div className="flex justify-evenly gap-2 w-1/4">
                  <button type="submit" onClick={handleCreateNewNamespace} className="hover:bg-slate-">✔</button>
                  <button onClick={toggleAddingNewNamespace}>❌</button>
                </div>

              </form>)
            }
          </ul>
        </div>
      </div>
      
    </>
  );
};

const ChannelsPicker = () => {
  return (
    <>
      <button className='flex items-center w-full text-slate-400 border-t border-t-slate-600 p-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='w-4 h-4 fill-slate-400'
        >
          <path d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>

        <p>Channels</p>
      </button>
    </>
  );
};

const Sidebar = ({ className }) => {
  return (
    <div className={`bg-slate-800 ${className} `}>
      <NamespacePicker namespaces={namespaces} />
      <ChannelsPicker />
    </div>
  );
};

export default Sidebar;
