import Navigo from 'navigo';
import handlebars, { compile } from 'handlebars';
import './styles/main.sass';

import routes from './routes';

// Partials
const header = require('./partials/header.handlebars');
const footer = require('./partials/footer.handlebars');

// Register the partial components
handlebars.registerPartial('header', compile(header)({ title: 'Just another site' }));
handlebars.registerPartial('footer', compile(footer)({ text: 'Template made for the one and only lester' }));

// Router logic to load the correct template when needed
const router = new Navigo(window.location.origin, true);

routes.forEach((route) => {
  router.on(route.path, () => {
    route.view();
  });
});

// This catches all non-existing routes and redirects back to the home
router.notFound(() => {
  router.navigate('/');
});
router.resolve();
window.onload = () => {
  document.onclick = (e) => {
    e.preventDefault();
    router.navigate(e.target.getAttribute('href'));
  };
};
