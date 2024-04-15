import styles from './accordian.module.css';

/* eslint-disable-next-line */
export interface AccordianProps {}

export function Accordian(props: AccordianProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Accordian!</h1>
    </div>
  );
}

export default Accordian;
