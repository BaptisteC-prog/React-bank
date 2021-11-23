import { lazy } from 'react';

const routes = [
  {
    path: 'home',
    component: lazy(() => import('./home.jsx')),
    exact: true
  },
  {
    path: 'sign-in',
    component: lazy(() => import('./signIn.jsx')),
    exact: true
  },
  {
    path: 'user',
    component: lazy(() => import('./user.jsx')),
    exact: true
  }
];

export default routes;