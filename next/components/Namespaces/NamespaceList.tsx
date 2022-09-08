import React, { MouseEventHandler, useState } from 'react';

import NewNamespaceForm from './NewNamespaceForm';

const Overlay = ({ onClick }: { onClick: any }): JSX.Element => (
  <div onClick={onClick} className='fixed top-0 z-10  h-screen w-screen '></div>
);

const NamespaceList = ({
  onClose,
  namespaces,
  isLoading,
}: {
  onClose: Function;
  namespaces: { id: number; name: string }[];
  isLoading: boolean;
}) => {
  const [addingNewNamespace, setAddingNewNamespace] = useState(false);

  const toggleAddingNewNamespace = () => {
    setAddingNewNamespace(!addingNewNamespace);
  };

  const listOfNamespaces = namespaces.map((namespace) => {
    return (
      <li key={Math.random()}>
        <p className='md:text-md p-4 text-xs   transition-all   duration-100 hover:scale-105 hover:bg-zinc-100/40 hover:pl-6 lg:text-lg   '>
          {namespace.name}
        </p>
      </li>
    );
  });

  return (
    <>
      <Overlay onClick={onClose} />
      <div className='top-13 absolute -right-5 z-50  w-44 cursor-pointer overflow-hidden rounded-lg bg-white drop-shadow-2xl md:w-56'>
        {isLoading ? (
          <p>Loading namespaces</p>
        ) : (
          <ul className={`divide-y  md:-right-16`}>{listOfNamespaces}</ul>
        )}
        {!addingNewNamespace ? (
          <button
            onClick={toggleAddingNewNamespace}
            className='group w-full bg-green-600/90  p-4 text-sm text-white transition-all duration-200 hover:bg-green-600 '
          >
            <p className='h-full w-full transition-all duration-300 group-hover:scale-105'>
              {' '}
              + New Namespace
            </p>
          </button>
        ) : (
          <NewNamespaceForm onClose={toggleAddingNewNamespace} />
        )}
      </div>
    </>
  );
};

export default NamespaceList;
