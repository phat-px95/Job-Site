import styles from './Spinner.module.css';
import ClipLoader from 'react-spinners/ClipLoader'

/* eslint-disable-next-line */
export interface SpinnerProps {
  loading: boolean
}

const override = {
  display: 'block',
  margin: '100px auto'
}

export function Spinner({loading = true}: SpinnerProps) {
  return (
    <ClipLoader 
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
}

export default Spinner;
