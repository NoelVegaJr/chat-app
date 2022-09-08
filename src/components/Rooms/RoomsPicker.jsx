import { useState } from 'react';
import ChannelsList from './RoomsList';

const ChannelsPicker = () => {
  const [expandChannels, setExpandChannels] = useState(true);

  return (
    <>
    <div>

      <button
        onClick={(e) => setExpandChannels(!expandChannels)}
        className='flex w-full items-center gap-2 border-t border-t-slate-600 p-4 text-xs text-slate-300 sm:text-lg'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className={`h-4 w-4 fill-slate-400 ${!expandChannels && '-rotate-90'} transition-all duration-300`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          />
        </svg>
        <p>Rooms</p>
      </button>
      {expandChannels && <ChannelsList />}
    </div>
    </>
  );
};

export default ChannelsPicker;
