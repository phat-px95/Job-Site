// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './src/pages/home-page/HomePage';
import MainLayout from './src/layouts/main-layout/MainLayout';
import { Suspense, lazy } from 'react';
import NotFoundPage from './src/pages/not-found-page/NotFoundPage';
import JobDetailPage, { jobDataLoader } from './src/pages/job-detail-page/JobDetailPage';

// import NxWelcome from './nx-welcome';

const JobsPage = lazy(() => import('./src/pages/jobs-page/JobsPage'));
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' Component={MainLayout}>
      <Route index element={<HomePage />}></Route>,
      <Route path='/jobs' element={<Suspense fallback={<>...</>}><JobsPage /></Suspense>}></Route>
      <Route path='/jobs/:id' element={<Suspense fallback={<>...</>}><JobDetailPage /></Suspense>} loader={jobDataLoader}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Route>

    )
);
export function App() {

  return <RouterProvider router={router}/>;
}

export default App;
