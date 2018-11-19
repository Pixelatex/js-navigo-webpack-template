// Only import the compile function from handlebars instead of the entire library
import { compile } from 'handlebars';
// Import the template to use
const homeTemplate = require('../templates/home.handlebars');

export default () => {
  // Data to be passed to the template
  const user = 'Test user';
  // Return the compiled template to the router
  return compile(homeTemplate)({ user });
};
