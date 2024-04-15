// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Hero from './src/components/hero/Hero';
import Homecards from './src/components/home-cards/HomeCards';
import JobListing from './src/components/job-listing/JobListing';
import Navbar from './src/components/nav/Navbar';
import ViewAllJobs from './src/components/view-all-jobs/ViewAllJobs';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './src/pages/home-page/HomePage';

// import NxWelcome from './nx-welcome';

const router = createBrowserRouter(
  createRoutesFromElements(
    [
      <Route index Component={HomePage}></Route>,
      <Route path='/about' element= {<h1>About</h1>}></Route>
    ])
);
export function App() {

  return <RouterProvider router={router}/>;
}

export default App;
