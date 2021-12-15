<div id="top"></div>

[[MIT License][license-shield]][license-url]

## About The Project

Basic http and file-based routing implementation without the use of external libraries and using node core modules only. Made for academic purposes to work on what happens behind the scenes of libraries that work with HTTP.

This project follows the old way of serving views with response headers (HTML only).
Routes is based on .js files inside `/routes` folder. `root.js` folder is equivalent to `/` path.

#### Files

-   main.js - main file that boots the server and listens to port `3000`
-   router.js - main router logic, it executes the correct route module based on request.
-   routesHandler.js - handles the file logic on `/routes` folder. It is the responsible for returning the correct file based on url.
-   /routes - directory where route files resides. Files inside will be executed once a HTTP request url match a file name. <em>`root.js` is equivalent to `/` route.</em>

#### Built With

-   [NodeJS](https://nodejs.org/)

## Usage

To run, simply cd to the directory where <em>main.js</em> resides and enter `node main.js`

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/justintroy/node-corehttp-raw-server/blob/master/LICENSE.txt
