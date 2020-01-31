const configs = {
	weather: {
		url: 'http://api.openweathermap.org/data/2.5/weather',
		apiKey: 'c2152ce33eec94f628bcb40cda3da446'
	},
	movies: {
		url: 'http://www.omdbapi.com/',
		apiKey: 'dce24c91'
	}
};

Object.assign(module.exports, {
	configs
});
