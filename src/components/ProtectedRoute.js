import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
//import routes from '.routes'; // Route list
//import Loader from 'sharedComponent/Loader';

const ProtectedRoutes = () => (
   
  <Switch> 
    <Suspense
      fallback={<p>⌛️💤Chargement...</p>}
    >
      {routes.map(({ component: Component, path, exact }) => (
        <Route
          path={`/${path}`}
          key={path}
          exact={exact}
        >
          <Component />
        </Route>
      ))}
    </Suspense>
  </Switch>
);

export default ProtectedRoutes;