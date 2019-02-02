# MeanAppIntegrated

This is a project build using MEAN stack. The front-end is developed using Angular. Backened used node.js, express and mongoose (MongoDB)

# Build

Run `ng build` to build the project. The build artifacts will be stored in the *dist/* directory. Use the *--prod* flag for a production build.

Note: Only angular files will get stored in dist.

To install npm packages run  `npm install`


# Development server

Run `node server/index.js` to start the node application. Navigate to `http://localhost:5000/`

# Directory Structure

The backend node/express application contents are stored in *server* directory.

The Angular files are in *src* directory

*package.json* is shared by both angular and express.

# Integration

Express application provides course rest APIs. The url is **/api/courses**

Angular uses http methods to access the rest apis.

Angular files bundled in dist folder are served as static files by using below line in express code (*server/index.js*):
`
app.use(express.static('dist/HttpServices'));
`
