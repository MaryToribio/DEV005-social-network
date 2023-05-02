// Este es el punto de entrada de tu aplicacion

import login from './components/login.js';
import { register } from './components/register.js';
import { error } from './components/error.js';
// import seniorFace from './components/seniorFace.js';
import { home } from './components/home.js';

const root = document.getElementById('root');

const myRoutes = [
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/error', component: error },
  // { path: '/seniorFace', component: seniorFace },
  { path: '/home', component: home },
];
const defaultMyRoutes = '/login';
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
