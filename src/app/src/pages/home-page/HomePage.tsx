import Hero from '../../components/hero/Hero';
import Homecards from '../../components/home-cards/HomeCards';
import JobListing from '../../components/job-listing/JobListing';
import Navbar from '../../components/nav/Navbar';
import ViewAllJobs from '../../components/view-all-jobs/ViewAllJobs';
import styles from './HomePage.module.css';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <>
    <Navbar />

    {/* <!-- Hero --> */}
    <Hero />

    {/* <!-- Developers and Employers --> */}
    <Homecards />

    {/* <!-- Browse Jobs --> */}
    <JobListing />
    <ViewAllJobs />
  </>
  );
}

export default HomePage;
