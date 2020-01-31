const { get } = require('lodash');
const { getByKey, insertToCache } = require('./cache');
const { send } = require('../connector');
const { configs } = require('../../config/connectors');
const { url, apiKey } = get(configs, 'weather');

const ttl = 1000 * 60 * 10;

const handle = async req => {
	const city = get(req, 'query.city');
	const countryCode = get(req, 'query.countryCode');
	const requestParams = getRequestParams({ city, countryCode });
	const cacheKey = createCacheKey({ city, countryCode });
	const cacheObject = getByKey(cacheKey);
	if (cacheObject) {
		updateCache(requestParams, cacheKey);//not waiting for promise to return
		return cacheObject;
	}
	const response = await send(requestParams);
	insertToCache(cacheKey, response.data, ttl);
	return get(response, 'data');
};

const updateCache = async (requestParams, cacheKey) => {
	//try catch and print to log
	const response = await send(requestParams);
	insertToCache(cacheKey, response.data, ttl);
};

const createCacheKey = ({ city, countryCode }) => `${url}:${city}:${countryCode}`;

const getRequestParams = ({ city, countryCode }) => ({
	method: 'GET',
	url,
	params: {
		q: `${city},${countryCode}`,
		APPID: apiKey
	}
});

Object.assign(module.exports, {
	handle
});
