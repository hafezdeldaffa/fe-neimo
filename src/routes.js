import IndonesiaData from './container/IndonesiaData';
import LandingPage from './container/LandingPage';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from "react-icons/md";

const routes = [
  {
    name: 'Beranda',
    path: '/',
    component: LandingPage,
  },
  {
    name: 'Data Indonesia',
    path: '/indonesia',
    component: IndonesiaData,
  },
  {
    name: 'Data Global',
    path: '/global',
  },
  {
    name: 'Profile',
    path: '/profile',
  },  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdIcons.MdDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Data Keluarga',
    path: '/data-keluarga',
    icon: <FaIcons.FaList />,
    cName: 'nav-text'
  },
  {
    title: 'Data Positif',
    path: '/data-positif',
    icon: <FaIcons.FaList />,
    cName: 'nav-text'
  },
  {
    title: 'Data Vaksin',
    path: '/data-vaksin',
    icon: <FaIcons.FaList />,
    cName: 'nav-text'
  },
  {
    title: 'Data Laporan RT',
    path: '/data-laporan',
    icon: <FaIcons.FaList />,
    cName: 'nav-text'
  },
  {
    title: 'Buat Laporan',
    path: '/buat-laporan',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
];

export default routes;
