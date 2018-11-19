// Only import the compile function from handlebars instead of the entire library
import { compile } from 'handlebars';

const MapboxClient = require('mapbox');

// Import the template to use

const genericTemplate = require('../templates/generic-page.handlebars');


export default () => {
  // Data to be passed to the template
  const title = 'Mapbox example';
  const content = 'content here';

  // Mapbox code
  const accessToken = null;
  if (accessToken) {
    const client = new MapboxClient(accessToken);
    client.geocodeForward('Chester, NJ', (err, data, res) => {
      // data is the geocoding result as parsed JSON
      // res is the http response, including: status, headers and entity properties
      console.log(err, data, res, 'mapbox response');
    });
  } else {
    console.error('Mapbox will crash the page if no access token is given.');
  }

  // Return the compiled template to the router
  return compile(genericTemplate)({ title, content });
};
