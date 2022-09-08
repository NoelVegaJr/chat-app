import React from 'react';
import type { NextPage } from 'next';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Chat from '../components/ChatWindow/Chat';

const ChatPage: NextPage = () => {
  return (
    <>
      <div className='app flex h-screen flex-col'>
        <Header className='h-10 md:h-16' />
        <div className='flex grow'>
          <Sidebar className='w-40 sm:w-80' />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
