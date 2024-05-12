import { ReactNode } from 'react';
import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  children?: ReactNode,
  bg?: string,
}

export function Card({children, bg = 'bg-red-200'}: CardProps) {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  );
}

export default Card;
