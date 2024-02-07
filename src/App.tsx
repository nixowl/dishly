import { ThemeProvider } from 'next-themes';
import './globals.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Search from './pages/Search';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Favorites from './pages/Favorites';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <Home /> },
      { path: 'search', element: <Search /> },
      { path: 'favorites', element: <Favorites />}
    ]
  }
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
