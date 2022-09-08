const ChatTitle = ({ title }) => {
  return (
    <header className='chat-title p-2 md:px-4 md:py-5  bg-slate-100 w-full border-b '>
      <button className=' text-xl font-bold hover:bg-zinc-200/40 p-2 rounded-lg transition-all duration-100 flex items-center gap-2 h-full'>
        # {title}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-3 h-3'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          />
        </svg>
      </button>
    </header>
  );
};

export default ChatTitle;