import { fullName } from './contact';

const allRoutes = [
  {
    path: '/',
    label: fullName
  },
  {
    path: '/about',
    label: 'About'
  },
  {
    path: '/resume',
    label: 'Resume'
  },
  {
    path: '/blog',
    label: 'Blog'
  },
  // {
  //   path: '/projects',
  //   label: 'Projects'
  // },
  {
    path: '/stats',
    label: 'Stats'
  },
  {
    path: '/contact',
    label: 'Contact'
  }
];

const mainRoute = allRoutes[0];
const majorRoutes = allRoutes.slice(1);

export {
  allRoutes,
  mainRoute,
  majorRoutes
}
