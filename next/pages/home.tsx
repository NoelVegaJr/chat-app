import Sidebar from '../components/Sidebar';
import Navbar from '../components/navbar';
import Screen from '../ui/screen';
import MainNav from '../ui/MainNav';
const HomePage = () => {
  return (
    <Screen className=' bg-red-300'>
      <MainNav />
      <main className=''>
        <div className='bg-green-300'>
          <header className='p-12'>
            <h1 className='text-6xl text-white text-center'>
              Working remote made seamless
            </h1>
          </header>
        </div>
      </main>
    </Screen>
  );
};

export default HomePage;
