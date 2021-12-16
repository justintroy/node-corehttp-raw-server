<div id="top"></div>

[![MIT License][license-shield]][license-url]

## About The Project

Basic http and file-based routing implementation using node core modules. Made for academic purposes to demonstrate what happens behind the scenes of libraries that work with HTTP _(ExpressJs)_.

This project follows the old way of serving views with response headers (HTML only).
Routes is based on .js files inside `/routes` folder. _`root.js` folder is equivalent to `/` path_.

#### Files

-   main.js - main file that boots the server and listens to port `3000`
-   router.js - main router logic, it executes the correct route module based on request.
-   routesHandler.js - handles the file logic on `/routes` folder. It is the responsible for returning the correct file based on url.
-   /routes - directory where route files resides. Files inside will be executed once a HTTP request url match a file name. _`root.js` is equivalent to `/` route._

#### Built With

-   [NodeJS](https://nodejs.org/)

## Usage

To run, simply cd to the directory where <em>main.js</em> resides and enter `node main.js`

## Roadmap

-   [ ] Make routesHandler serve HTML files instead of .js files. _(Server-side rendering)_
-   [ ] Request body buffer parser
-   [ ] _To be continued_

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

[license-shield]: https://img.shields.io/github/license/justintroy/node-corehttp-raw-server.svg?style=for-the-badge
[license-url]: https://github.com/justintroy/node-corehttp-raw-server/blob/master/LICENSE.txt
