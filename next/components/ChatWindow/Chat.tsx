import internal from 'stream';
import ChatInput from './ChatInput';
import ChatTitle from './ChatTitle';

const Message = ({ text }: { text: string }) => {
  return (
    <div className='border-t border-t-slate-200 p-6'>
      <header className=' mb-2 flex gap-2'>
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
            d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>

        <div className='gap flex'>
          <p className=' font-bold'>Noel Vega</p>
          <span className=''>{'1/1/2001'}</span>
        </div>
      </header>
      <p>{text}</p>
    </div>
  );
};

const MessagesContainer = ({
  children,
  className,
}: {
  children: JSX.Element;
  className: string;
}) => {
  return <div className={`${className}`}>{children}</div>;
};

const Messages = ({
  messages,
}: {
  messages: { id: number; text: string }[];
}) => {
  const listOfMessages = messages.map((m) => {
    return (
      <li key={m.id}>
        <Message text={m.text} />
      </li>
    );
  });
  return <ul className='messages-container w-full '>{listOfMessages}</ul>;
};

const ChatWindow = ({
  children,
  className,
}: {
  children: JSX.Element[];
  className: string;
}) => {
  return (
    <div className={`chat-window bg-slate-100 ${className}   relative `}>
      {children}
    </div>
  );
};

const messages = [
  { id: 1, text: "Let'g get this money 🔥" },
  { id: 2, text: "Let'g get this money 🔥" },
  { id: 3, text: "Let'g get this money 🔥" },
];

const Chat = () => {
  return (
    <ChatWindow className='flex h-full w-full flex-col'>
      <ChatTitle title={'Test'} />
      <div></div>
      <MessagesContainer className='h-0  grow overflow-y-auto '>
        <Messages messages={messages} />
      </MessagesContainer>
      <ChatInput />
    </ChatWindow>
  );
};

export default Chat;
