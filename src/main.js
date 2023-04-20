// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

import login from './components/login.js';
import register from './components/register.js';
import error from './components/error.js';
import seniorFace from './components/seniorFace.js';

const root = document.getElementById('root');

const myRoutes = [
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/error', component: error },
  { path: '/seniorFace', component: seniorFace },
];
const defaultMyRoutes = '/';

function navigateTo(hash) {
  const myRouterFind = myRoutes.find((itemRouter) => itemRouter.path === hash);
  console.log('prueba1', myRouterFind);

  if (myRouterFind && myRouterFind.component) {
    window.history.pushState(
      {},
      myRouterFind.path,
      window.location.origin + myRouterFind.path,
    );
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(myRouterFind.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultMyRoutes);
