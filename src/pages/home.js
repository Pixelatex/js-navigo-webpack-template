// Import the template to use
const homeTemplate = require('../templates/home.handlebars');
import { compile } from 'handlebars';

export default () => {
    // Data to be passed to the template
    const user = 'Test user';
    // Return the compiled template to the router
    return compile(homeTemplate)({ user });
}