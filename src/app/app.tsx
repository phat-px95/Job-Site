// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './src/pages/home-page/HomePage';
import MainLayout from './src/layouts/main-layout/MainLayout';
import { Suspense, lazy } from 'react';
import NotFoundPage from './src/pages/not-found-page/NotFoundPage';

// import NxWelcome from './nx-welcome';

const JobPage = lazy(() => import('./src/pages/job-page/JobPage'));
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' Component={MainLayout}>
      <Route index element={<HomePage />}></Route>,
      <Route path='/jobs' element={<Suspense fallback={<>...</>}><JobPage /></Suspense>}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Route>

    )
);
export function App() {

  return <RouterProvider router={router}/>;
}

export default App;
