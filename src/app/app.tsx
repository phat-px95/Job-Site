// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './src/pages/home-page/HomePage';
import MainLayout from './src/layouts/main-layout/MainLayout';

// import NxWelcome from './nx-welcome';

const router = createBrowserRouter(
  createRoutesFromElements(
    [
      <Route path='/' Component={MainLayout}>
        <Route index Component={HomePage}></Route>,
        <Route path='/about' element= {<h1>About</h1>}></Route>
      </Route>,
    ])
);
export function App() {

  return <RouterProvider router={router}/>;
}

export default App;
