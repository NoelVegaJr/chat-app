import React from 'react';
import type { NextPage } from 'next';
import NamespacePicker from '../components/Namespaces/NamespacePicker';
import RoomsPicker from '../components/Rooms/RoomsPicker';
import Sidebar from '../components/Sidebar';
import Chat from '../components/ChatWindow/Chat';
import MainNav from '../ui/MainNav';

const ChatPage: NextPage = () => {
  return (
    <>
      <div className='flex h-screen flex-col'>
        <MainNav />
        <main className='flex grow'>
          <Sidebar>
            <NamespacePicker />
            <RoomsPicker />
          </Sidebar>
          <Chat />
        </main>
      </div>
    </>
  );
};

export default ChatPage;
