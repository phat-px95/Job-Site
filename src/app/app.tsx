// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './src/pages/home-page/HomePage';
import MainLayout from './src/layouts/main-layout/MainLayout';
import { Suspense, lazy } from 'react';
import NotFoundPage from './src/pages/not-found-page/NotFoundPage';
import JobDetailPage, { jobDataLoader } from './src/pages/job-detail-page/JobDetailPage';
import JobAddingPage, { countryDataLoader } from './src/pages/job-adding-page/JobAddingPage';
import { Job } from './src/components/job-listing/JobListing';
import JobEditingPage from './src/pages/job-editing-page/JobEditingPage';

// import NxWelcome from './nx-welcome';

export function App() {
  // Add New Job
  const addJob = async (newJob: Job) => {
    const res = await fetch(`api/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    
  };

  const editJob = async (job: Job) => {
    const res = await fetch(`api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
  };

  const deleteJob = async (id: string) => {
    const res = await fetch(`api/jobs/${id}`, {
      method: 'DELETE'
    });
  };
  const JobsPage = lazy(() => import('./src/pages/jobs-page/JobsPage'));
  const router = createBrowserRouter(
    createRoutesFromElements(
  
      <Route path='/' Component={MainLayout}>
        <Route index element={<HomePage />}></Route>,
        <Route path='/jobs' element={<Suspense fallback={<>...</>}><JobsPage /></Suspense>}></Route>
        <Route path='/add-job' element={<JobAddingPage addSubmittedJob={addJob} />} loader={countryDataLoader}></Route>
        <Route path='/edit-job/:id' element={<JobEditingPage addSubmittedJob={editJob}/>} loader={jobDataLoader}></Route>
        <Route path='/jobs/:id' element={<Suspense fallback={<>...</>}><JobDetailPage deleteJob={deleteJob}/></Suspense>} loader={jobDataLoader}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Route>
  
      )
  );
  return <RouterProvider router={router}/>;
}

export default App;
