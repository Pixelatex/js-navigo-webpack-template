// Views
import HomeView from './pages/home';
import AboutView from './pages/about';
import FirebaseView from './pages/firebase-example';

export default [
  { path: '/', view: HomeView },
  { path: '/about', view: AboutView },
  { path: '/firebase', view: FirebaseView },
];
