
import { useQuery } from '@tanstack/react-query';
import NamespacePicker from './NamespacePicker/NamespacePicker';

// const namespaces = [
//   'Namespace 1',
//   'Namespace 2',
//   'Namespace 3',
//   'Namespace 4',
//   'Namespace 5',
//   'Namespace 6',
// ];




const ChannelsPicker = () => {

  return (
    <>
      <button className='text-xs sm:text-lg flex items-center w-full text-slate-400 border-t border-t-slate-600 p-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='w-4 h-4 fill-slate-400'
        >
          <path d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>

        <p>Channels</p>
      </button>
    </>
  );
};


async function getNamespaces() {
  try {
    console.log('Getting namespaces');
    const response = await fetch(`http://localhost:9000/api/namespaces`);
    const data = await response.json();
    return data

  } catch(err) {
    console.log(err);
  }
  
}


const Sidebar = ({ className }) => {
  const {isLoading, isError, data: namespaces} = useQuery(['namesaces'], getNamespaces)
  console.log(namespaces)
  if(isLoading) {
    return <p>Loading</p>
  }
  if(isError) {
    return <p>Error</p>
  }
  return (
    <div className={`bg-slate-800 ${className}`}>
      <NamespacePicker namespaces={namespaces} />
      <ChannelsPicker />
    </div>
  );
};

export default Sidebar;
