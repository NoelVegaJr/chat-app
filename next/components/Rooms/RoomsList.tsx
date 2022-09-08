import React, { useState } from 'react';
import NewRoomForm from './NewRoomForm';
const RoomsList = () => {
  const [isAddingNewRoom, setIsAddingNewRoom] = useState(false);

  const handleToggleNewRoomForm = () => {
    setIsAddingNewRoom(!isAddingNewRoom);;
  };
  return (
    <div className='cursor-pointer'>
      <ul className=' rounded-lg '>
        <li className='p-2 text-slate-300 hover:text-yellow-300 '># Room 1</li>
        <li className='p-2 text-slate-300 hover:text-yellow-300'># Room 2</li>
        <li className='p-2 text-slate-300 hover:text-yellow-300 '># Room 3</li>
      </ul>
      {isAddingNewRoom ? (
        <div className="p-2">
          <NewRoomForm onClose={handleToggleNewRoomForm}/>
        </div>
      ) : (
        <button
          onClick={handleToggleNewRoomForm}
          className='p-2 text-slate-300 hover:text-yellow-300'
        >
          + Create Room
        </button>
      )}
    </div>
  );
};

export default RoomsList;
