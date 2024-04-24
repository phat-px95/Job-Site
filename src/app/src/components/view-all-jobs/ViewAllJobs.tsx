import { Link } from 'react-router-dom';
import styles from './ViewAllJobs.module.css';

/* eslint-disable-next-line */
export interface ViewAllJobsProps {}

export function ViewAllJobs(props: ViewAllJobsProps) {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/jobs"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs
      </Link>
    </section>
  );
}

export default ViewAllJobs;
