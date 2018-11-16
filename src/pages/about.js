// Import the template to use
const aboutTemplate = require('../templates/about.handlebars');
// Only import the compile function from handlebars instead of the entire library
import { compile } from 'handlebars';

export default () => {
    // Data to be passed to the template
    const name = 'Test inc.';
    // Return the compiled template to the router
    return compile(aboutTemplate)({ name });
}