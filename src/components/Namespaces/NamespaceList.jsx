import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import NewNamespaceForm from './NewNamespaceForm';

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

const NamespaceList = ({ onClose }) => {
  const {
    isLoading,
    isError,
    data: namespaces,
  } = useQuery(['namespaces'], getNamespaces);
  const [addingNewNamespace, setAddingNewNamespace] = useState(false);

  const toggleAddingNewNamespace = () => {
    setAddingNewNamespace(!addingNewNamespace);
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const namespaceList = [];

  if (namespaces.length === 0) {

      const item = <li key={Math.random()}>
        <p className='md:text-md p-4 text-xs   transition-all   duration-200 hover:scale-105 hover:bg-zinc-200/40 hover:pl-6  lg:text-lg   '>
          0 namespaces
        </p>
      </li>
    namespaceList.push(item);
  }

  namespaces.map((namespace) => {
    const item = (
      <li key={Math.random()}>
        <p className='md:text-md p-4 text-xs   transition-all   duration-200 hover:scale-105 hover:bg-zinc-200/40 hover:pl-6  lg:text-lg   '>
          {namespace.name}
        </p>
      </li>
    );
    namespaceList.push(item);
  });

  return (
    <>
      <div
        onClick={onClose}
        className='fixed top-0 z-10  h-screen w-screen '
      ></div>
      <div className='relative w-44 md:w-52 '>
        <ul
          className={`top-13 absolute  -right-5 z-50 w-full cursor-pointer  divide-y overflow-hidden rounded-xl bg-white drop-shadow-2xl  md:-right-16`}
        >
          {isLoading || isError ? <p>Loading</p> : namespaceList}
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
            <NewNamespaceForm onClose={toggleAddingNewNamespace} />
          )}
        </ul>
      </div>
    </>
  );
};

export default NamespaceList;
