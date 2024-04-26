import Navbar from '../../components/nav/Navbar';
import styles from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

/* eslint-disable-next-line */
export interface MainLayoutProps {}

export function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default MainLayout;
