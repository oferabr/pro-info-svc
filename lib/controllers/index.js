const { weatherInfo } = require('./weather');
const { movieInfo } = require('./movies');

Object.assign(module.exports, {
	weatherInfo,
	movieInfo
});
