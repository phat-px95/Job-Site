import styles from './JobPage.module.css';

/* eslint-disable-next-line */
export interface JobPageProps {}

export function JobPage(props: JobPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to JobPage!</h1>
    </div>
  );
}

export default JobPage;
