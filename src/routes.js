import IndonesiaData from './container/IndonesiaData';
import LandingPage from './container/LandingPage';

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
];

export default routes;
