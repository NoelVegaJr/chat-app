const ChatInput = () => {
  return (
    <div className='sm:px-8 sm:py-4  w-full bg-slate-100 '>
      <form className=' flex gap-2 border p-2 rounded-xl hover:border-slate-300 transition-all duration-300'>
        <input
          type='text'
          placeholder='Message'
          className='w-full md:text-lg outline-none bg-slate-50'
        />
        <button type='submit' className='bg-green-800 px-2 py-1 rounded-md'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 fill-white stroke-green-800'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;