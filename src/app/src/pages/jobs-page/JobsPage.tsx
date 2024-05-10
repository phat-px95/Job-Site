import { createContext } from 'react';
import JobListing from '../../components/job-listing/JobListing';
import styles from './JobPage.module.css';

/* eslint-disable-next-line */
export interface JobsPageProps {
  
}
export type IJobContext = {
  type: string
}
export const JobContext = createContext<IJobContext>({} as IJobContext);
export function JobsPage(props: JobsPageProps) {
  const initialContextValue = {type: 'Type: '} as IJobContext;
  return (
    <JobContext.Provider value={initialContextValue}>
      <section className='px-4 py-6'>
        <JobListing isHome={true}/>
      </section>
    </JobContext.Provider>
  );
}

export default JobsPage;
