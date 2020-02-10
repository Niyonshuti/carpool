/**
 * Gerayo Ltd.
 * @author Eric Serge Uwimana
 */

// Import basic libraries
const path = require('path');
const debug = require('debug')('server');

// Import configuration
const { AppConfig } = require('./configs');

// Import necessary libraries
const http = require('http');
const express = require('express');

//create express app and conect and http server
const app = express();
const server = http.createServer(app);

// Define server events
server.on('error', (error) => {
	debug(`Listen error: ${error.code}`);
});

// Import necessary middlewares
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');

// Include middleware
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Declare the port to be used
const port = AppConfig.port || 5000;

// Import database
const database = require('./configs/database');
/**
 * Connect to the database, then execute the "callback" function
 * In this case an anonymous function which start listening for requests.
 */
database((sq) => {
	// Initialize passport strategy
	require('./configs/passport')(passport);
	// Include routes
	const router = require('./routers');
	app.use('/api/' + AppConfig.apiRoot, router);
	if (AppConfig.environment === 'production') {
		// set public folders and redirect all request to it
		app.use(express.static(path.join(__dirname, 'public')));
		app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
	}
	server.listen(port, () => {
		sq
			.authenticate()
			.then(() => {
				debug(`Express server listening on port ${port}`);
				console.log(`Express server listening on port ${port}`);
				debug(`You should be able to connect to it on ${AppConfig.hostname}:${port}`);
				console.log(`You should be able to connect to it on ${AppConfig.hostname}`);
			})
			.catch((error) => {
				server.close(() => {
					debug(`${error}`);
					console.log(`${error}`);
				});
			});
	});
});

//export server for testing
module.exports = server;
