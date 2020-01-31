const { handleWeatherRequest } = require('../services');

const weatherInfo = async (req, res) => {
	try {
		const result = await handleWeatherRequest(req);
		res.send(result);
	} catch (e) {
		console.log(e);
		res.status(500).send({
			error: {
				title: 'Request cannot be completed',
				message: 'Please try again later'
			}
		});
	}
};

Object.assign(module.exports, {
	weatherInfo
});
