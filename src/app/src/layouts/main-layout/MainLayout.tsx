import Navbar from '../../components/nav/Navbar';
import styles from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';

/* eslint-disable-next-line */
export interface MainLayoutProps {}

export function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
