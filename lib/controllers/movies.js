const { handleMovieRequest } = require('../services');

const movieInfo = async (req, res) => {
	try {
		const result = await handleMovieRequest(req);
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
	movieInfo
});
