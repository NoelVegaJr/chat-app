import React from 'react'
import NewRoomForm from './NewRoomForm'
const RoomsList = () => {
  return (
    <ul className="bg-slate-600 rounded-lg ">
      <li className="p-2 text-slate-300 hover:text-yellow-300  cursor-pointer">#  Room 1</li>
      <li className="p-2 text-slate-300 hover:text-yellow-300  cursor-pointer">#  Room 2</li>
      <li className="p-2 text-slate-300 hover:text-yellow-300  cursor-pointer">#  Room 3</li>
      <NewRoomForm/>
    </ul>
  )
}

export default RoomsList