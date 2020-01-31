const { handle: handleWeatherRequest } = require('./weatherRequestHandler');
const { handle: handleMovieRequest } = require('./movieRequestHandler');

Object.assign(module.exports, {
	handleWeatherRequest,
	handleMovieRequest
});
