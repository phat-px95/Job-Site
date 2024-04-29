import JobListing from '../../components/job-listing/JobListing';
import styles from './JobPage.module.css';

/* eslint-disable-next-line */
export interface JobsPageProps {
  
}

export function JobsPage(props: JobsPageProps) {
  return (
    <section className='px-4 py-6'>
      <JobListing isHome={true}/>
    </section>
  );
}

export default JobsPage;
