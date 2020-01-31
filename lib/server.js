const express = require('express');
const helmet = require('helmet');
const app = express();
const cors = require('cors');

const { initRoutes } = require('../lib/router');

try {
	app.use(cors());
	app.use(helmet());

	const router = initRoutes(express);

	app.use('/prospera', router);
	app.listen(process.env.PORT || 3000);
	console.log('Server up and running...');
} catch (e) {
	console.log('Server failed to start with error:\n', e);
}
