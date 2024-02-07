import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function Root() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
