import JobListing from '../../components/job-listing/JobListing';
import styles from './JobPage.module.css';

/* eslint-disable-next-line */
export interface JobPageProps {
  
}

export function JobPage(props: JobPageProps) {
  return (
    <section className='bg-blue-500 px-4 py-6'>
      <JobListing isHome={true}/>
    </section>
  );
}

export default JobPage;
