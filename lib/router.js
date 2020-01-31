const { weatherInfo, movieInfo } = require('./controllers');

const initRoutes = express => {
	const router = express.Router();

	router.get('/weather/info', weatherInfo);
	router.get('/movies/info', movieInfo);

	return router;
};

Object.assign(module.exports,
	{ initRoutes }
);
