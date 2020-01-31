const axios = require('axios');

const send = async (requestParams) => await axios(requestParams);

Object.assign(module.exports, {
	send
});
